import { Freshdesk } from "./components/Freshdesk/Freshdesk";
import { UserProvider } from "./contexts/user.context";

import { Header } from "./components/Layouts/Header/Header";
import { Login } from "./components/Login/Login";

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
