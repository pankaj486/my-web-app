import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt , faUserNinja } from '@fortawesome/free-solid-svg-icons'


const Sidebar = ()=>{
    return(
    <>
    <div className="l-navbar" id="nav-bar">
        <nav className="nav">
            <div> <a href="#" className="nav_logo"><FontAwesomeIcon icon={faUserNinja} /><span className="nav_logo-name">BBBootstrap</span> </a>
                <div className="nav_list"> <a href="#" className="nav_link active"> <FontAwesomeIcon icon={faTachometerAlt} /> <span className="nav_name">Dashboard</span> </a> 
                <a href="#" className="nav_link"> <FontAwesomeIcon icon={faUserNinja} /> <span className="nav_name">Users</span> </a> 
                <a href="#" className="nav_link"> <FontAwesomeIcon icon={faUserNinja} /><span className="nav_name">Messages</span> </a>
                <a href="#" className="nav_link"><FontAwesomeIcon icon={faUserNinja} /><span className="nav_name">Bookmark</span> </a> 
                <a href="#" className="nav_link"> <FontAwesomeIcon icon={faUserNinja} /><span className="nav_name">Files</span> </a> 
                <a href="#" className="nav_link"> <FontAwesomeIcon icon={faUserNinja} /><span className="nav_name">Stats</span> </a> </div>
            </div> 
            <a href="#" className="nav_link"> <FontAwesomeIcon icon={faUserNinja} /><span className="nav_name">SignOut</span> </a>
        </nav>
    </div>
    </>
    )
}

export default Sidebar;