class TabelaNos {

    constructor() {
        this.table = document.getElementById("table-nodes")
    }


    atualiza(listaDados) {
        this.table.innerHTML = ''
        this._criaCabecalho()
        this._preencheDados(listaDados)
    }


    _preencheDados(listaDados) {
        const tbody =  document.createElement("tbody")
        this.table.appendChild(tbody)
        
        listaDados.forEach(element => {
            console.log(element.status)

            const tr = document.createElement("tr")
            tr.classList.add("table")
            tbody.appendChild(tr)

            this._adicionaItemTh(tr, element.status.avaliable, "row")
            this._adicionaItemTd(tr, `No: ${element.status.nodeNumber}`)
            this._adicionaItemTd(tr, element.status.stop)
            

        })
    }


    _criaCabecalho() {
        const thead = document.createElement("thead")
        thead.classList.add("table-custom")
        this.table.appendChild(thead)
        
        const tr = document.createElement("tr")

        this._adicionaItemTh(tr, "Item", "col")
        this._adicionaItemTh(tr, "Descrição", "col")
        this._adicionaItemTh(tr, "Status", "col")

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