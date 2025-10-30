import './App.css'
import Constructor from './Constructor/Constructor';
import Layout from './Layout';
import Landing from './Pages/Landing/Landing'
import { HashRouter, Routes, Route, Navigate} from 'react-router-dom';


function App() {
  return (
    <>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path="/" element={<Navigate to="/news" replace />} />
          <Route path="news" element={<Landing />} />
        </Route>
        <Route path='constructor' element={<Constructor />}/>
      </Routes>
    </HashRouter>
    </>
  )
}

export default App
