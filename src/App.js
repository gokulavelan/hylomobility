
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <Form style={{ padding: 10 }} >
        <Form.Group className="mb-3"  controlId="formGroupEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" required="true"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="number" placeholder="Enter Mobile Number" />
        </Form.Group>
        <Form.Group className="mb-3"  controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Register Number</Form.Label>
          <Form.Control type="number" placeholder="Register Number" />
        </Form.Group>
        <Form.Label>College</Form.Label>
          <Form.Select aria-label="Floating label select example" >
            <option>Select College</option>
            <option value="1">CT</option>
            <option value="2">CE</option>
            <option value="3">IET</option>
          </Form.Select>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Department</Form.Label>
          <Form.Control type="text" placeholder="Enter Department" />
        </Form.Group>
        <div class="text-center">
        <Button variant="secondary">Secondary</Button>{' '}
        </div>
      </Form> 
    </div>
  );
}

export default App;
