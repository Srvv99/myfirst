import "./display.css";
import { Routes, Route } from "react-router-dom";
import Widgetinfo from "./widgetinfo";
import Analytics from "./analytics";
import Helpcentre from "./helpcentre";
const Display = () => {
  return (
    <>
      <div className="display">
    
        <Routes>
          <Route path='/' element={<Widgetinfo />} />
          <Route path='/analytics' element={<Analytics />} />
          <Route path='/helpcentre' element={<Helpcentre />} />
        </Routes>
      </div>
    </>
  )

}

export default Display;