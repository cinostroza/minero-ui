import {useState} from "react";
import {Table} from "react-bootstrap";

const InvoiceTable = props => {
    return (
        <Table>
            <th>
                <td>Nombre</td> <td>Cantidad</td><td>Unidad</td><td>Costo Unitario</td><td>% Descuento</td><td>Costo total</td>
            </th>
        </Table>
)
}

export default InvoiceTable
