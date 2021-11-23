import './styles/App.css';
import { 
  Routes, 
  Route,
} from 'react-router-dom'


// components
import Navbar from './modules/components/Navbar';
import DetailCard from './modules/components/DetailCard'
import ActivityForm from './modules/components/ActivityForm';

// views
import Home from './modules/views/Home'
import Landing from './modules/views/Landing'
import NotFound from './modules/views/NotFound'

function App() {
  return (
    <div className="App">
      <Navbar>Henry Countries</Navbar>
      <Routes>
        <Route index element={<Landing />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/country/:id" element={<DetailCard />}/>
        <Route path="/activity/add" element={<ActivityForm />}/>
        <Route path="/*" element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
