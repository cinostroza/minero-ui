import {Button, Container, Row, Table} from "react-bootstrap";


const InvoiceTable = props => {

    const CreateTable = () => {

    }

    const tableData = CreateTable()

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
                        <th></th><th>Nombre</th><th>Cantidad</th><th>Costo</th><th>Precio de Venta</th><th>Add</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.invoice.uploadFile.invoice.crudeItem.map(item => {
                        if (item.relatedItem)
                            return (<tr key={item.id}>
                                <td>{item.name}</td><td>{item.quantity}</td><td>{item.units}</td>
                                <td>{(item.cost).toLocaleString('en-US', {
                                    style: 'currency',
                                    currency: 'USD',
                                })}</td><td>{item.discount}</td><td>{(item.quantity * item.cost).toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'USD',
                            })}</td>
                                <td/><td>{item.relatedItem.name}</td><td>{item.relatedItem.quantity}</td><td>{item.relatedItem.cost}</td>
                                <td>{item.relatedItem.price}</td><td></td>
                            </tr>)
                        return (<tr key={item.id}>
                                <td>{item.name}</td><td>{item.quantity}</td><td>{item.units}</td>
                                <td>{(item.cost).toLocaleString('en-US', {
                                    style: 'currency',
                                    currency: 'USD',
                                })}</td><td>{item.discount}</td><td>{(item.quantity * item.cost).toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'USD',
                            })}</td>
                                <td/><td></td><td></td><td></td><td></td><td></td>
                            </tr>
                        )})}
                    </tbody>
                </Table>
                <Button onClick={props.onCancel}>Cancel</Button>
            </Row>
        </Container>
    );
};

export default InvoiceTable
