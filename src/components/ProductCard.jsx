import React from 'react';

const ProductCard = ({img, name, description}) => {
    return (
        <div className="card m-3" style={{width: 20 + 'rem'}}>
            <img className="card-img-top" src={img} alt="Card image cap"></img>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <a className="btn btn-primary" data-toggle="collapse" href={"#collapse"+name} role="button" aria-expanded="false" aria-controls={"collapse"+name}>
                    Read More
                </a>
                <div className="collapse" id={"collapse"+name}>
                    <div className="card card-body">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;