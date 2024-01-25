import React from 'react';

import data from './data';
import Questions from './Questions';

const App = () => {
  const [questions, setQuestions] = React.useState(data);
  const [activeId, setActiveId] = React.useState(null);

  const toggleQuestion = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };

  return (
    <main>
      <Questions
        questions={questions}
        activeId={activeId}
        toggleQuestion={toggleQuestion}
      />
    </main>
  );
};

export default App;
