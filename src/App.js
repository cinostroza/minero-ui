import './App.css';
import InvoiceTable from "./components/InvoiceTable/InvoiceTable";
import {Container, Row, Col, Card} from "react-bootstrap";
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
      <Card>
          <Container>
            <Row>
              <Col>
                {!invoiceData && <FileUploadPage onFileUpload={fileUploadHandler}/>}
                {invoiceData && <InvoiceTable onCancel={cancelHandler} invoice={invoiceData}/>}
              </Col>
            </Row>
          </Container>
      </Card>
  );
}

export default App;
