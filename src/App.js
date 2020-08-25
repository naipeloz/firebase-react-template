import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>ADDING FIREBASE CONFIG</h1>
      <p>REACT_APP_APIKEY: {process.env.REACT_APP_APIKEY}</p>
      <p>REACT_APP_AUTHDOMAIN: {process.env.REACT_APP_AUTHDOMAIN}</p>
      <p>REACT_APP_DATABASEURL: {process.env.REACT_APP_DATABASEURL}</p>
      <p>REACT_APP_PROJECTID: {process.env.REACT_APP_PROJECTID}</p>
      <p>REACT_APP_STORAGEBUCKET: {process.env.REACT_APP_STORAGEBUCKET}</p>
      <p>REACT_APP_MESSAGINGSENDERID: {process.env.REACT_APP_MESSAGINGSENDERID}</p>
      <p>REACT_APP_APPID: {process.env.REACT_APP_APPID}</p>
      <p>REACT_APP_MEASUREMENTID: {process.env.REACT_APP_MEASUREMENTID}</p>
    </div>
  );
}

export default App;
