import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function Event(props){
    return (
      <Row>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={`../../public/images/${props.event.img}`} />
          <Card.Body>
            <Card.Title>{props.event.name}</Card.Title>
            <Card.Title>{props.event.description}</Card.Title>

            <Button variant="primary">Event</Button>
          </Card.Body>
        </Card>
      </Row>
        
      );
}