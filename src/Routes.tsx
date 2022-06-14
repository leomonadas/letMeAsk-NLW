import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { NewRoom } from "./pages/NewRoom";

function Routes() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path='/' element={<Home />} />
            <Route path="/rooms/new" element={<NewRoom />} />   
        </Switch>
    </BrowserRouter>
  );
}

export default Routes;
