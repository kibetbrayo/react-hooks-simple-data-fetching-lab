import React, { useState, useEffect } from 'react';

function App() {
  // State to store the dog image URL
  const [dogImage, setDogImage] = useState(null);

  // State to track if the data is still loading
  const [loading, setLoading] = useState(true);

  // useEffect hook to fetch data from the API
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        // Set the dog image URL and mark loading as false
        setDogImage(data.message);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []); // Empty dependency array to ensure the effect runs only once on initial render

  return (
    <div>
      {/* Display "Loading..." when data is being fetched */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        /* Display the dog image when data has been fetched */
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
