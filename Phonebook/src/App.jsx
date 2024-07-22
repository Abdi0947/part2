import React, { useState } from "react";
import Filter from "./components/filter";
import PersonForm from "./components/personForm";
import Persons from "./components/person";

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newFilter, setNewFilter] = useState('');

  const handleFilterChange = (filterValue) => {
    setNewFilter(filterValue);
  };

  const addPerson = (newPerson) => {
    setPersons([...persons, newPerson]);
  };

  return (
    <div>
      <h2>Phonebook</h2>

      {/* Filter component */}
      <Filter handleFilterChange={handleFilterChange} />

      <h3>Add a new</h3>

      {/* PersonForm component */}
      <PersonForm addPerson={addPerson} />

      <h3>Numbers</h3>

      {/* Persons component */}
      <Persons persons={persons} newFilter={newFilter} />
    </div>
  );
};

export default App;
