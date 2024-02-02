class TabelaNos {

    constructor() {
        this.table = document.getElementById("table-nodes")
    }


    atualiza(listaDados) {
        this.table.innerHTML = ''
        this._criaCabecalho()
        this._preencheDados(listaDados)
    }


    _criaCabecalho() {
        const thead = document.createElement("thead")
        thead.classList.add("table-custom")
        this.table.appendChild(thead)
        
        const tr = document.createElement("tr")

        this._adicionaItemTh(tr, "Stat", "col")
        this._adicionaItemTh(tr, "Node", "col")
        this._adicionaItemTh(tr, "Stop", "col")

        thead.appendChild(tr)
    }


    _preencheDados(listaDados) {
        const tbody =  document.createElement("tbody")
        this.table.appendChild(tbody)
        
        this._adicionaMaster(tbody)


        listaDados.forEach(element => {

            const tr = document.createElement("tr")
            tr.classList.add("table")
            tbody.appendChild(tr)

            this._adicionaStatus(element, tr)
            
            this._adicionaItemTd(tr, `No: ${element.status.nodeNumber}`)
            
            this._adicionaBotaoCancelar(element.status.running && !element.status.stop, tr)
        })
    }


    _adicionaMaster(tbody) {
        const trMaster = document.createElement("tr")
        trMaster.classList.add("table")
        tbody.appendChild(trMaster)

        this._adicionaStatus(true, trMaster)
        this._adicionaItemTd(trMaster, 'Master')
        this._adicionaBotaoCancelar(false, trMaster)
    }


    _adicionaStatus(status, tr) {
        const th = document.createElement("th")
        const iconStatus = document.createElement("img")

        iconStatus.src = status ? "icons/status_true.png" : "icons/status_false.png"

        th.appendChild(iconStatus)
        tr.appendChild(th)
    }


    _adicionaBotaoCancelar(status, tr,) {
        const tdStop = document.createElement("td")
        const iconStop = document.createElement("img")

        if (status) {
            iconStop.src = "icons/excluir.png" 
            const linkToAnotherPage = document.createElement("a");
            linkToAnotherPage.href = "your_page.html";
            linkToAnotherPage.appendChild(iconStop);
    
            tdStop.appendChild(linkToAnotherPage)
            tr.appendChild(tdStop)
        
        } else {
            iconStop.src = "icons/nao_excluir.png"
            tdStop.appendChild(iconStop)
            tr.appendChild(tdStop)
        
        }
    }
    
    
    _adicionaItemTd(cabecalho, texto) {
        const th = document.createElement("td")
        th.textContent=texto
        cabecalho.appendChild(th)
    }
    
    
    _adicionaItemTh(cabecalho, texto, scope) {
        const th = document.createElement("th")
        th.setAttribute("scope", scope)
        th.textContent=texto
        cabecalho.appendChild(th)
    }

}