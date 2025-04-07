import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from  './components/Sidebar.jsx';
import Dashboard from  './pages/Dashboard.jsx';
import Customers from  './pages/Customers.jsx';
import NotFound from './pages/NotFound';
import Details from  './pages/Details.jsx';
import Tasks from './pages/Tasks.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return(
    <BrowserRouter>
      <div>
        <Sidebar />
        <main className="w-full bg-blue-200 min-h-[100vh] shadow-lg border-[rgba(0,0,0,0.1)] md:border-l-1 z-10">
        <Header />
          <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/customers" element={<Customers />}/>
            <Route path="/customers/:id" element={<Details />}/>
            <Route path="/tasks" element={<Tasks />}/>
            <Route path="/tasks/:id" element={<Details />}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </BrowserRouter>
  );
}