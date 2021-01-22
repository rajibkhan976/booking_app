import React, { useState, useEffect } from 'react';

const AddProperty = ({ hideAddForm }) => {

    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");

    const handleChangeFormField = (event) => {
        if (event.target.id === "country") {
            setCountry(event.target.value);
        }
        if (event.target.id === "city") {
            setCity(event.target.value);
        }
    }

    const addProperty = (event) => {
        console.log("clicked");
    }

    return (
        <div className="row">
            <div className="col-12">
            <div className="row">
                    <div className="col-12 col-sm-6 mt-5">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="country" 
                            placeholder="country"
                            onChange={(event) => handleChangeFormField(event)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-6 mt-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="city" 
                            placeholder="city" 
                            onChange={(event) => handleChangeFormField(event)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mt-3">
                        <button className="btn btn-primary" onClick={(event) => addProperty(event)}>Save</button>
                        <button className="btn btn-warning ml-3" onClick={(event) => hideAddForm(event)}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProperty;