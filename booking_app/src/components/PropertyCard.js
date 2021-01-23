import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as propertyActions from "../api_integration/propertyActions";
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faStar } from '@fortawesome/free-solid-svg-icons';

const PropertyCard = ({ propertyList, handlePropertyDetails }) => {

    const renderRating = (rating) => {
        if (rating) {
            let star = [];
            for (let i = 1; i < rating + 1; i++) {
                if (i === 0) {
                    star.push(
                        <FontAwesomeIcon icon={faStar} color="#018387" />
                    );
                }
                star.push(
                    <FontAwesomeIcon className="ml-1" icon={faStar} color="#018387" />
                );
            }
            return star;
        }
    }

    const imageUrl = `http://localhost:5000/uploads/`;

    return (
        <div className="row">
            {(propertyList && propertyList.length !== 0) ?
            propertyList.map((element, index) => {
                return <div 
                        className="col-12 col-sm-4 mt-4" 
                        key={element.id}
                        onClick={() => handlePropertyDetails(element)}
                    >
                            <div className="card" style={{"width": "18rem"}}>
                                <Carousel>
                                {element.image.split(', ').map((propertyImage, index) => {
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
                                    {renderRating(element.rating)}
                                    <p className="card-text mt-3" style={{"fontSize": ".8rem"}}>{element.description}</p>
                                    <p className="card-text mt-3" style={{"fontSize": ".8rem"}}>{`Comments: ${element.comments}`}</p>
                                    <div className="row">
                                        <div className="col-2">
                                            <img className="mt-2 avatar" src={imageUrl.concat(element.avatar)} alt="avatar" />
                                        </div>
                                        <div className="col-5" style={{"paddingLeft": "3px"}}>
                                            <h6 className="card-title d-inline" style={{"fontSize": "0.8rem", "fontWeight": "bold"}}>{element.title}</h6>
                                            <p style={{"fontSize": ".7rem"}}>{element.country}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            })
            :
            null
            }
        </div>
    );
}

const mapStateToProps = (state) => ({
    properties: state.propertyReducer.properties
});
  
const mapDispatchToProps = (dispatch) => ({
    propertyActions: bindActionCreators(propertyActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PropertyCard);