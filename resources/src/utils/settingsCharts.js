const chart1 = (labels, data) => {
    return {
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: ['rgb(237, 109, 127)', 'rgb(244, 241, 193)', 'rgb(131, 213, 208)', 'rgb(236, 242, 228)', 'rgb(254, 247, 144)']
            }]
        },
        opciones: {
            responsive: true
        }
    }
};

const chart2 = (labels, data) => {
    return {
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: ['rgb(255, 154, 162)', 'rgb(255, 218, 193)', 'rgb(226, 240, 203)', 'rgb(181, 234, 215)', 'rgb(199, 206, 234)'],
                hoverOffset: 7
            }]
        },
        opciones: {
            responsive: true
        }
    }
};

const chart3 = (labels, data) => {
    return {
        data: {
            labels: labels,
            datasets: [{
                label: 'Últimas Ventas',
                data: data,
                fill: false,
                borderColor: 'rgb(63, 144, 71)',
                tension: 0.1
            }]
        },
        opciones: {
            responsive: true
        }
    }
};

const chart4 = (labels, data) => {
    return {
        data: {
            labels: labels,
            datasets: [{
                label: 'Sueldos más Altos',
                data: data,
                backgroundColor: ['rgba(244, 210, 172, 0.2)', 'rgba(243, 184, 180, 0.2)', 'rgba(207, 204, 215, 0.2)', 'rgba(126, 200, 203, 0.2)', 'rgba(202, 233, 225, 0.2)'],
                borderColor: ['rgb(244, 210, 172)', 'rgb(243, 184, 180)', 'rgb(207, 204, 215)', 'rgb(126, 200, 203)', 'rgb(202, 233, 225)'],
                borderWidth: 1
            }]
        },
        opciones: {
            responsive: true
        }
    }
};

export {chart1, chart2, chart3, chart4};