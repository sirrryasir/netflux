import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Browse from './pages/Browse'

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </div>
  )
}

export default App
