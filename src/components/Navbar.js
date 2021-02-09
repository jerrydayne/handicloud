import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import { Link } from 'react-router-dom';
import { SidebarData } from '../data/Data';

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
                <div className="navbar">
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaLongArrowAltRight onMouseEnter={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} onMouseLeave={showSidebar}>
                    <ul className="nav-menu-items">
                        {/* <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <AiIcons.AiOutlineClose  onClick={showSidebar} />
                            </Link>
                        </li> */}
                        {SidebarData.map(( item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        <span className="menu-icons">{item.icon}</span>
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
        </>
    )
}

export default Navbar
