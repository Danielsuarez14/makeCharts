import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AreaChart from "./pages/AreaChart"
import BarChart from "./pages/BarChart"
import PieChart from "./pages/PieChart"

function App() {

  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path= "/" element={<Home/>}/>
        <Route path="/AreaChart" element={<AreaChart/>} />
        <Route path='/BarChart' element={<BarChart/>} />
        <Route path="/PieChart" element={<PieChart/>} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
