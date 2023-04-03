import React from 'react'
import Card from 'react-bootstrap/Card';
import Horaires from './Horaires/Horaires';

const etablissement = (props) => {
return <>
            <Card>
            <Card.Header>{props.nom}</Card.Header>
            <Card.Body>
                <Card.Title>
                    Telephone : {props.telephone} <br />
                    {props.mail && `Mail : ${props.mail}`}
                </Card.Title>
                <Card.Text>
                    <strong>Adresse : </strong> 
                    {props.adresses[0].lignes[0]}
                    {props.adresses[0].codePostal} - {props.adresses[0].commune}
                    <br />
                    <strong>Horaires : </strong> <br />
                    {props.horaires && <Horaires horaires={props.horaires} />} <br />
                    {props.url && <a href={props.url} className='btn btn-info' target='_blank'>Visiter le site web</a>}
                </Card.Text>
            </Card.Body>
            </Card>
         </>
};

export default etablissement;