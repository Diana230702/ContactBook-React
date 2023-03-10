import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function ContactCard({ item, handleDelete, handleEdit }) {
  return (
    <Card style={{ width: "18rem" }} className="m-5 ">
      <Card.Body>
        <Card.Title>Name:{item.name}</Card.Title>
        <Card.Text></Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Surname:{item.surname}</ListGroup.Item>
        <ListGroup.Item>Email:{item.email}</ListGroup.Item>
        <ListGroup.Item>Number:{item.number}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button
          className="m-3"
          onClick={() => handleDelete(item.id)}
          variant="primary"
        >
          Delete
        </Button>
        <Button
          className="m-3"
          onClick={() => handleEdit(item.id)}
          variant="dark"
        >
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ContactCard;
