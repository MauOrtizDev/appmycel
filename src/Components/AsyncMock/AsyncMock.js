const productos = [{
    "id": 1,
    "nombre": "Vivo Y77e (T1)",
    "marca":"Vivo",
    "fLanzamiento": "18/08/2022",
    "precio": 1080000,
    "stock":10,
    "caracteristicas": {
        "Diseño": 45,
        "Pantalla": 33,
        "Cámaras": 64,
        "Batería": 48,
        "Otros": 50
    }
}, {
    "id": 2,
    "nombre": "Huawei Nova 10",
    "marca":"Huawei-Xiaomi",
    "fLanzamiento": "08/07/2022",
    "precio": 1900000,
    "stock":10,
    "caracteristicas": {
        "Diseño": 47,
        "Pantalla": 46,
        "Cámaras": 71,
        "Batería": 51,
        "Otros": 62
    }
}, {
    "id": 3,
    "nombre": "Infinix Note 12 Pro 4G",
    "marca":"Otros",
    "fLanzamiento": "26/08/2022",
    "precio": 1057000,
    "stock":10,
    "caracteristicas": {
        "Diseño": 37,
        "Pantalla": 35,
        "Cámaras": 70,
        "Batería": 49,
        "Otros": 53
    }
}, {
    "id": 4,
    "nombre": "Honor X8 5G",
    "marca":"Otros",
    "fLanzamiento": "15/08/2022",
    "precio": 998000,
    "stock":10,
    "caracteristicas": {
        "Diseño": 45,
        "Pantalla": 29,
        "Cámaras": 56,
        "Batería": 45,
        "Otros": 64
    }
}, {
    "id": 5,
    "nombre": "TCL 201",
    "marca":"Otros",
    "fLanzamiento": "05/08/2021",
    "precio": 1199000,
    "stock":10,
    "caracteristicas": {
        "Diseño": 63,
        "Pantalla": 25,
        "Cámaras": 47,
        "Batería": 34,
        "Otros": 30
    }
}, {
    "id": 6,
    "nombre": "IQOO 9T",
    "marca":"Otros",
    "fLanzamiento": "02/08/2022",
    "precio": 2600000,
    "stock":10,
    "caracteristicas": {
        "Diseño": 60,
        "Pantalla": 69,
        "Cámaras": 68,
        "Batería": 55,
        "Otros": 79
    }
}, {
    "id": 7,
    "nombre": "Samsung Galaxy A23 5G",
    "marca":"Samsung",
    "fLanzamiento": "31/03/2022",
    "precio": 8980000,
    "stock":10,
    "caracteristicas": {
        "Diseño": 45,
        "Pantalla": 48,
        "Cámaras": 57,
        "Batería": 53,
        "Otros": 61
    }
}, {
    "id": 8,
    "nombre": "Xiaomi Redmi K50 Extreme Edition",
    "marca":"Huawei-Xiaomi",
    "fLanzamiento": "11/08/2022",
    "precio": 2248000,
    "stock":10,
    "caracteristicas": {
        "Diseño": 44,
        "Pantalla": 67,
        "Cámaras": 75,
        "Batería": 55,
        "Otros": 84
    }
}, {
    "id": 9,
    "nombre": "OnePlus Ace Pro",
    "marca":"Otros",
    "fLanzamiento": "09/08/2022",
    "precio": 2380000,
    "stock":10,
    "caracteristicas": {
        "Diseño": 44,
        "Pantalla": 64,
        "Cámaras": 63,
        "Batería": 57,
        "Otros": 71
    }
}, {
    "id": 10,
    "nombre": "Lenovo Legion Y70",
    "marca":"Otros",
    "fLanzamiento": "23/08/2022",
    "precio": 2590000,
    "stock":10,
    "caracteristicas": {
        "Diseño": 44,
        "Pantalla": 65,
        "Cámaras": 70,
        "Batería": 51,
        "Otros": 80
    }
}, {
    "id": 11,
    "nombre": "Motorola Edge (2022)",
    "marca":"Otros",
    "fLanzamiento": "05/08/2022",
    "precio": 2450000,
    "stock":10,
    "caracteristicas": {
        "Diseño": 63,
        "Pantalla": 66,
        "Cámaras": 63,
        "Batería": 54,
        "Otros": 76
    }
}, {
    "id": 12,
    "nombre": "Oppo Reno8 4G",
    "marca":"Otros",
    "fLanzamiento": "26/08/2022",
    "precio": 1977000,
    "stock":10,
    "caracteristicas": {
        "Diseño": 20,
        "Pantalla": 37,
        "Cámaras": 59,
        "Batería": 48,
        "Otros": 63
    }
}, {
    "id": 13,
    "nombre": "Vivo Y73t",
    "marca":"Vivo",
    "fLanzamiento": "2/06/2022",
    "precio": 1070000,
    "stock":10,
    "caracteristicas": {
        "Diseño": 40,
        "Pantalla": 33,
        "Cámaras": 66,
        "Batería": 50,
        "Otros": 51
    }
}, {
    "id": 14,
    "nombre": "Huawei Mate 50",
    "marca":"Huawei-Xiaomi",
    "fLanzamiento": "2/05/2022",
    "precio": 2300000,
    "stock":10,
    "caracteristicas": {
        "Diseño": 30,
        "Pantalla": 33,
        "Cámaras": 75,
        "Batería": 65,
        "Otros": 72
    }
}, {
    "id": 15,
    "nombre": "Samsung Galaxy A04",
    "marca":"Samsung",
    "fLanzamiento": "12/05/2022",
    "precio": 1305000,
    "stock":10,
    "caracteristicas": {
        "Diseño": 40,
        "Pantalla": 23,
        "Cámaras": 50,
        "Batería": 37,
        "Otros": 42
    }
}, {
    "id": 16,
    "nombre": "Samsung Galaxy Z Flip4",
    "marca":"Samsung",
    "fLanzamiento": "1/07/2022",
    "precio": 3999000,
    "stock":10,
    "caracteristicas": {
        "Diseño": 95,
        "Pantalla": 78,
        "Cámaras": 72,
        "Batería": 60,
        "Otros": 70
    }
}, {
    "id": 17,
    "nombre": "Xiaomi Poco M5",
    "marca":"Huawei-Xiaomi",
    "fLanzamiento": "1/04/2022",
    "precio": 1250000,
    "stock":10,
    "caracteristicas": {
        "Diseño": 62,
        "Pantalla": 40,
        "Cámaras": 60,
        "Batería": 50,
        "Otros": 65
    }
}, {
    "id": 18,
    "nombre": "Vivo Y73t",
    "marca":"Vivo",
    "fLanzamiento": "1/04/2022",
    "precio": 850000,
    "stock":10,
    "caracteristicas": {
        "Diseño": 50,
        "Pantalla": 30,
        "Cámaras": 60,
        "Batería": 52,
        "Otros": 40
    }
}]

export const getProductos = () => {
    return new Promise((res,rej) => {
        setTimeout(()=>{
            res(productos)
        },1500)

    })}

    export const getProduct = (id) => {
        return new Promise((res,rej) => {
            setTimeout(()=>{
                res(productos.find(prod => parseInt(prod.id) === parseInt(id)))
            },1000)
        })}
