class TabelaDownloads {

    constructor() {
        this.table = document.getElementById("table-downloads")
    }


    atualiza(listaDownloads) {
        this.table.innerHTML = ''
        this._criaCabecalho()
        this._preencheDados(listaDownloads)
    }


    _criaCabecalho() {
        const thead = document.createElement("thead")
        thead.classList.add("table-custom")
        this.table.appendChild(thead)
        
        const tr = document.createElement("tr")

        this._adicionaItemTh(tr, "id", "col")
        this._adicionaItemTh(tr, "Titulo", "col")
        this._adicionaItemTh(tr, "Usuario", "col")
        this._adicionaItemTh(tr, "Status", "col")
        this._adicionaItemTh(tr, "Download", "col")

        thead.appendChild(tr)
    }


    _preencheDados(listaDownloads) {
        const tbody =  document.createElement("tbody")
        this.table.appendChild(tbody)
        
        listaDownloads.forEach(element => {
            console.log(element.status)

            const tr = document.createElement("tr")
            tr.classList.add("table")
            tbody.appendChild(tr)

            this._adicionaItemTh(tr, element.id, "row")
            this._adicionaItemTh(tr, element.titulo, "row")
            this._adicionaItemTd(tr, `${element.email.slice(0,8)}`)
            this._adicionaItemTd(tr, element.status)
            this._adicionaItemTd(tr, "_link")
        })
    }
    
    
    _adicionaItemTh(cabecalho, texto, scope) {
        const th = document.createElement("th")
        th.setAttribute("scope", scope)
        th.classList.add("cabecalho-item")
        th.textContent=texto
        cabecalho.appendChild(th)
    }
    
    
    _adicionaItemTd(cabecalho, texto) {
        const th = document.createElement("td")
        th.classList.add("cabecalho-item")
        th.textContent=texto
        cabecalho.appendChild(th)
    }

}