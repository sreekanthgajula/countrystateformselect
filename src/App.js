import React, { useState } from 'react';

const App = () => {
  const [countries] = useState([
    {
      country: "Australia",
      states: ["New South Wales", "Victoria", "Queensland", "Western Australia", "South Australia", "Tasmania", "Northern Territory", "Australian Capital Territory"]
    },
    {
      country: "United States",
      states: ["California", "Texas", "Florida", "New York", "Illinois", "Pennsylvania", "Ohio", "Georgia"]
    },
    {
      country: "India",
      states: ["Maharashtra", "Karnataka", "Tamil Nadu", "Uttar Pradesh", "Rajasthan", "Gujarat", "West Bengal", "Kerala"]
    }
  ]);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [states, setStates] = useState([]);

  const handleCountryChange = (event) => {
    const countryName = event.target.value;
    setSelectedCountry(countryName);

    // Find the states corresponding to the selected country
    const country = countries.find((c) => c.country === countryName);
    setStates(country ? country.states : []);
  };

  return (
    <div>
      <h1>Select Country and State</h1>
      <div>
        <label htmlFor="country" >Country:</label>
        <select
          id="country"
          value={selectedCountry}
          onChange={handleCountryChange}
        >
          <option value="">--Select a country--</option>
          {countries.map((country, index) => (
            <option key={index} value={country.country}>
              {country.country}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="state">State:</label>
        <select id="state" disabled={!states.length}>
          <option value="">--Select a state--</option>
          {states.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default App;
