import {Route} from 'react-router-dom';

import AllClientsPage from './pages/AllClients';
import NewClientsPage from './pages/NewClient';
import FavoritesPage from './pages/Favorites';

function App() {
  return <div>
    <Route path = '/'>
      <AllClientsPage />
    </Route>
    <Route path = '/new-client'>
      <NewClientsPage />
    </Route>
    <Route path = '/favorites'>
      <FavoritesPage /> 
    </Route>
  </div>;
  
}

export default App;
