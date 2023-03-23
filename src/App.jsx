import Card from './components/Card';

function App() {
  const user = {
    name: "John Doe",
    job: 'Engineer',
    hobby: 'Listen to music',
  }
  return (
    <div className="App">
      <div className="Card">
        <Card user = {user} />
      </div>
      
    </div>
  );
}

export default App;
