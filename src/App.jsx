import Card from './components/Card';
import List from './components/List';

function App() {
  const user = {
    name: "John Doe",
    job: 'Engineer',
    hobby: 'Listen to music',
  }
  return (
    <div className="App">
      <div>
        <Card user={user} />
      </div>
      <List />
    </div>
  );
}

export default App;
