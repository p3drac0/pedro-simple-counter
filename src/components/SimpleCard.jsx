

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SimpleCard() {
  return (
    <Card className="bg-light my-3 border-0 rounded-0" style={{ width: '100%' ,height:'10rem' }}>
      <Card.Body>
        <Card.Title className="fs-1">Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}


export default SimpleCard;