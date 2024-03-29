import { ToastContainer } from "react-toastify";
import PrivateRoute from "./components/Routing/PrivateRoute";
import PublicRoute from "./components/Routing/PublicRoute";
import "./assets/scss/layouts/dynamic.css";

function App() {
  const user = true;

  return (
    <div className="App">
      {user ? <PrivateRoute /> : <PublicRoute />}
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
