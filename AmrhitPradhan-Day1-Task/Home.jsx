import React from 'react';

const Home =( {logout})=>{
  const getoutbtn=()=>{
    logout();
  }
  return (
    <>
    <div className="homesection">

    
    <h3>MISSION PASSED!!!!!</h3>
    <h3>Welcome To Home Section</h3>
   <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel fuga consequatur voluptatum ratione. Cumque libero voluptas esse, at animi repellendus, quibusdam facere veniam dolor tempore, fugiat perferendis eius voluptatem repellat.
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel fuga consequatur voluptatum ratione. Cumque libero voluptas esse, at animi repellendus, quibusdam facere veniam dolor tempore, fugiat perferendis eius voluptatem repellat.
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel fuga consequatur voluptatum ratione. Cumque libero voluptas esse, at animi repellendus, quibusdam facere veniam dolor tempore, fugiat perferendis eius voluptatem repellat.</p>

    <button onClick={()=>getoutbtn()} id="btn">GET-OUT</button>
    </div>
    </>
  );
};

export default Home;