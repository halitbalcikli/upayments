import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Detail from './Pages/Detail/Detail'
import AddProduct from './Pages/AddProduct/AddProduct'
import ErrorPage from './Pages/ErrorPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="add_product" element={<AddProduct /> } />
        <Route path="*" element={<ErrorPage /> } />
      </Routes>
    </Router>
  );
}

export default App;
