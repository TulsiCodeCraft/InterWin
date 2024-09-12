import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './routes/meeting_schedule/layout';
import CardDetail from './routes/meeting_schedule/cardDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/meeting_schedule" element={<Layout />} />
        <Route path="/meeting_schedule/details" element={<CardDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
