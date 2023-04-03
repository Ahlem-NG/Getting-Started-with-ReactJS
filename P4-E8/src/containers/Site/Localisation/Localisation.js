import React, { Component } from 'react';
import axios from "axios";
import Titre from "../../../components/UI/Titres/TitreH1";
import Button from "react-bootstrap/Button";
import Etablissement from './Etablissement/Etablissement';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Localisation extends Component {
    state = {
        recherche : null
    }

    rechercheEtablissement = (type) => {
        axios.get(`https://etablissements-publics.api.gouv.fr/v3/departements/14/${type}`)
            .then(response => {
                this.setState({recherche:response.data.features})
            })
    }

    render() {
        return (
            <>
                <Titre>Rechercher un établissement</Titre>
                <Button variant="secondary" onClick={() => this.rechercheEtablissement('mairie')}>Mairie</Button>
                <Button variant="secondary" onClick={() => this.rechercheEtablissement('commissariat_police')}>Commisariat de police</Button>
                <Button variant="secondary" onClick={() => this.rechercheEtablissement('pole_emploi')}>Pôle emploi</Button>
                <Button variant="secondary" onClick={() => this.rechercheEtablissement('prefecture')}>Préfecture</Button>
                <Row>
                    {this.state.recherche && this.state.recherche.map(etablissement => {
                        return(
                            <Col md={6} key={etablissement.properties.id}>
                                <Etablissement 
                                    nom={etablissement.properties.nom}
                                    adresses={etablissement.properties.adresses}
                                    horaires={etablissement.properties.horaires}
                                    id={etablissement.properties.id}
                                    mail={etablissement.properties.email}
                                    telephone={etablissement.properties.telephone}
                                    url={etablissement.properties.url}
                                />
                            </Col>
                        )
                    })}
                </Row>
            </>
        );
    }
}

export default Localisation;