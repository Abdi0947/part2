import React, { useState } from 'react';

const Filter = ({ handleFilterChange }) => {
  const [newFilter, setNewFilter] = useState('');

  const handleInputChange = (event) => {
    const filterValue = event.target.value.toLowerCase();
    setNewFilter(filterValue);
    handleFilterChange(filterValue); // Pass the filtered value to the parent component
  };

  return (
    <div>
      <div>
        Filter shown with: <input value={newFilter} onChange={handleInputChange} />
      </div>
    </div>
  );
};

export default Filter;
