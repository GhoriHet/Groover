import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { fetchCategory } from '../../Redux/Slice/AddCategory';
import { setSelectedCategory } from '../../Redux/Slice/SelectCategory';

function Header(props) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const catDataFetched = useSelector((state => state.category?.data));
    const selectedCategory = useSelector(state => state.selectcategory.selectedCategory);

    React.useEffect(async () => {
        await dispatch(fetchCategory());
    }, []);

    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        console.log(selectedCategory);
    
        dispatch(setSelectedCategory(selectedCategory))
    
        if (selectedCategory) {
          navigate(`/category/${selectedCategory}`);
        }
    
      };

    return (
        <header>
            {/* Top-Header */}
            <div className="full-layer-outer-header">
                <div className="container clearfix">
                    <nav>
                        <ul className="primary-nav g-nav">
                            <li>
                                <a href="tel:+91 99784-67317">
                                    <i className="fas fa-phone u-c-brand u-s-m-r-9" />
                                    Mobile:+91 99784-67317</a>
                            </li>
                            <li>
                                <a href="mailto:ghorihet71@gmail.com">
                                    <i className="fas fa-envelope u-c-brand u-s-m-r-9" />
                                    Gmail: ghorihet71@gmail.com
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <nav>
                        <ul className="secondary-nav g-nav">
                            <li>
                                <a>My Account
                                    <i className="fas fa-chevron-down u-s-m-l-9" />
                                </a>
                                <ul className="g-dropdown" style={{ width: 200 }}>
                                    <li>
                                        <NavLink to={'/cart'}>
                                            <i className="fas fa-cog u-s-m-r-9" />
                                            My Cart</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'/wishlist'}>
                                            <i className="far fa-heart u-s-m-r-9" />
                                            My Wishlist</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'/checkout'}>
                                            <i className="far fa-check-circle u-s-m-r-9" />
                                            Checkout</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'/register'}>
                                            <i className="fas fa-sign-in-alt u-s-m-r-9" />
                                            Login / Signup</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a>INR(₹)
                                    {/* <i className="fas fa-chevron-down u-s-m-l-9" /> */}
                                </a>
                                {/* <ul className="g-dropdown" style={{ width: 90 }}>
                                    <li>
                                        <a href="#" className="u-c-brand">($) USD</a>
                                    </li>
                                </ul> */}
                            </li>
                            <li>
                                <a></a>
                                {/* <a>ENG
                                    <i className="fas fa-chevron-down u-s-m-l-9" />
                                </a>
                                <ul className="g-dropdown" style={{ width: 70 }}>
                                    <li>
                                        <a href="#" className="u-c-brand">ENG</a>
                                    </li>
                                    <li>
                                        <a href="#">ARB</a>
                                    </li>
                                </ul> */}
                            </li></ul>
                    </nav>
                </div>
            </div>
            {/* Top-Header /- */}
            {/* Mid-Header */}
            <div className="full-layer-mid-header">
                <div className="container">
                    <div className="row clearfix align-items-center">
                        <div className="col-lg-3 col-md-9 col-sm-6">
                            <div className="brand-logo text-lg-center">
                                <NavLink to={"/"} >
                                    <img src="images/main-logo/groover-branding-1.png" alt="Groover Brand Logo" className="app-brand-logo" />
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 u-d-none-lg">
                            <form className="form-searchbox">
                                <label className="sr-only" htmlFor="search-landscape">Search</label>
                                <input id="search-landscape" type="text" className="text-field" placeholder="Search everything" />
                                <div className="select-box-position">
                                    <div className="select-box-wrapper select-hide">
                                        <label className="sr-only" htmlFor="select-category">Choose category for search</label>

                                        <select className="select-box" id="select-categoryy" value={selectedCategory} onChange={handleCategoryChange}>
                                            <option value='All'>
                                                All
                                            </option>

                                            {
                                                catDataFetched?.data?.map((value) => {
                                                    return (
                                                        <option value={value.category_name} key={value.category_name}>{value.category_name}</option>
                                                    )
                                                })
                                            }
                                        </select>

                                    </div>
                                </div>
                                <button id="btn-search" type="submit" className="button button-primary fas fa-search" />
                            </form>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <nav>
                                <ul className="mid-nav g-nav">
                                    <li className="u-d-none-lg">
                                        {/* <NavLink to={"/"}>
                                            <i className="ion ion-md-home u-c-brand" />
                                        </NavLink> */}
                                        <NavLink to={"/"}><i className="ion ion-md-home u-c-brand" /></NavLink>
                                    </li>
                                    <li className="u-d-none-lg">
                                        <NavLink to={'/wishlist'}>
                                            <i className="far fa-heart" />
                                        </NavLink>
                                    </li>
                                    <li>
                                        <a id="mini-cart-trigger">
                                            <i className="ion ion-md-basket" />
                                            <span className="item-counter">4</span>
                                            <span className="item-price">&nbsp; $220.00</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mid-Header /- */}
            {/* Responsive-Buttons */}
            <div className="fixed-responsive-container">
                <div className="fixed-responsive-wrapper">
                    <button type="button" className="button fas fa-search" id="responsive-search" />
                </div>
                <div className="fixed-responsive-wrapper">
                    <a href="wishlist.html">
                        <i className="far fa-heart" />
                        <span className="fixed-item-counter">4</span>
                    </a>
                </div>
            </div>
            {/* Responsive-Buttons /- */}
            {/* Mini Cart */}
            <div className="mini-cart-wrapper">
                <div className="mini-cart">
                    <div className="mini-cart-header">
                        YOUR CART
                        <button type="button" className="button ion ion-md-close" id="mini-cart-close" />
                    </div>
                    <ul className="mini-cart-list">
                        <li className="clearfix">
                            <a href="single-product.html">
                                <img src="images/product/product-1.jpg" alt="Product" />
                                <span className="mini-item-name">Casual Hoodie Full Cotton</span>
                                <span className="mini-item-price">$55.00</span>
                                <span className="mini-item-quantity"> x 1 </span>
                            </a>
                        </li>
                        <li className="clearfix">
                            <a href="single-product.html">
                                <img src="images/product/product-14.jpg" alt="Product" />
                                <span className="mini-item-name">Black Rock Dress with High Jewelery Necklace</span>
                                <span className="mini-item-price">$55.00</span>
                                <span className="mini-item-quantity"> x 1 </span>
                            </a>
                        </li>
                        <li className="clearfix">
                            <a href="single-product.html">
                                <img src="images/product/product-29.jpg" alt="Product" />
                                <span className="mini-item-name">Xiaomi Note 2 Black Color</span>
                                <span className="mini-item-price">$55.00</span>
                                <span className="mini-item-quantity"> x 1 </span>
                            </a>
                        </li>
                        <li className="clearfix">
                            <a href="single-product.html">
                                <img src="images/product/product-39.jpg" alt="Product" />
                                <span className="mini-item-name">Dell Inspiron 15</span>
                                <span className="mini-item-price">$55.00</span>
                                <span className="mini-item-quantity"> x 1 </span>
                            </a>
                        </li>
                    </ul>
                    <div className="mini-shop-total clearfix">
                        <span className="mini-total-heading float-left">Total:</span>
                        <span className="mini-total-price float-right">$220.00</span>
                    </div>
                    <div className="mini-action-anchors">
                        <a href="cart.html" className="cart-anchor">View Cart</a>
                        <a href="checkout.html" className="checkout-anchor">Checkout</a>
                    </div>
                </div>
            </div>
            {/* Mini Cart /- */}
            {/* Bottom-Header */}
            <div className="full-layer-bottom-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3"></div>
                        <div className="col-lg-9">
                            <ul className="bottom-nav g-nav u-d-none-lg">
                                <li>
                                    <a href="custom-deal-page.html">New Arrivals
                                        <span className="superscript-label-new">NEW</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="custom-deal-page.html">Exclusive Deals
                                        <span className="superscript-label-hot">HOT</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="custom-deal-page.html">Flash Deals
                                    </a>
                                </li>
                                <li className="mega-position">
                                    <a>Pages
                                        <i className="fas fa-chevron-down u-s-m-l-9" />
                                    </a>
                                    <div className="mega-menu mega-3-colm">
                                        <ul>
                                            <li className="menu-title">Home &amp; Static Pages</li>
                                            <li>
                                                <NavLink to={"/"}>Home</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={"/about"}>About</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={"/contact"}>Contact</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={"/faq"}>FAQ</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={"/terms"}>Terms &amp; Conditions</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={"/404"}>404</NavLink>
                                            </li>

                                            <li className="menu-title">Blog</li>
                                            <li>
                                                <NavLink to={"/blog"}>Blog Page</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={"/blog-details"}>Blog Details</NavLink>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li className="menu-title">Ecommerce Pages</li>
                                            <li>
                                                <NavLink to={"/cart"}>Cart</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={"/checkout"}>Checkout</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={"/register"}>My Account</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={"/wishlist"}>Wishlist</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={"/track-order"}>Track your Order</NavLink>
                                            </li>
                                            <li className="menu-title">Shop Variations</li>
                                            <li>
                                                <NavLink to={'/shopv1'}>Shop Ver 1 Root Category</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={'/shopv2'}>Shop Ver 2 Sub Category</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={'/shopv3'}>Shop Ver 3 Product Not Found</NavLink>
                                            </li>
                                        </ul>
                                        <ul>

                                            <li className="menu-title">My Account Variation</li>
                                            <li>
                                                <NavLink to={'/forgot'}>Lost Your Password ?</NavLink>
                                            </li>
                                            <li className="menu-title">Checkout Variation</li>
                                            <li>
                                                <NavLink to={'/checkout-confirmation'}>Checkout Confirmation</NavLink>
                                            </li>
                                            <li className="menu-title">Custom Deals Page</li>
                                            <li>
                                                <NavLink to={'/custom-deal'}>Custom Deal Page</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a href="custom-deal-page.html">Super Sale
                                        <span className="superscript-label-discount">-15%</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Bottom-Header /- */}
        </header>
    );
}

export default Header;