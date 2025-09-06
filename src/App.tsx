import React from 'react';

const App = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: 'white', color: 'black', minHeight: '100vh' }}>
      <h1>Test - Website lädt!</h1>
      <p>Wenn Sie das sehen können, funktioniert die grundlegende React-App.</p>
      <button onClick={() => alert('Button funktioniert!')}>
        Test Button
      </button>
    </div>
  );
};

export default App;
