import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const MyCard = ({cardText}) => {
    return (<Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://placehold.co/600x400" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            {cardText}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>)
}

export default MyCard