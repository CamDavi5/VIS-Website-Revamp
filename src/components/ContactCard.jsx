import React from 'react';

const ContactCard = ({img, name, email, cell}) => {
    return (
        <div className="card mt-3" style={{width: 18 + 'rem'}}>
            <img className="card-img-top" src={img} alt="Card image cap"></img>
            <div className="card-body">
                <h5 className="card-title center">{name}</h5>                
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Email: {email}</li>
                <li className="list-group-item">Cell: {cell}</li>
            </ul>
        </div>
    )
}

export default ContactCard;