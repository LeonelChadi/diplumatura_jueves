import React from "react";
import './../../styles/novedades.css';

const NovedadItem = (props) => {
    const { title, subtitle, imagen, body} = props;
    
    return (
        <div className="novedades">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <img src={imagen} alt=''></img>
            <div dangerouslySetInnerHTML={{ __html: body }} />
            <hr />
        </div>
    );
}

export default NovedadItem;