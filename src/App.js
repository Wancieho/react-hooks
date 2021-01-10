import { Header } from './components/layout/Header/Header';
import { Login } from './components/login/Login';
import { UserProvider } from './contexts/user.context';

function App() {
  return (
    <div data-testid="App">
      <UserProvider>
        <Header />
        <Login />
      </UserProvider>
    </div>
  );
}
export default App;
