import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import HomeScreen from './screens/HomeScreen';
import Hospitals from './screens/Hospitals';
import HospitalDetailsScreen from './screens/HospitalDetailScreen';
import './App.css';

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Router>
      <div className="App">
        <NavigationBar isOpen={isNavOpen} toggleNav={toggleNav} />

        <div className="content-container">
          <Route exact path="/" component={HomeScreen} />
          <Route path="/hospitals" component={Hospitals} />
          <Route path="/hospital/:id" component={HospitalDetailsScreen} />
          {/* Add more routes for other screens here */}
        </div>
      </div>
    </Router>
  );
};

export default App;