import React from 'react';
import AnyChart from 'anychart-react';
import './ReportPage.scss';
import { Container } from 'react-bootstrap';

export default function ReportPage() {
    const data = [
        ['p1', 5, 4],
        ['p2', 6, 2],
        ['p3', 3, 7],
        ['p4', 1, 5]
    ];

    return (
        <Container id="reports">
            <h1>Pagina de Reportes</h1>
            <div>
                <AnyChart
                    type="pie"
                    data={data}
                    title="Gráfico Pastel"
                    width={250}
                    height={250}
                />
            </div>
            <div>
                <AnyChart
                    type="column"
                    data={data}
                    title="Multiples Barras"
                    width={250}
                    height={250}
                />
            </div>
            <div>
                <AnyChart
                    type="line"
                    data={data}
                    title="Multiples Barras"
                    width={250}
                    height={250}
                />
            </div>
        </Container>
    )
}
