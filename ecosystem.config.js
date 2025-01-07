// filepath: /c:/Users/Gustavo/Documentos-Pessoal/portfolio-new/ecosystem.config.js
module.exports = {
    apps: [
        {
            name: 'portfolio-new',
            script: 'server.js', // Substitua por seu arquivo de entrada do servidor
            instances: 1, // Defina o número de instâncias desejado
            exec_mode: 'cluster',
            env: {
                NODE_ENV: 'development'
            },
            env_production: {
                NODE_ENV: 'production'
            }
        }
    ]
};