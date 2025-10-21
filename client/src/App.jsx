import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<div className="p-6">Home</div>} />
        <Route path="/filtration" element={<div className="p-6">Filtration page</div>} />
        <Route path="/my-bookings" element={<div className="p-6">My bookings</div>} />
      </Routes>
    </>
  );
}
