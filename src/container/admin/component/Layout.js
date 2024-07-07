import React from 'react';
import { NavLink } from 'react-router-dom';
import CategoryIcon from '@mui/icons-material/Category';
import ClassIcon from '@mui/icons-material/Class';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Layout({ children }) {
    const [toggle, setToggle] = React.useState(true);

    const handleToggleSwitch = () => {
        setToggle(!toggle)
    }

    return (
        <div>
            <div id='navBar1' className={toggle ? 'sidebar' : 'close'}>
                <div class="logo-name">
                    <div class="logo-image">
                        <img src="/images/adminLogo/logo.png" alt="" />
                    </div>
                    <span class="logo_name">CodingLab</span>
                </div>
                <div class="menu-items">
                    <ul class="nav-links">

                        <li><NavLink to="/admin/">
                            <i class="uil uil-estate"></i>
                            <span class="link-name">Dashboard</span>
                        </NavLink></li>

                        <li><NavLink to="/admin/add-category">
                            <CategoryIcon style={{ marginRight: '10px', fontSize: '24px', color: '#707070', marginLeft: '10px' }} />
                            <span class="link-name">Add Category</span>
                        </NavLink></li>

                        <li><NavLink to="/admin/add-subcategory">
                            <ClassIcon style={{ marginRight: '10px', fontSize: '24px', color: '#707070', marginLeft: '10px' }} />
                            <span class="link-name">Add Subcategory</span>
                        </NavLink></li>

                        <li><NavLink to="/admin/add-product">
                            <AddShoppingCartIcon style={{ marginRight: '10px', fontSize: '24px', color: '#707070', marginLeft: '10px' }} />
                            <span class="link-name">Add Product</span>
                        </NavLink></li>

                    </ul>

                    <ul class="logout-mode">
                        <li><a href="#">
                            <i class="uil uil-signout"></i>
                            <span class="link-name">Logout</span>
                        </a></li>
                    </ul>
                </div>
            </div>
            <section className="dashboard">
                <div className="top">
                    <i className="uil uil-bars sidebar-toggle" onClick={() => handleToggleSwitch()} />
                    {/* <div className="search-box">
                        <i className="uil uil-search" />
                        <input type="text" placeholder="Search here..." />
                    </div> */}
                    <img src="/images/adminLogo/profile.jpg" alt="" />
                </div>
                {children}
            </section>
        </div>
    );
}

export default Layout;