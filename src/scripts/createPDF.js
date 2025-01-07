const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const { PDFDocument, rgb } = require('pdf-lib');

class PDFCreator {
    constructor(baseDir, pdfName) {
        this.baseDir = baseDir;
        this.pdfName = pdfName;
    }

    async createPDF() {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // Encontrar o arquivo HTML usando regex
        const files = fs.readdirSync(this.baseDir);
        const htmlFile = files.find(file => file.match(/^\d+-index\.html$/));
        if (!htmlFile) {
            throw new Error('Arquivo HTML não encontrado');
        }

        const filePath = path.join(this.baseDir, htmlFile);
        await page.goto(`file://${filePath}`);

        const bannerDimensions = await page.evaluate(() => {
            const banner = document.getElementById('banner');
            const style = window.getComputedStyle(banner);
            return {
                width: parseInt(style.width),
                height: parseInt(style.height)
            };
        });

        await page.setViewport({
            width: bannerDimensions.width,
            height: bannerDimensions.height,
            deviceScaleFactor: 2
        });

        const screenshotsDir = path.resolve(this.baseDir, '..', '..', 'sb');
        if (!fs.existsSync(screenshotsDir)) {
            fs.mkdirSync(screenshotsDir);
        }

        const screenshotPaths = [];
        const pauseTimes = [2, 5, 8, 11, 14];
        for (let i = 0; i < pauseTimes.length; i++) {
            const screenshotPath = await this.takeScreenshot(page, pauseTimes[i], i + 1, screenshotsDir);
            screenshotPaths.push(screenshotPath);
        }

        await browser.close();

        await this.createPDFDocument(screenshotPaths, screenshotsDir, bannerDimensions);
    }

    async takeScreenshot(page, time, index, screenshotsDir) {
        await page.evaluate((time) => {
            tl.pause(time);
        }, time);
        const screenshotPath = path.join(screenshotsDir, `f${index}.png`);
        await page.screenshot({ path: screenshotPath });
        return screenshotPath;
    }

    async createPDFDocument(screenshotPaths, screenshotsDir, bannerDimensions) {
        const margin = 30;
        const pageWidth = bannerDimensions.width * 3 + margin * 4;
        const pageHeight = bannerDimensions.height * 2 + margin * 3;

        const pdfDoc = await PDFDocument.create();
        const page = pdfDoc.addPage([pageWidth, pageHeight]);

        const positions = [
            { x: margin, y: pageHeight - bannerDimensions.height - margin },
            { x: bannerDimensions.width + margin * 2, y: pageHeight - bannerDimensions.height - margin },
            { x: bannerDimensions.width * 2 + margin * 3, y: pageHeight - bannerDimensions.height - margin },
            { x: margin, y: pageHeight - bannerDimensions.height * 2 - margin * 2 },
            { x: bannerDimensions.width + margin * 2, y: pageHeight - bannerDimensions.height * 2 - margin * 2 }
        ];

        for (let i = 0; i < screenshotPaths.length; i++) {
            const imageBytes = fs.readFileSync(screenshotPaths[i]);
            const image = await pdfDoc.embedPng(imageBytes);
            page.drawImage(image, {
                x: positions[i].x,
                y: positions[i].y,
                width: bannerDimensions.width,
                height: bannerDimensions.height,
            });

            // Adicionar o nome do frame abaixo da imagem
            page.drawText(`Frame ${i + 1}`, {
                x: positions[i].x + bannerDimensions.width / 2 - 20,
                y: positions[i].y - 15,
                size: 10,
                color: rgb(0, 0, 0)
            });
        }

        const pdfBytes = await pdfDoc.save();
        const pdfPath = path.join(screenshotsDir, `${this.pdfName}.pdf`);
        fs.writeFileSync(pdfPath, pdfBytes);

        console.log(`PDF criado com sucesso em: ${pdfPath}`);
    }
}

module.exports = PDFCreator;