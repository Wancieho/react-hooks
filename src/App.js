import { Header } from './components/layout/Header/Header';
import { Login } from './components/login/Login';

function App() {
  return (
    <div data-testid="App">
      <Header />
      <Login />
    </div>
  );
}

export default App;
