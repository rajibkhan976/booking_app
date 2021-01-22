import React, { useState } from 'react';
import Header from './Header';
import AddProperty from './AddProperty';
import PropertyCard from './PropertyCard';
import Footer from './Footer';

const Dashboard = ({}) => {

    const [toggleAddForm, setToggleAddForm] = useState(false);

    const showAddForm = (event) => {
        setToggleAddForm(true);
    }

    const hideAddForm = (event) => {
        setToggleAddForm(false);
    }

    return (
        <div className="container">
            <Header />
            {!toggleAddForm &&
            <>
                <div className="row">
                    <div className="col-12 mt-5">
                        <button 
                            className="btn btn-primary float-right"
                            onClick={(event) => showAddForm(event)}
                        >
                            Add property
                        </button>
                    </div>
                </div>
                <PropertyCard />
            </>
            }
            {toggleAddForm &&
                <AddProperty hideAddForm={hideAddForm} />
            }
            <Footer />
        </div>
    );
}

export default Dashboard;