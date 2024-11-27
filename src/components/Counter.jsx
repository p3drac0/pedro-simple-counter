import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const Counter = () => {
    const [seconds, SetSeconds] = useState(0)

    return (<>



        <Card
            body
            style={{
                fontSize: "3rem",
                textAlign: "center",
            }}
        >
            Contador épico.
            <Card.Title style={{ fontSize: "3rem" }}>{seconds}</Card.Title>
            <div className="d-flex justify-content-center mt-3">
                <Button className="mx-2" onClick={() => SetSeconds(seconds - 1)}>
                    -1
                </Button>
                <Button onClick={() => SetSeconds(seconds + 1)}>+1</Button>
            </div>
        </Card>

    </>)
}

export default Counter;


