import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Titreh1 from '../../components/Titres/TitreH1';
import Pays from '../PaysManager/Pays/Pays';

class UnPays extends Component{
    state = {
        data : null,
        loading: false
    }


    componentDidMount = () =>{
        this.setState({loading:true})
        axios.get(`https://restcountries.com/v3.1/name/${this.props.nomPays}?fullText=true`)
        .then(reponse => {
            console.log(reponse.data);
            this.setState({
                loading:false,
                data:reponse.data[0]
            })
        })
        .catch( error => {
            console.log(error);
            this.setState({loading:false})
        })
    }
    render(){
        return (

             <div className='container'>
                <Titreh1>Page du pays : {this.props.nomPays}</Titreh1>
                {
                    this.state.data && 

                    <Pays
                    nom = {this.state.data.name.common}
                    drapeau = {this.state.data.flags.svg}
                    nomFrancais = {this.state.data.translations.fra.common}
                    capitale = {this.state.data.capital}
                    region = {this.state.data.region} 
                    {...this.props}
                    solo={true}
                    population = {this.state.data.population} 
                    />
                }
             </div>
        );
    }
}

export default UnPays;