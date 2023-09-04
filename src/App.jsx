import './App.scss';
import Accompagnements from './Pages/Accompagnements/Accompagnements'
import Boissons from './Pages/Boissons/Boissons'
import Burgers from './Pages/Burgers/Burgers'
import ClickAndCollect from './Pages/ClickAndCollect/ClickAndCollect'
import Contact from './Pages/Contact/Contact'
import Desserts from './Pages/Desserts/Desserts'
import Home from './Pages/Home/Home'
import Merci from './Pages/Merci/Merci'
import Paiement from './Pages/Paiement/Paiement'
import Recap from './Pages/Recap/Recap'
import Template from './Partials/Template/Template'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Template />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/click-and-collect" element={<ClickAndCollect />} />
          <Route exact path="/nos-burgers" element={<Burgers />} />
          <Route exact path="/nos-accompagnements" element={<Accompagnements />} />
          <Route exact path="/nos-boissons" element={<Boissons />} />
          <Route exact path="/nos-desserts" element={<Desserts />} />
          <Route exact path="/recap" element={<Recap />} />
          <Route exact path="/paiement" element={<Paiement />} />
          <Route exact path="/merci" element={<Merci />} />
          <Route exact path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
