import React from "react";
import './Card.styles.css'

export const Card = ({info,source}) => (
    <div className="card">
        <img alt={`"${info.name}"`} src={source || `https://robohash.org/${info.id}?set=set2&size=150x150`} />
        <h4>{info.name}</h4>
        <h5>{info.username}</h5>
    </div>
)