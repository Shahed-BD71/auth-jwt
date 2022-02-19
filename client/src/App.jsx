import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Auth/Login';
import Register from "./components/Auth/Register";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

// axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;