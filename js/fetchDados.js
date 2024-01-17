const divResources = document.getElementById("div-resource-charts")

function buscaDadosNovos() {
    return {
        
        "masterNode": {
            "avaliable": true
        },

        "nodes": [
            {
                "status": {
                    "avaliable": true,
                    "nodeNumber": 1,
                    "running": false,
                    "stop": false
                }
            },
            {
                "status": {
                    "avaliable": true,
                    "nodeNumber": 2,
                    "running": false,
                    "stop": false
                }
            },
            {
                "status": {
                    "avaliable": true,
                    "nodeNumber": 3,
                    "running": false,
                    "stop": false
                }
            },
            {
                "status": {
                    "avaliable": true,
                    "nodeNumber": 4,
                    "running": false,
                    "stop": false
                }
            },
            {
                "status": {
                    "avaliable": true,
                    "nodeNumber": 5,
                    "running": false,
                    "stop": false
                }
            }
        ],

        "pending": [],

        "resources": {
            "arch": "amd64",
            "cpu": {
                "cores": 8,
                "load": 0
            },
            "disk": {
                "free": 216,
                "total": 456,
                "unit": "GB",
                "used": 239
            },
            "maxDisk":500,
            "memoryRam": {
                "free": 77,
                "total": 366,
                "unit": "MB",
                "used": 288
            },
            "os": "Windows 11",
            "version": "10.0"
        },

        "logs": [
            {
                "msg": "Messagem 1 aqui",
                "data": "02/01/2024"
            },
            {
                "msg": "Uma segunda menssagem",
                "data": "02/01/2024"
            },
            {
                "msg": "Terceira msg que fica aqui",
                "data": "02/01/2024"
            },
            {
                "msg": "Quarta msg",
                "data": "02/01/2024"
            },
            {
                "msg": "Ultima mensagem",
                "data": "02/01/2024"
            },
            ],
        "runned": [
            {
                "ano": 2022,
                "downloadable": true,
                "email": "denis.costa@dnit.gov.br",
                "finishTIme": "2024-01-14Z",
                "id": 10,
                "startTime": "2024-02-01Z",
                "status": "FINALIZADO",
                "titulo": "AP-2023"
            },
            {
                "ano": 2022,
                "downloadable": true,
                "email": "denis.costa@dnit.gov.br",
                "finishTIme": "2024-01-14Z",
                "id": 9,
                "startTime": "2024-01-09Z",
                "status": "DEPRECIADO",
                "titulo": "AP-2023"
            },
            {
                "ano": 2022,
                "downloadable": false,
                "email": "denis.costa@dnit.gov.br",
                "id": 1,
                "startTime": "2024-01-01Z",
                "status": "DEPRECIADO",
                "titulo": "AP-2023"
            }
        ]
    }
}