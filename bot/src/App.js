import './App.css';
import React from 'react';
import SimpleForm from './SimpleForm';



const App = () => {
  return (
    <div style={
      {
        backgroundImage: `url('https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        height: "100vh",
              }}
    >
      <SimpleForm />
    </div>
  );
};

export default App;