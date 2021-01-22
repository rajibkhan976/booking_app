import React from 'react';
import Header from './Header';
import PropertyCard from './PropertyCard';
import Footer from './Footer';

const Dashboard = ({}) => {

    return (
        <div className="container">
            <Header />
            <PropertyCard />
            <Footer />
        </div>
    );
}

export default Dashboard;