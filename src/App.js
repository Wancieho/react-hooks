import { Freshdesk } from "./components/Freshdesk/Freshdesk";
import { UserProvider } from "./contexts/user.context";

import { Header } from "./components/Lay/Head/Header";
import { Login } from "./components/Log/Login";

function App() {
  return (
    <div data-testid="App">
      <UserProvider>
        <Header />
        <Login />
        <Freshdesk />
      </UserProvider>
    </div>
  );
}
export default App;
