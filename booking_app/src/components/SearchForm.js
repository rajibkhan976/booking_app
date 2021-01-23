import React, { useState, useEffect } from 'react';

const SearchForm = ({ handleChangeSearchField, searchProperty }) => {

    return (
        <div className="col-12">
            <div className="row">
                <div className="col-6 col-sm-5">
                    <input 
                        type="text" 
                        className="form-control" 
                        id="country" 
                        placeholder="country"
                        onChange={(event) => handleChangeSearchField(event)}
                    />
                </div>
                <div className="col-6 col-sm-5">
                    <input 
                        type="text" 
                        className="form-control" 
                        id="city" 
                        placeholder="city" 
                        onChange={(event) => handleChangeSearchField(event)}
                    />
                </div>
                <div className="col-6 col-sm-2">
                    <button 
                        className="btn btn-primary"
                        onClick={(event) => searchProperty(event)}
                    >
                    Search
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SearchForm;