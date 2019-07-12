import React from "react";
import "./style.css";

function SmurfCard(props) {
    return (
        <div onClick={() => props.clickCard(props.id)} className="card bg-dark border-dark m-2">
            <div className="img-container">
                <img alt={props.name} src={props.image} className="card-img-top" />
            </div>
            <div className="card-body border-dark">
                <ul className="card-text list-group list-group-flush">
                    <li className="list-group-item">
                        <strong>Name:</strong> {props.name}
                    </li>
                    <li className="list-group-item">
                        <strong>Occupation:</strong> {props.occupation}
                    </li>
                    <li className="list-group-item">
                        <strong>Location:</strong> {props.location}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SmurfCard;