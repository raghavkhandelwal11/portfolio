import React from 'react';
import Person from './Person';

const People = () => {
  return (
    <div className='people'>
        <h2>What people say about me</h2>
        <hr className='people-hr'/>
        <div className='people-content'>
        <Person />
        <Person />
        <Person />
        </div>
        <div className='people-footer'>
            <p>view more {"-->"}</p>
        </div>
    </div>
  )
}

export default People;