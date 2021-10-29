import React from "react";
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Button from 'react-bootstrap/Button'
import { useParams } from "react-router";

/* import {link} from "react-router-dom";
 */

function Detalle(){
    const {data, id} = useParams()
    console.log (data)
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Title>{id}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Detalles</Card.Subtitle>
                <Card.Text>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Precio Max (24hs) - {data}</ListGroupItem>
                        <ListGroupItem>Precio Min (24hs) - {data}</ListGroupItem>
                    </ListGroup>
                </Card.Text>
                <Card.Header as="h5">Precio actual - {id}</Card.Header>
                <Button variant="primary">Comprar</Button>
            </Card.Body>
        </Card>
    );
}

export default Detalle;