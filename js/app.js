
// Criar classes
const tabelaNos = new TabelaNos()
const tabelaDownloads = new TabelaDownloads()
const tabelaLogs = new TabelaLogs()


// Tarefa de atualizar a tela
function preencheTabelaNos() {
    const dados = buscaDadosNovos()
    tabelaNos.atualiza(dados.nodes)
    tabelaDownloads.atualiza(dados.runned)
    tabelaLogs.atualiza(dados.logs)
}


// Atualiza a tela a cada 60s
setInterval(preencheTabelaNos(), 60000);