import React, { useState } from 'react';


function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100; // convert height to meters
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      setMessage(getBMIMessage(bmiValue));
    } else {
      alert("Please enter valid weight and height.");
    }
  };

  const getBMIMessage = (bmi) => {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      return 'Overweight';
    } else {
      return 'Obesity';
    }
  };

  return (
    <div className="App">
      <h1>BMI Calculator</h1>
      <div className="input-container">
        <label>
          Weight (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
        <label>
          Height (cm):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
        <button onClick={calculateBMI}>Calculate BMI</button>
      </div>
      {bmi && (
        <div className="result">
          <h2>Your BMI: {bmi}</h2>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default App;
