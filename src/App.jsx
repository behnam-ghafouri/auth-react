import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { history } from "./_helpers";
import { Nav, PrivateRoute } from "./_components";
import { Home } from "./home";
import { Products } from "./products";
import { Expand } from "./expand";
import { Login } from "./login";
import { Students } from "./students";

export { App };

function App() {
  // init custom history object to allow navigation from
  // anywhere in the react app (inside or outside components)
  history.navigate = useNavigate();
  history.location = useLocation();

  return (
    <div className="app-container bg-light">
      <Nav />
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/students"
            element={
              <PrivateRoute>
                <Students />
              </PrivateRoute>
            }
          />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}
