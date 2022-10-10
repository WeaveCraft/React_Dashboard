import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import List from "./pages/list/List"
import New from "./pages/new/New"
import Single from "./pages/single/Single"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="transactions">
              <Route index element={<List />} />
              <Route path=":transactionsId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
            <Route path="savings">
              <Route index element={<List />} />
              <Route path=":savingsId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
