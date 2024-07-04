import Title from './Title';
import Count from './Count';
import ResetButton from './ResetButton';
import CountButtons from './CountButtons';

function App() {
  return (
    <main>
      <div className="card">
        <Title />
        <Count />
        <ResetButton />
        <CountButtons />
      </div>
    </main>
  );
}

export default App;
