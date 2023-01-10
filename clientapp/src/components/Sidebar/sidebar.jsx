import "./sidebar.css";
import { NavLink } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import AnalyticsIcon from '@mui/icons-material/Analytics';


const Sidebar = () => {
  return (
    <>

      <div className="sidebar">

        <div className="lists">
          <h3 className="title">Dashboard-1</h3>
          <ul className="listitems">
            <li><NavLink className="listitem" to='/'><HomeIcon className="menuitem" />Home</NavLink></li>
            <li><NavLink className="listitem" to='/analytics'><AnalyticsIcon className="menuitem" />Analytics</NavLink></li>
            <li className="listitem" style={{ paddingLeft: "15px" }}>Sales</li>
            <li className="listitem" style={{ paddingLeft: "15px" }}>Related Lists</li>
          </ul>
        </div>

        {/* dashboard 2 */}

        <div className="lists">
          <h3 className="title">Dashboard-2</h3>
          <ul className="listitems">
            <li className="listitem" style={{ paddingLeft: "15px" }}>Home</li>
            <li className="listitem" style={{ paddingLeft: "15px" }}>Analytics</li>
            <li className="listitem" style={{ paddingLeft: "15px" }}>Sales</li>
            <li className="listitem" style={{ paddingLeft: "15px" }}>Related Lists</li>
          </ul>
        </div>

        {/* dashboard-3 */}

        <div className="lists">
          <h3 className="title">Dashboard-3</h3>
          <ul className="listitems">
            <li className="listitem" style={{ paddingLeft: "15px" }}>Home</li>
            <li className="listitem" style={{ paddingLeft: "15px" }}>Analytics</li>
            <li className="listitem" style={{ paddingLeft: "15px" }}>Sales</li>
            <li className="listitem" style={{ paddingLeft: "15px" }}>Related Lists</li>
          </ul>
        </div>
        {/* dashboard-4 */}
        <div className="lists">
          <h3 className="title">Dashboard-4</h3>
          <ul className="listitems">
            <li className="listitem" style={{ paddingLeft: "15px" }}>Home</li>
            <li className="listitem" style={{ paddingLeft: "15px" }}>Analytics</li>
            <li className="listitem" style={{ paddingLeft: "15px" }}>Sales</li>
            <li className="listitem" style={{ paddingLeft: "20px" }}>Related Lists</li>
          </ul>
        </div>
        {/* dashboard-5 */}
        <div className="lists">
          <h3 className="title">Dashboard-5</h3>
          <ul className="listitems">
            <li className="listitem" style={{ paddingLeft: "15px" }}>Home</li>
            <li className="listitem" style={{ paddingLeft: "15px" }}>Analytics</li>
            <li className="listitem" style={{ paddingLeft: "15px" }}>Sales</li>
            <li className="listitem" style={{ paddingLeft: "15px" }}>Related Lists</li>
          </ul>
        </div>
        {/* dashboard-6 */}

        <div className="lists">
          <h3 className="title">Dashboard-6</h3>
          <ul className="listitems">
            <li className="listitem" style={{ paddingLeft: "15px" }}>Home</li>
            <li className="listitem" style={{ paddingLeft: "15px" }}>Analytics</li>
            <li className="listitem" style={{ paddingLeft: "15px" }}>Sales</li>
            <li className="listitem" style={{ paddingLeft: "15px" }}>Related Lists</li>
          </ul>
        </div>
        {/* dashboard-7 */}
        <div className="lists">
          <h3 className="title">Dashboard-7</h3>
          <ul className="listitems">
            <li className="listitem" style={{ paddingLeft: "15px" }}>Home</li>
            <li className="listitem" style={{ paddingLeft: "15px" }}>Analytics</li>
            <li className="listitem" style={{ paddingLeft: "15px" }}>Sales</li>
            <li className="listitem" style={{ paddingLeft: "15px" }}>Related Lists</li>
          </ul>
        </div>


      </div>

    </>
  )
}

export default Sidebar;