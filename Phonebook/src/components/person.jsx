import React from 'react';

const Person = ({ persons, newFilter }) => {
  const personsToShow = newFilter
    ? persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
    : persons;

  return (
    <div>
      {personsToShow.map((person, index) => 
        <p key={index}>{person.name}: {person.number}</p>
      )}
    </div>
  );
};

export default Person;
