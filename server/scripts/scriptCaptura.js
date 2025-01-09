import React from 'react';
import { Container, Typography, Box, TextField, Button, Card, CardContent, Grid, Paper } from '@mui/material';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            framesFolderPath: '',
            pdfFolderPath: '',
            pdfName: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmitFrames = this.handleSubmitFrames.bind(this);
        this.handleSubmitPDF = this.handleSubmitPDF.bind(this);
    }

    handleInputChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    async handleSubmitFrames(event) {
        event.preventDefault();
        const { framesFolderPath } = this.state;
        const body = JSON.stringify({ folder: framesFolderPath });
        const url = 'https://gustavohesse.com.br/capture-frames';

        console.log(`Caminho absoluto informado: ${framesFolderPath}`);

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body
            });

            if (!response.ok) {
                throw new Error(`Erro HTTP! status: ${response.status}`);
            }

            const result = await response.text();
            console.log(`Resposta do servidor: ${result}`);
            alert(result);
        } catch (error) {
            console.error('Erro durante a requisição:', error);
            alert('Ocorreu um erro ao capturar as telas.');
        }
    }

    async handleSubmitPDF(event) {
        event.preventDefault();
        const { pdfFolderPath, pdfName } = this.state;
        const body = JSON.stringify({ folder: pdfFolderPath, pdfName });
        const url = 'https://gustavohesse.com.br/export-pdf';

        console.log(`Caminho absoluto informado: ${pdfFolderPath}`);
        console.log(`Nome do PDF: ${pdfName}`);

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body
            });

            if (!response.ok) {
                throw new Error(`Erro HTTP! status: ${response.status}`);
            }

            const result = await response.text();
            console.log(`Resposta do servidor: ${result}`);
            alert(result);
        } catch (error) {
            console.error('Erro durante a requisição:', error);
            alert('Ocorreu um erro ao criar o PDF.');
        }
    }

    render() {
        return (
            <Container maxWidth="md">
                <Paper variant="outlined" sx={{ padding: 2, marginTop: 10 }}>
                    <Typography variant="h5" component="h2" gutterBottom align='center'>
                        Banners
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" component="h2" gutterBottom>
                                        Exportar Frames Finais
                                    </Typography>
                                    <Typography variant="body2" gutterBottom pb={1}>
                                        Exporta todas os frames finais dos HTMLS. Basta selecionar a pasta com o DSID que contenha todo seu projeto.
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Estrutura da pasta DSID: <br />
                                        DSID > Deliverables > Seus formatos de HTML.
                                    </Typography>
                                    <Box component="form" noValidate onSubmit={this.handleSubmitFrames}>
                                        <TextField
                                            label="Caminho Absoluto da Pasta para Frames Finais"
                                            variant="outlined"
                                            fullWidth
                                            margin="normal"
                                            name="framesFolderPath"
                                            value={this.state.framesFolderPath}
                                            onChange={this.handleInputChange}
                                            required
                                        />
                                        <Button type="submit" variant="contained" color="primary" fullWidth>
                                            Exportar Frames Finais
                                        </Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" component="h2" gutterBottom>
                                        Criar PDF de Storyboard
                                    </Typography>
                                    <Typography variant="body2" gutterBottom pb={1}>
                                        Cria storyboard a partir de HTML
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Selecione a pasta do formato que deseja criar: <br />
                                        DSID > Deliverables > 300x250 (Selecione essa).<br /><br />
                                        O conteúdo será exportado para a pasta:<br />
                                        DSID > sb > (Aqui estará seu storyboard)
                                    </Typography>
                                    <Box component="form" noValidate onSubmit={this.handleSubmitPDF}>
                                        <TextField
                                            label="Caminho Absoluto da Pasta para PDF de Storyboard"
                                            variant="outlined"
                                            fullWidth
                                            margin="normal"
                                            name="pdfFolderPath"
                                            value={this.state.pdfFolderPath}
                                            onChange={this.handleInputChange}
                                            required
                                        />
                                        <TextField
                                            label="Nome do PDF"
                                            variant="outlined"
                                            fullWidth
                                            margin="normal"
                                            name="pdfName"
                                            value={this.state.pdfName}
                                            onChange={this.handleInputChange}
                                            required
                                        />
                                        <Button type="submit" variant="contained" color="secondary" fullWidth>
                                            Exportar PDF de Storyboard
                                        </Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        );
    }
}

export default App;