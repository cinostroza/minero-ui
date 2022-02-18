import './App.css';
import InvoiceTable from "./components/InvoiceTable/InvoiceTable";
import {Container} from "react-bootstrap";
import {useState} from "react";
import FileUploadPage from "./components/FileUploadPage/FileUploadPage";


function App() {

  const [invoiceData, setInvoiceData] = useState()

  const fileUploadHandler = (data) => {
    localStorage.setItem('data', JSON.stringify(data, null, 2));
    setInvoiceData(data);
  }

  const cancelHandler = () => {
    setInvoiceData()
  }

  return (
      <Container>
        {!invoiceData && <FileUploadPage onFileUpload={fileUploadHandler}/>}
        {invoiceData && <InvoiceTable onCancel={cancelHandler} invoice={invoiceData}/>}
      </Container>
  );
}

export default App;
