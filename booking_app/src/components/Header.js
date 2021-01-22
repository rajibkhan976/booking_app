import React from 'react';
import SearchForm from './SearchForm';

const Header = ({}) => {

    return (
        <div className="row">
            <div className="col-12">
                <h1>Header</h1>
                <SearchForm />
            </div>
        </div>
    );
}

export default Header;