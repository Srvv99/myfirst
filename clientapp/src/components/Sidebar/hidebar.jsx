import "./sidebar.css";
import { NavLink } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import AnalyticsIcon from '@mui/icons-material/Analytics';


const Hidebar=()=>{
return(
  <>
  <div className="hidebar">
  <NavLink className="hideIcons" to='/'><HomeIcon/></NavLink>
    <NavLink className="hideIcons" to='/analytics'><AnalyticsIcon/></NavLink>
  </div>
  </>
)
}

export default Hidebar;