
import './App.css';
import Home from "./Component/Home/Home"
import Sign from './Component/Sign/Sign';
import Main from "./Component/Main/Main"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Sign />} path="/Sign" />
        <Route element={<Main />} path="/Main" />
      </Routes>
    </Router>
  )
}
export default App;