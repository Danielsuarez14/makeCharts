import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AreaChart from "./pages/AreaChart"
import BarChart from "./pages/BarChart"
import PieChart from "./pages/PieChart"
import LineChart from "./pages/LineChart"
import PolarAreaChart from "./pages/PolarAreaChart"
import RadarAreaChart from "./pages/RadarAreaChart"
import ScatterChart from "./pages/ScatterChart"

function App() {

  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path= "/" element={<Home/>}/>
        <Route path="/AreaChart" element={<AreaChart/>} />
        <Route path='/BarChart' element={<BarChart/>} />
        <Route path="/PieChart" element={<PieChart/>} />
        <Route path="/LineChart" element={<LineChart/>} />
        <Route path="/PolarChart" element={<PolarAreaChart/>} /> 
        <Route path="/RadarChart" element={<RadarAreaChart/>} />
        <Route path="/ScatterChart" element={<ScatterChart/>} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
