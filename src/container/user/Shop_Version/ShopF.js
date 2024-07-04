import React from 'react';
import { Link } from 'react-router-dom';

function ShopF(props) {
    return (
        <div>
            <div className="page-style-a">
                <div className="container">
                    <div className="page-intro">
                        <h2>Shop</h2>
                        <ul className="bread-crumb">
                            <li className="has-separator">
                                <i className="ion ion-md-home" />
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li className="is-marked">
                                <Link to={'/shopv1'}>Shop</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Page Introduction Wrapper /- */}
            {/* Shop-Page */}
            <div className="page-shop u-s-p-t-80">
                <div className="container">
                    {/* Shop-Intro */}
                    <div className="shop-intro">
                        <h3>Men's Clothing</h3>
                    </div>
                    {/* Shop-Intro /- */}
                    <div className="row">
                        {/* Shop-Left-Side-Bar-Wrapper */}
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            {/* Fetch-Categories-from-Root-Category  */}
                            {/* <div className="fetch-categories">
                                <h3 className="title-name">Browse Categories</h3>
                                <h3 className="fetch-mark-category">
                                    <a href="shop-v2-sub-category.html">Tops
                                        <span className="total-fetch-items">(5)</span>
                                    </a>
                                </h3>
                                <ul>
                                    <li>
                                        <a href="shop-v3-sub-sub-category.html">T-Shirts
                                            <span className="total-fetch-items">(2)</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-v3-sub-sub-category.html">Hoodies
                                            <span className="total-fetch-items">(1)</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-v3-sub-sub-category.html">Suits
                                            <span className="total-fetch-items">(1)</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-v4-filter-as-category.html">Black Bean T-Shirt
                                            <span className="total-fetch-items">(1)</span>
                                        </a>
                                    </li>
                                </ul>
                                <h3 className="fetch-mark-category">
                                    <a href="shop-v2-sub-category.html">Outwear
                                        <span className="total-fetch-items">(3)</span>
                                    </a>
                                </h3>
                                <ul>
                                    <li>
                                        <a href="shop-v3-sub-sub-category.html">Jackets
                                            <span className="total-fetch-items">(3)</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-v3-sub-sub-category.html">Trench
                                            <span className="total-fetch-items">(0)</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-v3-sub-sub-category.html">Parkas
                                            <span className="total-fetch-items">(0)</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-v3-sub-sub-category.html">Sweaters
                                            <span className="total-fetch-items">(0)</span>
                                        </a>
                                    </li>
                                </ul>
                                <h3 className="fetch-mark-category">
                                    <a href="shop-v2-sub-category.html">Accessories
                                        <span className="total-fetch-items">(1)</span>
                                    </a>
                                </h3>
                                <ul>
                                    <li>
                                        <a href="shop-v3-sub-sub-category.html">Watches
                                            <span className="total-fetch-items">(0)</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-v2-sub-category.html">Ties
                                            <span className="total-fetch-items">(1)</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-v3-sub-sub-category.html">Scarves
                                            <span className="total-fetch-items">(0)</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-v3-sub-sub-category.html">Belts
                                            <span className="total-fetch-items">(0)</span>
                                        </a>
                                    </li>
                                </ul>
                                <h3 className="fetch-mark-category">
                                    <a href="shop-v2-sub-category.html">Bottoms
                                        <span className="total-fetch-items">(2)</span>
                                    </a>
                                </h3>
                                <ul>
                                    <li>
                                        <a href="shop-v3-sub-sub-category.html">Casual Pants
                                            <span className="total-fetch-items">(2)</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-v3-sub-sub-category.html">Shoes
                                            <span className="total-fetch-items">(1)</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-v3-sub-sub-category.html">Jeans
                                            <span className="total-fetch-items">(1)</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-v3-sub-sub-category.html">Shorts
                                            <span className="total-fetch-items">(0)</span>
                                        </a>
                                    </li>
                                </ul>
                                <h3 className="fetch-mark-category">
                                    <a href="shop-v2-sub-category.html">Underwear
                                        <span className="total-fetch-items">(0)</span>
                                    </a>
                                </h3>
                                <ul>
                                    <li>
                                        <a href="shop-v3-sub-sub-category.html">Boxers
                                            <span className="total-fetch-items">(0)</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-v3-sub-sub-category.html">Briefs
                                            <span className="total-fetch-items">(0)</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-v3-sub-sub-category.html">Robes
                                            <span className="total-fetch-items">(0)</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-v3-sub-sub-category.html">Socks
                                            <span className="total-fetch-items">(0)</span>
                                        </a>
                                    </li>
                                </ul>
                                <h3 className="fetch-mark-category">
                                    <a href="shop-v2-sub-category.html">Sunglasses
                                        <span className="total-fetch-items">(2)</span>
                                    </a>
                                </h3>
                                <ul>
                                    <li>
                                        <a href="shop-v3-sub-sub-category.html">Pilot
                                            <span className="total-fetch-items">(0)</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-v3-sub-sub-category.html">Wayfarer
                                            <span className="total-fetch-items">(0)</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-v3-sub-sub-category.html">Square
                                            <span className="total-fetch-items">(0)</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-v3-sub-sub-category.html">Round
                                            <span className="total-fetch-items">(2)</span>
                                        </a>
                                    </li>
                                </ul>
                            </div> */}
                            {/* Fetch-Categories-from-Root-Category  /- */}
                        </div>
                        {/* Shop-Left-Side-Bar-Wrapper /- */}
                        {/* Shop-Right-Wrapper */}
                        <div className="col-lg-9 col-md-9 col-sm-12">
                            {/* Page-Bar */}
                            <div className="page-bar clearfix">
                                <div className="shop-settings">
                                    <a id="list-anchor" className="active">
                                        <i className="fas fa-th-list" />
                                    </a>
                                    <a id="grid-anchor">
                                        <i className="fas fa-th" />
                                    </a>
                                </div>
                                {/* Toolbar Sorter 1  */}
                                <div className="toolbar-sorter">
                                    <div className="select-box-wrapper">
                                        <label className="sr-only" htmlFor="sort-by">Sort By</label>
                                        <select className="select-box" id="sort-by">
                                            <option selected="selected" value>Sort By: Best Selling</option>
                                            <option value>Sort By: Latest</option>
                                            <option value>Sort By: Lowest Price</option>
                                            <option value>Sort By: Highest Price</option>
                                            <option value>Sort By: Best Rating</option>
                                        </select>
                                    </div>
                                </div>
                                {/* //end Toolbar Sorter 1  */}
                                {/* Toolbar Sorter 2  */}
                                <div className="toolbar-sorter-2">
                                    <div className="select-box-wrapper">
                                        <label className="sr-only" htmlFor="show-records">Show Records Per Page</label>
                                        <select className="select-box" id="show-records">
                                            <option selected="selected" value>Show: 8</option>
                                            <option value>Show: 16</option>
                                            <option value>Show: 28</option>
                                        </select>
                                    </div>
                                </div>
                                {/* //end Toolbar Sorter 2  */}
                            </div>
                            {/* Page-Bar /- */}
                            {/* Row-of-Product-Container */}
                            <div className="row product-container list-style">
                                <div className="product-item col-lg-4 col-md-6 col-sm-6">
                                    <div className="item">
                                        <div className="image-container">
                                            <a className="item-img-wrapper-link" href="single-product.html">
                                                <img className="img-fluid" src="images/product/product-1.jpg" alt="Product" />
                                            </a>
                                            <div className="item-action-behaviors">
                                                <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                                <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                                                <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                            </div>
                                        </div>
                                        <div className="item-content">
                                            <div className="what-product-is">
                                                <ul className="bread-crumb">
                                                    <li className="has-separator">
                                                        <a href="shop-v1-root-category.html">Men's</a>
                                                    </li>
                                                    <li className="has-separator">
                                                        <a href="shop-v2-sub-category.html">Tops</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-v3-sub-sub-category.html">Hoodies</a>
                                                    </li>
                                                </ul>
                                                <h6 className="item-title">
                                                    <a href="single-product.html">Casual Hoodie Full Cotton</a>
                                                </h6>
                                                <div className="item-description">
                                                    <p>This hoodie is full cotton. It includes a muff sewn onto the lower front, and (usually) a drawstring to adjust the hood opening. Throughout the U.S., it is common for middle-school, high-school, and college students to wear this sweatshirts—with or without hoods—that display their respective school names or mascots across the chest, either as part of a uniform or personal preference.
                                                    </p>
                                                </div>
                                                <div className="item-stars">
                                                    <div className="star" title="4.5 out of 5 - based on 23 Reviews">
                                                        <span style={{ width: 67 }} />
                                                    </div>
                                                    <span>(23)</span>
                                                </div>
                                            </div>
                                            <div className="price-template">
                                                <div className="item-new-price">
                                                    $55.00
                                                </div>
                                                <div className="item-old-price">
                                                    $60.00
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tag new">
                                            <span>NEW</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-item col-lg-4 col-md-6 col-sm-6">
                                    <div className="item">
                                        <div className="image-container">
                                            <a className="item-img-wrapper-link" href="single-product.html">
                                                <img className="img-fluid" src="images/product/product-2.jpg" alt="Product" />
                                            </a>
                                            <div className="item-action-behaviors">
                                                <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                                <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                                                <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                            </div>
                                        </div>
                                        <div className="item-content">
                                            <div className="what-product-is">
                                                <ul className="bread-crumb">
                                                    <li className="has-separator">
                                                        <a href="shop-v1-root-category.html">Men's</a>
                                                    </li>
                                                    <li className="has-separator">
                                                        <a href="shop-v2-sub-category.html">Tops</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-v3-sub-sub-category.html">T-Shirts</a>
                                                    </li>
                                                </ul>
                                                <h6 className="item-title">
                                                    <a href="single-product.html">Mischka Plain Men T-Shirt</a>
                                                </h6>
                                                <div className="item-description">
                                                    <p>T-shirts with bold slogans were popular in the UK in the 1980s. T-shirts were originally worn as undershirts, but are now worn frequently as the only piece of clothing on the top half of the body, other than possibly a brassiere or, rarely, a waistcoat (vest). T-shirts have also become a medium for self-expression and advertising, with any imaginable combination of words, art and photographs on display.</p>
                                                </div>
                                                <div className="item-stars">
                                                    <div className="star" title="4.5 out of 5 - based on 23 Reviews">
                                                        <span style={{ width: 67 }} />
                                                    </div>
                                                    <span>(23)</span>
                                                </div>
                                            </div>
                                            <div className="price-template">
                                                <div className="item-new-price">
                                                    $55.00
                                                </div>
                                                <div className="item-old-price">
                                                    $60.00
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-item col-lg-4 col-md-6 col-sm-6">
                                    <div className="item">
                                        <div className="image-container">
                                            <a className="item-img-wrapper-link" href="single-product.html">
                                                <img className="img-fluid" src="images/product/product-3.jpg" alt="Product" />
                                            </a>
                                            <div className="item-action-behaviors">
                                                <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                                <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                                                <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                            </div>
                                        </div>
                                        <div className="item-content">
                                            <div className="what-product-is">
                                                <ul className="bread-crumb">
                                                    <li className="has-separator">
                                                        <a href="shop-v1-root-category.html">Men's</a>
                                                    </li>
                                                    <li className="has-separator">
                                                        <a href="shop-v2-sub-category.html">Tops</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-v4-filter-as-category.html">T-Shirts</a>
                                                    </li>
                                                </ul>
                                                <h6 className="item-title">
                                                    <a href="single-product.html">Black Bean Plain Men T-Shirt</a>
                                                </h6>
                                                <div className="item-description">
                                                    <p>T-shirts with bold slogans were popular in the UK in the 1980s. T-shirts were originally worn as undershirts, but are now worn frequently as the only piece of clothing on the top half of the body, other than possibly a brassiere or, rarely, a waistcoat (vest). T-shirts have also become a medium for self-expression and advertising, with any imaginable combination of words, art and photographs on display.</p>
                                                </div>
                                                <div className="item-stars">
                                                    <div className="star" title="4.5 out of 5 - based on 23 Reviews">
                                                        <span style={{ width: 67 }} />
                                                    </div>
                                                    <span>(23)</span>
                                                </div>
                                            </div>
                                            <div className="price-template">
                                                <div className="item-new-price">
                                                    $55.00
                                                </div>
                                                <div className="item-old-price">
                                                    $60.00
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-item col-lg-4 col-md-6 col-sm-6">
                                    <div className="item">
                                        <div className="image-container">
                                            <a className="item-img-wrapper-link" href="single-product.html">
                                                <img className="img-fluid" src="images/product/product-4.jpg" alt="Product" />
                                            </a>
                                            <div className="item-action-behaviors">
                                                <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                                <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                                                <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                            </div>
                                        </div>
                                        <div className="item-content">
                                            <div className="what-product-is">
                                                <ul className="bread-crumb">
                                                    <li className="has-separator">
                                                        <a href="shop-v1-root-category.html">Men's</a>
                                                    </li>
                                                    <li className="has-separator">
                                                        <a href="shop-v2-sub-category.html">Bottoms</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-v3-sub-sub-category.html">Jeans</a>
                                                    </li>
                                                </ul>
                                                <h6 className="item-title">
                                                    <a href="single-product.html">Regular Rock Blue Men Jean</a>
                                                </h6>
                                                <div className="item-description">
                                                    <p>Traditionally, jeans were dyed to a blue color using natural indigo dye. Most denim is now dyed using synthetic indigo. Approximately 20 thousand tons of indigo are produced annually for this purpose, though only a few grams of the dye are required for each pair. For other colors of denim other dyes must be used. Currently, jeans are produced in any color that can be achieved with cotton.
                                                    </p>
                                                </div>
                                                <div className="item-stars">
                                                    <div className="star" title="4.5 out of 5 - based on 23 Reviews">
                                                        <span style={{ width: 67 }} />
                                                    </div>
                                                    <span>(23)</span>
                                                </div>
                                            </div>
                                            <div className="price-template">
                                                <div className="item-new-price">
                                                    $55.00
                                                </div>
                                                <div className="item-old-price">
                                                    $60.00
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tag new">
                                            <span>NEW</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-item col-lg-4 col-md-6 col-sm-6">
                                    <div className="item">
                                        <div className="image-container">
                                            <a className="item-img-wrapper-link" href="single-product.html">
                                                <img className="img-fluid" src="images/product/product-5.jpg" alt="Product" />
                                            </a>
                                            <div className="item-action-behaviors">
                                                <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                                <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                                                <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                            </div>
                                        </div>
                                        <div className="item-content">
                                            <div className="what-product-is">
                                                <ul className="bread-crumb">
                                                    <li className="has-separator">
                                                        <a href="shop-v1-root-category.html">Men's</a>
                                                    </li>
                                                    <li className="has-separator">
                                                        <a href="shop-v2-sub-category.html">Tops</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-v3-sub-sub-category.html">Suits</a>
                                                    </li>
                                                </ul>
                                                <h6 className="item-title">
                                                    <a href="single-product.html">Black Maire Full Men Suit</a>
                                                </h6>
                                                <div className="item-description">
                                                    <p>British dandy Beau Brummell redefined and adapted this style, then popularised it, leading European men to wearing well-cut, tailored clothes, adorned with carefully knotted neckties. The simplicity of the new clothes and their sombre colours contrasted strongly with the extravagant, foppish styles just before. Brummell's influence introduced the modern era of men's clothing which now includes the modern suit and necktie.</p>
                                                </div>
                                                <div className="item-stars">
                                                    <div className="star" title="4.5 out of 5 - based on 23 Reviews">
                                                        <span style={{ width: 67 }} />
                                                    </div>
                                                    <span>(23)</span>
                                                </div>
                                            </div>
                                            <div className="price-template">
                                                <div className="item-new-price">
                                                    $55.00
                                                </div>
                                                <div className="item-old-price">
                                                    $60.00
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tag sale">
                                            <span>SALE</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-item col-lg-4 col-md-6 col-sm-6">
                                    <div className="item">
                                        <div className="image-container">
                                            <a className="item-img-wrapper-link" href="single-product.html">
                                                <img className="img-fluid" src="images/product/product-6.jpg" alt="Product" />
                                            </a>
                                            <div className="item-action-behaviors">
                                                <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                                <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                                                <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                            </div>
                                        </div>
                                        <div className="item-content">
                                            <div className="what-product-is">
                                                <ul className="bread-crumb">
                                                    <li className="has-separator">
                                                        <a href="shop-v1-root-category.html">Men's</a>
                                                    </li>
                                                    <li className="has-separator">
                                                        <a href="shop-v2-sub-category.html">Outwear</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-v3-sub-sub-category.html">Jackets</a>
                                                    </li>
                                                </ul>
                                                <h6 className="item-title">
                                                    <a href="single-product.html">Woodsmoke Rookie Parka Jacket</a>
                                                </h6>
                                                <div className="item-description">
                                                    <p>A parka or anorak is a type of coat with a hood, often lined with fur or faux fur. The Caribou Inuit invented this kind of garment, originally made from caribou or seal skin, for hunting and kayaking in the frigid Arctic. Some Inuit anoraks require regular coating with fish oil to retain their water resistance.</p>
                                                </div>
                                                <div className="item-stars">
                                                    <div className="star" title="4.5 out of 5 - based on 23 Reviews">
                                                        <span style={{ width: 67 }} />
                                                    </div>
                                                    <span>(23)</span>
                                                </div>
                                            </div>
                                            <div className="price-template">
                                                <div className="item-new-price">
                                                    $55.00
                                                </div>
                                                <div className="item-old-price">
                                                    $60.00
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-item col-lg-4 col-md-6 col-sm-6">
                                    <div className="item">
                                        <div className="image-container">
                                            <a className="item-img-wrapper-link" href="single-product.html">
                                                <img className="img-fluid" src="images/product/product-7.jpg" alt="Product" />
                                            </a>
                                            <div className="item-action-behaviors">
                                                <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                                <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                                                <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                            </div>
                                        </div>
                                        <div className="item-content">
                                            <div className="what-product-is">
                                                <ul className="bread-crumb">
                                                    <li className="has-separator">
                                                        <a href="shop-v1-root-category.html">Men's</a>
                                                    </li>
                                                    <li className="has-separator">
                                                        <a href="shop-v2-sub-category.html">Accessories</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-v3-sub-sub-category.html">Ties</a>
                                                    </li>
                                                </ul>
                                                <h6 className="item-title">
                                                    <a href="single-product.html">Blue Zodiac Boxes Reg Tie
                                                    </a>
                                                </h6>
                                                <div className="item-description">
                                                    <p>A necktie, or simply a tie, is a long piece of cloth, worn usually by men, for decorative purposes around the neck, resting under the shirt collar and knotted at the throat.</p>
                                                </div>
                                                <div className="item-stars">
                                                    <div className="star" title="4.5 out of 5 - based on 23 Reviews">
                                                        <span style={{ width: 67 }} />
                                                    </div>
                                                    <span>(23)</span>
                                                </div>
                                            </div>
                                            <div className="price-template">
                                                <div className="item-new-price">
                                                    $55.00
                                                </div>
                                                <div className="item-old-price">
                                                    $60.00
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-item col-lg-4 col-md-6 col-sm-6">
                                    <div className="item">
                                        <div className="image-container">
                                            <a className="item-img-wrapper-link" href="single-product.html">
                                                <img className="img-fluid" src="images/product/product-8.jpg" alt="Product" />
                                            </a>
                                            <div className="item-action-behaviors">
                                                <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                                <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                                                <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                            </div>
                                        </div>
                                        <div className="item-content">
                                            <div className="what-product-is">
                                                <ul className="bread-crumb">
                                                    <li className="has-separator">
                                                        <a href="shop-v1-root-category.html">Men's</a>
                                                    </li>
                                                    <li className="has-separator">
                                                        <a href="shop-v2-sub-category.html">Bottoms</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-v3-sub-sub-category.html">Shoes</a>
                                                    </li>
                                                </ul>
                                                <h6 className="item-title">
                                                    <a href="single-product.html">Zambezi Carved Leather Business Casual Shoes
                                                    </a>
                                                </h6>
                                                <div className="item-description">
                                                    <p>Dress shoes are characterized by smooth and supple leather uppers, leather soles, and narrow sleek figure. Casual shoes are characterized by sturdy leather uppers, non-leather outsoles, and wide profile. Some designs of dress shoes can be worn by either gender. The majority of dress shoes have an upper covering, commonly made of leather, enclosing most of the lower foot, but not covering the ankles.</p>
                                                </div>
                                                <div className="item-stars">
                                                    <div className="star" title="4.5 out of 5 - based on 23 Reviews">
                                                        <span style={{ width: 67 }} />
                                                    </div>
                                                    <span>(23)</span>
                                                </div>
                                            </div>
                                            <div className="price-template">
                                                <div className="item-new-price">
                                                    $55.00
                                                </div>
                                                <div className="item-old-price">
                                                    $60.00
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tag discount">
                                            <span>-15%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Row-of-Product-Container /- */}
                        </div>
                        {/* Shop-Right-Wrapper /- */}
                        {/* Shop-Pagination */}
                        <div className="pagination-area">
                            <div className="pagination-number">
                                <ul>
                                    <li style={{ display: 'none' }}>
                                        <a href="shop-v1-root-category.html" title="Previous">
                                            <i className="fa fa-angle-left" />
                                        </a>
                                    </li>
                                    <li className="active">
                                        <a href="shop-v1-root-category.html">1</a>
                                    </li>
                                    <li>
                                        <a href="shop-v1-root-category.html">2</a>
                                    </li>
                                    <li>
                                        <a href="shop-v1-root-category.html">3</a>
                                    </li>
                                    <li>
                                        <a href="shop-v1-root-category.html">...</a>
                                    </li>
                                    <li>
                                        <a href="shop-v1-root-category.html">10</a>
                                    </li>
                                    <li>
                                        <a href="shop-v1-root-category.html" title="Next">
                                            <i className="fa fa-angle-right" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Shop-Pagination /- */}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ShopF;