import React from 'react';
import SideBar from "../Components/SideBar";
import ElectronicsList from "../Components/ElectronicsList";

const Home = () => {
    return (
        <div className='d-flex flex-column flex-md-row container px-0'>
            <div className='d-sm-none container mt-5'>
                <input type='search' className='form-control search-input' placeholder='Search'
                       aria-label='Search technologies with search' aria-describedby='button-addon'/>
            </div>
            <SideBar />
            <ElectronicsList />
        </div>
    );
}

export default Home;