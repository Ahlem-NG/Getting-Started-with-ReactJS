import React from "react";
import { NavLink} from "react-router-dom";

const Pays = (props) => {
    let content ="";

    if(!props.solo){ //tous les pays
        content = (
            <NavLink to={"/pays/"+props.nom} className="nav-link">Voir la fiche du pays</NavLink>
        )
    }else{
        content = (
            <div>Population : {props.population}</div>
        )
    }
    return(
            <>
                <div className="row no-gutters border m-2">
                    <div className="col-4">
                        <img src={props.drapeau} width="100%" className="p-2" alt={props.nom} />
                    </div>
                    <div className='col'>
                        <h2>Nom : {props.nomFrancais}</h2>
                        <div>Capitale : {props.capitale}</div>
                        <div>Region : {props.region}</div>
                        {/* <NavLink to={props.match.url+"/"+props.nom} className="nav-link">Voir la fiche du pays</NavLink> */}
                        {content}
                    </div>
                </div>
            </>
        );
}

export default Pays;