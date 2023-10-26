import React from 'react';
import './App.css'
// import EventList from './component/EventList';
//import EventDetails from './component/EventDetails';
//  import NavMenu from './component/NavMenu';
import HomePage from './component/home';
import Experience from './component/Experience';
import Information from './component/Information';
import EventExperience from './component/EventExperience';
import CoronaMelange from './component/CoronaMelange';
import ClubCard from './component/ClubCard';

function App() {
    return (
        <div>
            <HomePage /><hr />
            <Experience /><hr />
            <Information /><hr />
            <EventExperience /><hr />
            <CoronaMelange /><hr />
            <ClubCard /><hr />
        </div>
    )
}

export default App;
