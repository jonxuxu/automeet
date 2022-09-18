import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
const axios = require('axios').default;

const triggerRecord = () => {
  // Make a request for a user with a given ID
  axios.get('http://127.0.0.1:5000/startListening')
  .then(function (response) {
    // handle success
    console.log("Success!");
  })
  .catch(function (error) {
    // handle error
    console.log("Error; restart application and try again");
  })
}

const Hello = () => {
  return (
    <div>
      {/* <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div> */}
      <div className="Hello">
        <h1>automeet</h1>
      </div>
      
      <div onClick={() => triggerRecord()} className="Hello">
        <button type="button">START RECORDING</button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
