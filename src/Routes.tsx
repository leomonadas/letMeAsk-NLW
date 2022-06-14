import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { NewRoom } from "./pages/NewRoom";

import { AuthContextProvider } from './contexts/AuthContext';

function Routes() {
    
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
            <Route path='/' element={<Home />} />
            <Route path="/rooms/new" element={<NewRoom />} />   
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default Routes;
