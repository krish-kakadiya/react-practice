import React from 'react';

function Cars(props) {
    return <li>{props.name}</li>;
}

const List = () => { 
  const cars = ['bmw', 'audi', 'swift'];

  return (
    <>
        <h1>Car List</h1>
        <ul>
            {cars.map((car, index) => (
              <Cars key={index} name={car} />
            ))}
        </ul>
    </>
  );
}

export default List;
