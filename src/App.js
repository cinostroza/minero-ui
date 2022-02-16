import logo from './logo.svg';
import './App.css';
import InvoiceTable from "./components/InvoiceTable/InvoiceTable";

const INVOICE_DATA = {
  "data": {
    "invoiceById": {
      "id": "1",
      "supplier": {
        "name": "Carlos",
        "rut": "15.188.350-8"
      },
      "date": "2022-02-14",
      "number": "123456",
      "item": [
        {
          "product": {
            "name": "Escoba"
          },
          "quantity": 10,
          "units": "each",
          "cost": 123,
          "discount": 0
        },
        {
          "product": {
            "name": "Escobillon municipal"
          },
          "quantity": 20,
          "units": "each",
          "cost": 1550,
          "discount": 0
        }
      ]
    }
  }
}

function App() {
  return (
    <div className="App">
      <InvoiceTable invoice={INVOICE_DATA}/>
    </div>
  );
}

export default App;
