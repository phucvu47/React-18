import React from 'react';
import Title from './components/Title';
import Setup from './examples/Interceptors';
import './axios/global';

const App = () => {
  return (
    <main>
      <Title />
      <Setup />
    </main>
  );
};

export default App;
