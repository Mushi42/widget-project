import { BrowserRouter, Routes } from 'react-router-dom';
import PrivateRoute from './components/routing/privateRoute';
import PublicRoute from './components/routing/publicRoute';
import Home from './screens/home-page/page';
import Login from './screens/login/Login';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <PublicRoute restricted={false} component={Login} path="/signin" exact />
        <PrivateRoute component={Home} path="/" exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
