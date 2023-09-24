import Forecast from './Forecast'
import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <div className="relative overflow-hidden bg-[#23304c] flex justify-center text-slate-100">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/forecast/:city" Component={Forecast} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
