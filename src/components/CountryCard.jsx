import React from "react";



export function CountryCard({img, name, abbr}){
    
    return (
        <div style={{
            border : "1px solid black",
            borderRadius : "8px",
            padding : "20px",
            height : "200px",
            width : "200px",
            display : "flex",
            alignItems : "center",
            flexDirection : "column",
            margin : "10px",
            textAlign : "center"
        }} className="countryCard">
            <img src={img} alt={abbr} style={{height:"120px", width:"120px"}} />
            <h2>{name}</h2>
        </div>
    )
}

const CountryComp = ({img, name, abbr}) => {
    return (
        <div>
            <CountryCard img={img} name={name} abbr={abbr}/>
        </div>
    )
}

export default CountryComp;