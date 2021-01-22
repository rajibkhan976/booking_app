import React from 'react';
import SearchForm from './SearchForm';

const Header = ({}) => {

    return (
        <div className="row header-container">
            <div className="col-12">
                <div className="d-block header-text float-left">
                    <h2>Resorts</h2>
                    <p>Treat yourself! Your dream resort stay is just a few clicks away.</p>
                </div>
            </div>
            <SearchForm />
        </div>
    );
}

export default Header;