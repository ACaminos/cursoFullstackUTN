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
        <div className=" text-center mt-4 d-flex justify-content-center">
            <Card style={{ width: '21rem', backgroundColor: 'blacK', borderColor: 'darkgoldenrod', border: '1px solid darkgoldenrod' }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <Card.Title style={{color: 'white'}}>{data}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted style={{color: 'white'}}">Detalles</Card.Subtitle>
                    <Card.Text>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem style={{color: 'white', backgroundColor: 'black'}}>Precio Max (24hs) - {data}</ListGroupItem>
                            <ListGroupItem style={{color: 'white', backgroundColor: 'black'}}>Precio Min (24hs) - {data}</ListGroupItem>
                        </ListGroup>
                    </Card.Text>
                    <Card.Header as="h5" style={{color: 'white'}}>Precio actual - {data}</Card.Header>
                    <Button variant="primary text-center mt-3">Comprar</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Detalle;