import {Button, Container, Row, Table} from "react-bootstrap";


const InvoiceTable = props => {
    return (
        <Container>
            <Row>
                <div>
            <p>Factura: {props.invoice.uploadFile.invoice.number}</p>
            <p>Proveedor: {props.invoice.uploadFile.invoice.supplier.name}</p>
            <p>Rut: {props.invoice.uploadFile.invoice.supplier.rut}</p>
            <p>Fecha: {props.invoice.uploadFile.invoice.date}</p>
        </div>
            </Row>
            <Row>
                <Table bordered={true} striped={true} hover={true}>
                    <thead>
                    <tr>
                        <th>Nombre</th><th>Cantidad</th><th>Unidad</th><th>Costo Unitario</th><th>% Descuento</th><th>Costo total</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.invoice.uploadFile.invoice.crudeItem.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td><td>{item.quantity}</td><td>{item.units}</td>
                            <td>{item.cost}</td><td>{item.discount}</td><td>{item.quantity * item.cost}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                <Button onClick={props.onCancel}>Cancel</Button>
            </Row>
        </Container>
    );
};

export default InvoiceTable
