import React, { useEffect, useState } from 'react';
import { Doughnut, Line, Bar, PolarArea } from 'react-chartjs-2';
import './ReportPage.scss';
import { Container } from 'react-bootstrap';
import { chart1, chart2, chart3, chart4, startFuntion} from '../../utils/settingsCharts.js';
import reportsServices from "../../services/Reports";

export default function ReportPage() {
    const [l1, setL1] = useState([]);
    const [d1, setD1] = useState([]);
    const [l2, setL2] = useState([]);
    const [d2, setD2] = useState([]);
    const [l3, setL3] = useState([]);
    const [d3, setD3] = useState([]);
    const [l4, setL4] = useState([]);
    const [d4, setD4] = useState([]);
    const [soles, setSoles] = useState(0);
    const [dolar, setDolar] = useState(0);
    const [salary, setSalary] = useState(0);
    const [load, setLoad] = useState(false);
    const [finish, setFinish] = useState(false);

    useEffect(() => {
        const resp1 = iniciarDatos1();
        const resp2 = iniciarDatos2();
        const resp3 = iniciarDatos3();
        const resp4 = iniciarDatos4();
        const resp5 = iniciarDatos5();
        const resp6 = iniciarDatos6();

        if (resp1 && resp2 && resp3 && resp4 && resp5 && resp6) {
            setFinish(true);
        }
    }, [])

    useEffect(() => {
        if (finish){
            setLoad(true);
        }
    }, [finish])

    const iniciarDatos1 = async () => {
        const res1 = await reportsServices.mPSales();
        let labels = []
        let data = []

        res1.map(r => {
            labels.push(r.nombre);
            data.push(r.cantidad);
        })

        setL1(labels)
        setD1(data)

        if (d1.length > 0){
            console.log("Hola");
            console.log(d1);
            console.log(d1.length);
            return true;
        } else {
            return false;
        }
    }

    const iniciarDatos2 =async () => {
        const res2 = await reportsServices.mMSales();
        let labels = []
        let data = []

        res2.map(r => {
            labels.push(r.nombre);
            data.push(r.cantidad);
        })
        setL2(labels)
        setD2(data)

        if (d2.length > 0){
            return true;
        } else {
            return false;
        }
    }

    const iniciarDatos3 = async () => {
        const res3 = await reportsServices.lastSales();
        let labels = []
        let data = []

        res3.map(r => {
            labels.push(r.id);
            data.push(r.total);
        })
        setL3(labels)
        setD3(data)

        if (d3.length > 0){
            return true;
        } else {
            return false;
        }
    }

    const iniciarDatos4 = async () => {
        const res4 = await reportsServices.highSales();
        let labels = []
        let data = []

        res4.map(r => {
            labels.push(r.nombre);
            data.push(r.sueldo);
        })
        setL4(labels)
        setD4(data)

        if (d4.length > 0){
            return true;
        } else {
            return false;
        }
    }

    const iniciarDatos5 = async () => {
        const res5 = await reportsServices.salesMoney();

        console.log(res5);
        setSoles(parseFloat(res5.soles))
        setDolar(parseFloat(res5.dolares))

        if (soles > 0 && dolares > 0){
            return true;
        } else {
            return false;
        }
    }

    const iniciarDatos6 = async () => {
        const res6 = await reportsServices.totalSales();

        console.log(res6);
        setSalary(parseFloat(res6.salary));

        if (salary > 0){
            return true;
        } else {
            return false;
        }
    }

    if (load) {
        return (
            <Container id="reports">
                <h1>Reportes de la empresa</h1>

                <div id="reportProducts">
                    <h2>Productos</h2>

                    <div>
                        <div id="rPGP-masComprados">
                            <h2>Productos más Comprados</h2>

                            <div>
                                <PolarArea data={chart1(l1, d1).data} options={chart1(l1, d1).opciones}/>
                            </div>
                        </div>

                        <div id="rP-centerInfo">
                            <div id="rP-cI-superior">
                                <h2>Ingresos del mes del producto</h2>
                                <p>S/. {soles}</p>
                                <p>Soles</p>
                            </div>

                            <div id="rP-cI-inferior">
                                <h2>Ingresos del mes del producto</h2>
                                <p>$ {dolar}</p>
                                <p>Dólares</p>
                            </div>
                        </div>

                        <div id="rPGB-masCompradosMarks">
                            <h2>Marcas más Compradas</h2>

                            <div>
                                <Doughnut data={chart2(l2, d2).data} options={chart2(l2, d2).opciones}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="reportIncomeExponese">
                    <h2>Ingresos y Egresos</h2>

                    <div>
                        <div id="rIEGL-latestSales">
                            <h2>Ingresos de los últimas Ventas</h2>

                            <div>
                                <Line data={chart3(l3, d3).data} options={chart3(l3, d3).opciones} />
                            </div>
                        </div>

                        <div id="rIE-centerInfo">
                            <div id="rIEGP-cI-sueldosAltos">
                                <h2>Sueldos más Altos</h2>

                                <div>
                                    <Bar data={chart4(l4, d4).data} options={chart4(l4, d4).opciones} />
                                </div>
                            </div>

                            <div id="rIE-cI-totalSueldos">
                                <h2>Gastos en Sueldos</h2>
                                <p>$ {salary}</p>
                                <p>Dólares</p>
                            </div>
                        </div>

                        <div id="rIE-leftInfo">
                            <div id="rIE-ingresos">
                                <h2>Ingresos del mes</h2>
                                <p>S/. {soles}</p>
                                <p>Soles</p>
                            </div>

                            <div id="rIE-egresos">
                                <h2>Egresos del mes</h2>
                                <p>S/. {salary}</p>
                                <p>Soles</p>
                            </div>

                            <div id="rIE-ganancias">
                                <h2>Ganancias del mes</h2>
                                <p>S/. {soles - salary}</p>
                                <p>Soles</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        )
    } else {
        return ("")
    }
}
