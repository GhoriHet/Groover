import React from 'react';
import { Link } from 'react-router-dom';

function ShopS(props) {
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
                                <Link to={'/shopv2'}>Shop</Link>
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
                        <ul className="bread-crumb">
                            <li className="has-separator">
                                <a href="home.html">Home</a>
                            </li>
                            <li className="has-separator">
                                <a href="shop-v1-root-category.html">Men's Clothing</a>
                            </li>
                            <li className="is-marked">
                                <a href="shop-v3-sub-sub-category.html">Tops</a>
                            </li>
                        </ul>
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
                                        <a href="shop-v2-sub-category.html">Hoodies
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
                            </div> */}
                            {/* Fetch-Categories-from-Root-Category  /- */}
                            {/* Filters */}
                            {/* Filter-Size */}
                            {/* <div className="facet-filter-associates">
                                <h3 className="title-name">Size</h3>
                                <form className="facet-form" action="#" method="post">
                                    <div className="associate-wrapper">
                                        <input type="checkbox" className="check-box" id="cbs-01" />
                                        <label className="label-text" htmlFor="cbs-01">Male 2XL
                                            <span className="total-fetch-items">(2)</span>
                                        </label>
                                        <input type="checkbox" className="check-box" id="cbs-02" />
                                        <label className="label-text" htmlFor="cbs-02">Male 3XL
                                            <span className="total-fetch-items">(2)</span>
                                        </label>
                                        <input type="checkbox" className="check-box" id="cbs-03" />
                                        <label className="label-text" htmlFor="cbs-03">Kids 4
                                            <span className="total-fetch-items">(0)</span>
                                        </label>
                                        <input type="checkbox" className="check-box" id="cbs-04" />
                                        <label className="label-text" htmlFor="cbs-04">Kids 6
                                            <span className="total-fetch-items">(0)</span>
                                        </label>
                                        <input type="checkbox" className="check-box" id="cbs-05" />
                                        <label className="label-text" htmlFor="cbs-05">Kids 8
                                            <span className="total-fetch-items">(0)</span>
                                        </label>
                                        <input type="checkbox" className="check-box" id="cbs-06" />
                                        <label className="label-text" htmlFor="cbs-06">Kids 10
                                            <span className="total-fetch-items">(2)</span>
                                        </label>
                                        <input type="checkbox" className="check-box" id="cbs-07" />
                                        <label className="label-text" htmlFor="cbs-07">Kids 12
                                            <span className="total-fetch-items">(2)</span>
                                        </label>
                                        <input type="checkbox" className="check-box" id="cbs-08" />
                                        <label className="label-text" htmlFor="cbs-08">Female Small
                                            <span className="total-fetch-items">(0)</span>
                                        </label>
                                        <input type="checkbox" className="check-box" id="cbs-09" />
                                        <label className="label-text" htmlFor="cbs-09">Male Small
                                            <span className="total-fetch-items">(0)</span>
                                        </label>
                                        <input type="checkbox" className="check-box" id="cbs-10" />
                                        <label className="label-text" htmlFor="cbs-10">Female Medium
                                            <span className="total-fetch-items">(0)</span>
                                        </label>
                                        <input type="checkbox" className="check-box" id="cbs-11" />
                                        <label className="label-text" htmlFor="cbs-11">Male Medium
                                            <span className="total-fetch-items">(0)</span>
                                        </label>
                                        <input type="checkbox" className="check-box" id="cbs-12" />
                                        <label className="label-text" htmlFor="cbs-12">Female Large
                                            <span className="total-fetch-items">(0)</span>
                                        </label>
                                        <input type="checkbox" className="check-box" id="cbs-13" />
                                        <label className="label-text" htmlFor="cbs-13">Male Large
                                            <span className="total-fetch-items">(0)</span>
                                        </label>
                                        <input type="checkbox" className="check-box" id="cbs-14" />
                                        <label className="label-text" htmlFor="cbs-14">Female XL
                                            <span className="total-fetch-items">(0)</span>
                                        </label>
                                        <input type="checkbox" className="check-box" id="cbs-15" />
                                        <label className="label-text" htmlFor="cbs-15">Male XL
                                            <span className="total-fetch-items">(0)</span>
                                        </label>
                                    </div>
                                </form>
                            </div> */}
                            {/* Filter-Size */}
                            {/* Filter-Color */}
                            {/* <div className="facet-filter-associates">
                                <h3 className="title-name">Color</h3>
                                <form className="facet-form" action="#" method="post">
                                    <div className="associate-wrapper">
                                        <input type="checkbox" className="check-box" id="cbs-16" />
                                        <label className="label-text" htmlFor="cbs-16">Heather Grey
                                            <span className="total-fetch-items">(1)</span>
                                        </label>
                                        <input type="checkbox" className="check-box" id="cbs-17" />
                                        <label className="label-text" htmlFor="cbs-17">Black
                                            <span className="total-fetch-items">(1)</span>
                                        </label>
                                        <input type="checkbox" className="check-box" id="cbs-18" />
                                        <label className="label-text" htmlFor="cbs-18">White
                                            <span className="total-fetch-items">(3)</span>
                                        </label>
                                        <input type="checkbox" className="check-box" id="cbs-19" />
                                        <label className="label-text" htmlFor="cbs-19">Mischka Plain
                                            <span className="total-fetch-items">(1)</span>
                                        </label>
                                        <input type="checkbox" className="check-box" id="cbs-20" />
                                        <label className="label-text" htmlFor="cbs-20">Black Bean
                                            <span className="total-fetch-items">(1)</span>
                                        </label>
                                    </div>
                                </form>
                            </div> */}
                            {/* Filter-Color /- */}
                            {/* Filter-Brand */}
                            {/* <div className="facet-filter-associates">
                                <h3 className="title-name">Brand</h3>
                                <form className="facet-form" action="#" method="post">
                                    <div className="associate-wrapper">
                                        <input type="checkbox" className="check-box" id="cbs-21" />
                                        <label className="label-text" htmlFor="cbs-21">Calvin Klein
                                            <span className="total-fetch-items">(0)</span>
                                        </label>
                                        <input type="checkbox" className="check-box" id="cbs-22" />
                                        <label className="label-text" htmlFor="cbs-22">Diesel
                                            <span className="total-fetch-items">(0)</span>
                                        </label>
                                        <input type="checkbox" className="check-box" id="cbs-23" />
                                        <label className="label-text" htmlFor="cbs-23">Polo
                                            <span className="total-fetch-items">(0)</span>
                                        </label>
                                        <input type="checkbox" className="check-box" id="cbs-24" />
                                        <label className="label-text" htmlFor="cbs-24">Tommy Hilfiger
                                            <span className="total-fetch-items">(0)</span>
                                        </label>
                                    </div>
                                </form>
                            </div> */}
                            {/* Filter-Brand /- */}
                            {/* Filter-Price */}
                            {/* <div className="facet-filter-by-price">
                                <h3 className="title-name">Price</h3>
                                <form className="facet-form" action="#" method="post">
                                    <div className="amount-result clearfix">
                                        <div className="price-from">$0</div>
                                        <div className="price-to">$3000</div>
                                    </div>
                                    <div className="price-filter" />
                                    <div className="price-slider-range" data-min={0} data-max={5000} data-default-low={0} data-default-high={3000} data-currency="$" />
                                    <button type="submit" className="button button-primary">Filter</button>
                                </form>
                            </div> */}
                            {/* Filter-Price /- */}
                            {/* Filter-Free-Shipping */}
                            {/* <div className="facet-filter-by-shipping">
                                <h3 className="title-name">Shipping</h3>
                                <form className="facet-form" action="#" method="post">
                                    <input type="checkbox" className="check-box" id="cb-free-ship" />
                                    <label className="label-text" htmlFor="cb-free-ship">Free Shipping</label>
                                </form>
                            </div> */}
                            {/* Filter-Free-Shipping /- */}
                            {/* Filter-Rating */}
                            {/* <div className="facet-filter-by-rating">
                                <h3 className="title-name">Rating</h3>
                                <div className="facet-form">
                                    <div className="facet-link">
                                        <div className="item-stars">
                                            <div className="star">
                                                <span style={{ width: 76 }} />
                                            </div>
                                        </div>
                                        <span className="total-fetch-items">(0)</span>
                                    </div>
                                    <div className="facet-link">
                                        <div className="item-stars">
                                            <div className="star">
                                                <span style={{ width: 60 }} />
                                            </div>
                                        </div>
                                        <span className="total-fetch-items">&amp; Up (5)</span>
                                    </div>
                                    <div className="facet-link">
                                        <div className="item-stars">
                                            <div className="star">
                                                <span style={{ width: 45 }} />
                                            </div>
                                        </div>
                                        <span className="total-fetch-items">&amp; Up (0)</span>
                                    </div>
                                    <div className="facet-link">
                                        <div className="item-stars">
                                            <div className="star">
                                                <span style={{ width: 30 }} />
                                            </div>
                                        </div>
                                        <span className="total-fetch-items">&amp; Up (0)</span>
                                    </div>
                                    <div className="facet-link">
                                        <div className="item-stars">
                                            <div className="star">
                                                <span style={{ width: 15 }} />
                                            </div>
                                        </div>
                                        <span className="total-fetch-items">&amp; Up (0)</span>
                                    </div>
                                </div>
                            </div> */}
                            {/* Filter-Rating */}
                            {/* Filters /- */}
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
                            </div>
                            {/* Row-of-Product-Container /- */}
                        </div>
                        {/* Shop-Right-Wrapper /- */}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ShopS;