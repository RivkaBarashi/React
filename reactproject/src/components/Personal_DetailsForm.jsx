import React, { useState } from 'react';

const Personal_DetailsForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log('typing…', e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // מונע את רענון הדף
    alert('הטופס נשלח בהצלחה');
    console.log('Submitted value:', inputValue);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          הכנס פרטים אישיים:
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
        <button type="submit">שלח</button>
      </form>
    </>
  );
};

export default Personal_DetailsForm;