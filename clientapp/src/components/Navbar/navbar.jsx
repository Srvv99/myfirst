import "./navbar.css";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';

const Navbar=({ increment })=>{
return(
<>
 <div className="nav">
  
  <div className="leftnav">
    <div onClick={increment}>
  <MenuIcon className="menuicon" />
  </div>
    <h2> React Dashboard</h2>
    
    </div>


  <div className="rightnav">
  <NavLink to='/helpcentre'><HelpCenterIcon className="helpcentreicon"/></NavLink>
  </div>


 </div>


</>



)


}


export default Navbar;