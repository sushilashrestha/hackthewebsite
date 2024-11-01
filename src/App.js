import React, { useState, useEffect } from 'react';
// ...existing code...
// import data from './data.json';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/scifisatan/c7c23e0d092552f4732b6f15770d8937/raw/6552899907269c2e8592a59c6c27b23301da8500/hackathon.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  // ...existing code...

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* ...existing code... */}
      {/* Use 'data' to render the website content */}
    </div>
  );
}

export default App;
