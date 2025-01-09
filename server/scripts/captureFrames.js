const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

class FrameCapturer {
    constructor(baseDir) {
        this.baseDir = baseDir;
        this.directories = [
            '160x600',
            '250x250',
            '300x250',
            '300x600',
            '320x100',
            '320x50',
            '336x280',
            '728x90',
            '970x250',
            '970x90'
        ];
    }

    async captureFrames() {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        const folderNumber = path.basename(this.baseDir);

        for (const dir of this.directories) {
            const filePath = path.join(this.baseDir, 'deliverables', dir, `${folderNumber}-index.html`);

            if (!fs.existsSync(filePath)) {
                console.warn(`Arquivo não encontrado: ${filePath}`);
                continue;
            }

            console.log(`Navegando para ${filePath}`);
            await page.goto(`file://${filePath}`);

            const [width, height] = dir.split('x').map(Number);
            await page.setViewport({ width, height });

            console.log(`Adicionando tl.pause(99) para pausar a animação...`);
            await page.evaluate(() => {
                if (typeof tl !== 'undefined' && typeof tl.pause === 'function') {
                    tl.pause(99);
                }
            });

            await this.waitForTimeout(1000);

            const screenshotPath = path.join(this.baseDir, 'deliverables', `${dir}.png`);
            console.log(`Salvando captura em ${screenshotPath}`);
            await page.screenshot({ path: screenshotPath });
            console.log(`Captura da última frame de ${filePath}`);

            console.log(`Removendo tl.pause(99)...`);
            await page.evaluate(() => {
                if (typeof tl !== 'undefined' && typeof tl.pause === 'function') {
                    tl.pause(0);
                }
            });
        }

        await browser.close();
    }

    waitForTimeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

module.exports = FrameCapturer;