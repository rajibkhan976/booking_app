import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as propertyActions from "../api_integration/propertyActions";
import Header from './Header';
import AddProperty from './AddProperty';
import PropertyCard from './PropertyCard';
import PropertyDetails from './PropertyDetails';
import Footer from './Footer';
import Pagination from 'react-bootstrap/Pagination';

const Dashboard = ({ propertyActions, properties, propertiesRetrieved }) => {

    const [toggleAddForm, setToggleAddForm] = useState(false);
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");

    const handleChangeSearchField = (event) => {
        if (event.target.id === "country") {
            setCountry(event.target.value);
        }
        if (event.target.id === "city") {
            setCity(event.target.value);
        }
    }

    const showAddForm = (event) => {
        setToggleAddForm(true);
    }

    const hideAddForm = (event) => {
        setToggleAddForm(false);
    }

    useEffect(() => {
        if (!propertiesRetrieved) {
            propertyActions.getProperties();
        }
    }, [propertiesRetrieved]);

    const [propertyList, setPropertyList] = useState([]);
    const [propertyDetails, setPropertyDetails] = useState(null);
    const [showDetails, setShowDetails] = useState(false);

    useEffect(() => {
        if (properties && propertiesRetrieved && !country && !city && properties.length !== 0) {
            let propertyArr = [];
            properties.forEach((element, index) => {
                propertyArr.push(element);
            });
            setPropertyList(propertyArr);
        }
    }, [properties, propertiesRetrieved, country, city]);

    const searchProperty = (event) => {
        if (country && propertyList && propertyList.length !== 0) {
            let searchRes = [];
            propertyList.forEach((element, index) => {
                if (element.country.toLowerCase().search(country.toLowerCase().trim()) !== -1) {
                    searchRes.push(element);
                }
            });
            setPropertyList(searchRes);
            setShowDetails(false);
        }
        if (city && propertyList && propertyList.length !== 0) {
            let searchRes = [];
            propertyList.forEach((element, index) => {
                if (element.city.toLowerCase().search(city.toLowerCase().trim()) !== -1) {
                    searchRes.push(element);
                }
            });
            setPropertyList(searchRes);
            setShowDetails(false);
        }
    }

    const handlePropertyDetails = (propertyInfo) => {
        if (propertyInfo) {
            setPropertyDetails(propertyInfo);
            setShowDetails(true);
        }
    }

    const hideDetails = (event) => {
        setShowDetails(false);
    }

    return (
        <div className="container">
            <Header
                handleChangeSearchField={handleChangeSearchField}
                searchProperty={searchProperty}
            />
            {!toggleAddForm && !showDetails &&
            <>
                <div className="row">
                    <div className="col-12 mt-4">
                        <button 
                            className="btn btn-primary float-right"
                            onClick={(event) => showAddForm(event)}
                        >
                            Add property
                        </button>
                    </div>
                </div>
                <PropertyCard 
                    propertyList={propertyList} 
                    handlePropertyDetails={handlePropertyDetails}
                />
            </>
            }
            {showDetails &&
                <PropertyDetails 
                    propertyDetails={propertyDetails}
                    hideDetails={hideDetails} 
                />
            }
            {toggleAddForm &&
                <AddProperty hideAddForm={hideAddForm} />
            }
            <hr />
            <Footer />
        </div>
    );
}

const mapStateToProps = (state) => ({
    properties: state.propertyReducer.properties,
    propertiesRetrieved: state.propertyReducer.propertiesRetrieved
});
  
const mapDispatchToProps = (dispatch) => ({
    propertyActions: bindActionCreators(propertyActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);