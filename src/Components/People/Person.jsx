import React from 'react';
import img from "../../Resources/profile-pic.png";

const Person = () => {
  return (
    <div className='person'>
        <div><img src={img} alt="" /></div>
        <br />
        <h4>full name</h4>
        <h5>designation</h5>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat tenetur voluptatum, cumque ipsam veritatis rem dolores minima et facere</p>
    </div>
  )
}

export default Person;