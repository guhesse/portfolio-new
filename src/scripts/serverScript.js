const express = require('express');
const path = require('path');
const cors = require('cors'); // Importe o middleware cors
const FrameCapturer = require('./captureFrames');
const PDFCreator = require('./createPDF');

const app = express();
const port = 5000; // Alterar para uma porta diferente

// Use o middleware cors para permitir requisições de origens diferentes
app.use(cors());

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.get('/storyboarder', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'build', 'storyboarder.html'));
});

app.post('/capture-frames', async (req, res) => {
    const { folder } = req.body;
    const baseDir = path.resolve(folder);

    console.log(`Caminho absoluto recebido: ${folder}`);
    console.log(`Diretório base: ${baseDir}`);

    try {
        const frameCapturer = new FrameCapturer(baseDir);
        await frameCapturer.captureFrames();

        res.send('Capturas concluídas');
    } catch (error) {
        console.error('Erro ao capturar as telas:', error);
        res.status(500).send('Ocorreu um erro ao capturar as telas.');
    }
});

app.post('/export-pdf', async (req, res) => {
    const { folder, pdfName } = req.body;
    const baseDir = path.resolve(folder);

    console.log(`Caminho absoluto recebido para PDF: ${folder}`);
    console.log(`Diretório base: ${baseDir}`);
    console.log(`Nome do PDF: ${pdfName}`);

    try {
        const pdfCreator = new PDFCreator(baseDir, pdfName);
        await pdfCreator.createPDF();

        res.send('PDF criado com sucesso');
    } catch (error) {
        console.error('Erro ao criar o PDF:', error);
        res.status(500).send('Ocorreu um erro ao criar o PDF.');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});