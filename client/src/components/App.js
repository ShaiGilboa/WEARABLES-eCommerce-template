import React, { useState, useEffect } from 'react';

function App() {
  const [bacon, setBacon] = useState(null);

  useEffect(() => {
    fetch('/bacon')
      .then(res => res.json())
      .then(data => setBacon(data));
  }, []);

<<<<<<< Updated upstream
  return <div>{bacon ? bacon : `...where's my stuff?.....`}</div>;
=======
  return <div>{bacon ? bacon : `...where's my stuff?....`}</div>;
>>>>>>> Stashed changes
}

export default App;
