import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import TeamDetails from './components/TeamDetails';

function App() {

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams/2024/:id" element={<TeamDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
