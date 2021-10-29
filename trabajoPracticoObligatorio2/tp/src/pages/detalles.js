import React ,{useState, useEffect} from "react";
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Button from 'react-bootstrap/Button'
import { useParams } from "react-router";
import { getById } from "../service/productoservice";

/* import {link} from "react-router-dom";
 */

function Detalle(){
    const [detalleCrypto, setDetalleCrypto] = useState({})
    const {data} = useParams()
    console.log (data)
    useEffect(
        ()=>
        getById(data)
        .then(res=>{
            console.log(res)
            if(res.data){
                setDetalleCrypto(res.data)
            }
        })
    )

    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Title>{data}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Detalles</Card.Subtitle>
                <Card.Text>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Precio Max (24hs) - {data}</ListGroupItem>
                        <ListGroupItem>Precio Min (24hs) - {data}</ListGroupItem>
                    </ListGroup>
                </Card.Text>
                <Card.Header as="h5">Precio actual - {data}</Card.Header>
                <Button variant="primary text-center">Comprar</Button>
            </Card.Body>
        </Card>
    );
}

export default Detalle;