class TabelaLogs {

    constructor() {
        this.table = document.getElementById("table-logs")
    }


    atualiza(listaLogs) {
        this.table.innerHTML = ''
        this._criaCabecalho()
        this._preencheDados(listaLogs)
    }


    _preencheDados(listaLogs) {
        const tbody =  document.createElement("tbody")
        this.table.appendChild(tbody)
        
        listaLogs.forEach(element => {
            console.log(element.status)

            const tr = document.createElement("tr")
            tr.classList.add("table")
            tbody.appendChild(tr)

            this._adicionaItemTh(tr, element.msg, "row")
            this._adicionaItemTh(tr, element.data, "row")
        })
    }


    _criaCabecalho() {
        const thead = document.createElement("thead")
        thead.classList.add("table-custom")
        this.table.appendChild(thead)
        
        const tr = document.createElement("tr")

        this._adicionaItemTh(tr, "Mensagem", "col")
        this._adicionaItemTh(tr, "Data", "col")

        thead.appendChild(tr)
    }
    
    
    _adicionaItemTh(cabecalho, texto, scope) {
        const th = document.createElement("th")
        th.setAttribute("scope", scope)
        th.textContent=texto
        cabecalho.appendChild(th)
    }
    
    
    _adicionaItemTd(cabecalho, texto) {
        const th = document.createElement("td")
        th.textContent=texto
        cabecalho.appendChild(th)
    }

}