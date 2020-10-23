import React from 'react';

const Home =( {logout})=>{
  const getoutbtn=()=>{
    logout();
  }
  return (
    <>
    <h3>MISSION PASSED!!!!!</h3>
    <button onClick={()=>getoutbtn()} id="btn">GET-OUT</button>
    </>
  );
};

export default Home;