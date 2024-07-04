import Title from './Title';
import Count from './Count';
import ResetButton from './ResetButton';
import ButtonContainer from './ButtonContainer';
import CountButton from './CountButton';

import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const locked = count === 5 ? true : false;

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.code === 'Space') {
        const newCount = count + 1;
        if (newCount > 5) {
          setCount(5);
          return;
        }
        setCount(newCount);
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [count]);

  return (
    <main>
      <div className={`card ${locked ? 'card--limit' : ''}`}>
        <Title locked={locked} />
        <Count count={count} />
        <ResetButton setCount={setCount} />
        <ButtonContainer>
          <CountButton setCount={setCount} type="minus" locked={locked} />
          <CountButton setCount={setCount} type="plus" locked={locked} />
        </ButtonContainer>
      </div>
    </main>
  );
}

export default App;
