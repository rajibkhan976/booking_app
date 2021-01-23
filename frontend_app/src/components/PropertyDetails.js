import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const PropertyDetails = ({ propertyDetails, hideDetails }) => {

    const imageUrl = `http://localhost:5000/uploads/`;

    return (
        <div className="row">
            <div className="col-12 mt-4">
                <button className="btn btn-primary float-right" onClick={(event) => hideDetails(event)}>Show list</button>
            </div>
            {propertyDetails &&
            <div className="col-12 mt-4" key={propertyDetails.id}>
                <div className="card" style={{"width": "100%"}}>
                    <Carousel>
                    {propertyDetails.image.split(', ').map((propertyImage, index) => {
                        return <Carousel.Item key={index}>
                                    <img
                                        className="d-block w-100"
                                        src={imageUrl.concat(propertyImage)}
                                        alt="property-images"
                                        height="250"
                                    />
                                </Carousel.Item>
                    })}
                    </Carousel>
                    <div className="card-body">
                        <p className="card-text" style={{"fontSize": "0.8rem"}}>{propertyDetails.description}</p>
                        <p className="card-text" style={{"fontSize": "0.7rem"}}>{`Country: ${propertyDetails.country}`}</p>
                        <p className="card-text" style={{"fontSize": "0.7rem"}}>{`City: ${propertyDetails.city}`}</p>
                    </div>
                </div>
            </div>
            }
        </div>
    );
}

export default PropertyDetails;