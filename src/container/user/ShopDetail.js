import React from 'react';

function ShopDetail(props) {
    return (
        <div>
            <div className="page-style-a">
                <div className="container">
                    <div className="page-intro">
                        <h2>Detail</h2>
                        <ul className="bread-crumb">
                            <li className="has-separator">
                                <i className="ion ion-md-home" />
                                <a href="home.html">Home</a>
                            </li>
                            <li className="is-marked">
                                <a href="single-product.html">Detail</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Page Introduction Wrapper /- */}
            {/* Single-Product-Full-Width-Page */}
            <div className="page-detail u-s-p-t-80">
                <div className="container">
                    {/* Product-Detail */}
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            {/* Product-zoom-area */}
                            <div className="zoom-area">
                                <img id="zoom-pro" className="img-fluid" src="images/product/product-1@4x-1.jpg" data-zoom-image="images/product/product-1@4x-1.jpg" alt="Zoom Image" />
                                <div id="gallery" className="u-s-m-t-10">
                                    <a className="active" data-image="images/product/product-1@4x-1.jpg" data-zoom-image="images/product/product-1@4x-1.jpg">
                                        <img src="images/product/product-1@4x-1.jpg" alt="Product" />
                                    </a>
                                    <a data-image="images/product/product-1@4x-2.jpg" data-zoom-image="images/product/product-1@4x-2.jpg">
                                        <img src="images/product/product-1@4x-2.jpg" alt="Product" />
                                    </a>
                                    <a data-image="images/product/product-1@4x-3.jpg" data-zoom-image="images/product/product-1@4x-3.jpg">
                                        <img src="images/product/product-1@4x-3.jpg" alt="Product" />
                                    </a>
                                    <a data-image="images/product/product-1@4x-4.jpg" data-zoom-image="images/product/product-1@4x-4.jpg">
                                        <img src="images/product/product-1@4x-4.jpg" alt="Product" />
                                    </a>
                                    <a data-image="images/product/product-1@4x-5.jpg" data-zoom-image="images/product/product-1@4x-5.jpg">
                                        <img src="images/product/product-1@4x-5.jpg" alt="Product" />
                                    </a>
                                    <a data-image="images/product/product-1@4x-6.jpg" data-zoom-image="images/product/product-1@4x-6.jpg">
                                        <img src="images/product/product-1@4x-6.jpg" alt="Product" />
                                    </a>
                                </div>
                            </div>
                            {/* Product-zoom-area /- */}
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            {/* Product-details */}
                            <div className="all-information-wrapper">
                                <div className="section-1-title-breadcrumb-rating">
                                    <div className="product-title">
                                        <h1>
                                            <a href="single-product.html">Casual Hoodie Full Cotton</a>
                                        </h1>
                                    </div>
                                    <ul className="bread-crumb">
                                        <li className="has-separator">
                                            <a href="home.html">Home</a>
                                        </li>
                                        <li className="has-separator">
                                            <a href="shop-v1-root-category.html">Men's Clothing</a>
                                        </li>
                                        <li className="has-separator">
                                            <a href="shop-v2-sub-category.html">Tops</a>
                                        </li>
                                        <li className="is-marked">
                                            <a href="shop-v3-sub-sub-category.html">Hoodies</a>
                                        </li>
                                    </ul>
                                    <div className="product-rating">
                                        <div className="star" title="4.5 out of 5 - based on 23 Reviews">
                                            <span style={{ width: 67 }} />
                                        </div>
                                        <span>(23)</span>
                                    </div>
                                </div>
                                <div className="section-2-short-description u-s-p-y-14">
                                    <h6 className="information-heading u-s-m-b-8">Description:</h6>
                                    <p>This hoodie is full cotton. It includes a muff sewn onto the lower front, and (usually) a drawstring to adjust the hood opening. Throughout the U.S., it is common for middle-school, high-school, and college students to wear this sweatshirts—with or without hoods—that display their respective school names or mascots across the chest, either as part of a uniform or personal preference.
                                    </p>
                                </div>
                                <div className="section-3-price-original-discount u-s-p-y-14">
                                    <div className="price">
                                        <h4>$55.00</h4>
                                    </div>
                                    <div className="original-price">
                                        <span>Original Price:</span>
                                        <span>$60.00</span>
                                    </div>
                                    <div className="discount-price">
                                        <span>Discount:</span>
                                        <span>8%</span>
                                    </div>
                                    <div className="total-save">
                                        <span>Save:</span>
                                        <span>$5</span>
                                    </div>
                                </div>
                                <div className="section-4-sku-information u-s-p-y-14">
                                    <h6 className="information-heading u-s-m-b-8">Sku Information:</h6>
                                    <div className="availability">
                                        <span>Availability:</span>
                                        <span>In Stock</span>
                                    </div>
                                    <div className="left">
                                        <span>Only:</span>
                                        <span>50 left</span>
                                    </div>
                                </div>
                                <div className="section-5-product-variants u-s-p-y-14">
                                    <h6 className="information-heading u-s-m-b-8">Product Variants:</h6>
                                    <div className="color u-s-m-b-11">
                                        <span>Available Color:</span>
                                        <div className="color-variant select-box-wrapper">
                                            <select className="select-box product-color">
                                                <option value={1}>Heather Grey</option>
                                                <option value={3}>Black</option>
                                                <option value={5}>White</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="sizes u-s-m-b-11">
                                        <span>Available Size:</span>
                                        <div className="size-variant select-box-wrapper">
                                            <select className="select-box product-size">
                                                <option value>Male 2XL</option>
                                                <option value>Male 3XL</option>
                                                <option value>Kids 4</option>
                                                <option value>Kids 6</option>
                                                <option value>Kids 8</option>
                                                <option value>Kids 10</option>
                                                <option value>Kids 12</option>
                                                <option value>Female Small</option>
                                                <option value>Male Small</option>
                                                <option value>Female Medium</option>
                                                <option value>Male Medium</option>
                                                <option value>Female Large</option>
                                                <option value>Male Large</option>
                                                <option value>Female XL</option>
                                                <option value>Male XL</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="section-6-social-media-quantity-actions u-s-p-y-14">
                                    <form action="#" className="post-form">
                                        <div className="quick-social-media-wrapper u-s-m-b-22">
                                            <span>Share:</span>
                                            <ul className="social-media-list">
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-facebook-f" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-twitter" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-google-plus-g" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fas fa-rss" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-pinterest" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="quantity-wrapper u-s-m-b-22">
                                            <span>Quantity:</span>
                                            <div className="quantity">
                                                <input type="text" className="quantity-text-field" defaultValue={1} />
                                                <a className="plus-a" data-max={1000}>+</a>
                                                <a className="minus-a" data-min={1}>-</a>
                                            </div>
                                        </div>
                                        <div>
                                            <button className="button button-outline-secondary" type="submit">Add to cart</button>
                                            <button className="button button-outline-secondary far fa-heart u-s-m-l-6" />
                                            <button className="button button-outline-secondary far fa-envelope u-s-m-l-6" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* Product-details /- */}
                        </div>
                    </div>
                    {/* Product-Detail /- */}
                    {/* Detail-Tabs */}
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="detail-tabs-wrapper u-s-p-t-80">
                                <div className="detail-nav-wrapper u-s-m-b-30">
                                    <ul className="nav single-product-nav justify-content-center">
                                        <li className="nav-item">
                                            <a className="nav-link active" data-toggle="tab" href="#description">Description</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="tab" href="#specification">Specifications</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="tab" href="#review">Reviews (15)</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-content">
                                    {/* Description-Tab */}
                                    <div className="tab-pane fade active show" id="description">
                                        <div className="description-whole-container">
                                            <p className="desc-p u-s-m-b-26">This hoodie is full cotton. It includes a muff sewn onto the lower front, and (usually) a drawstring to adjust the hood opening. Throughout the U.S., it is common for middle-school, high-school, and college students to wear this sweatshirts—with or without hoods—that display their respective school names or mascots across the chest, either as part of a uniform or personal preference.
                                            </p>
                                            <img className="desc-img img-fluid u-s-m-b-26" src="images/product/product-1.jpg" alt="Product" />
                                            <iframe className="desc-iframe u-s-m-b-45" width={710} height={400} src="https://www.youtube.com/embed/C8vA0UwLS70?rel=0" allowFullScreen />
                                        </div>
                                    </div>
                                    {/* Description-Tab /- */}
                                    {/* Specifications-Tab */}
                                    <div className="tab-pane fade" id="specification">
                                        <div className="specification-whole-container">
                                            <div className="spec-ul u-s-m-b-50">
                                                <h4 className="spec-heading">Key Features</h4>
                                                <ul>
                                                    <li>Heather Grey</li>
                                                    <li>Black</li>
                                                    <li>White</li>
                                                </ul>
                                            </div>
                                            <div className="u-s-m-b-50">
                                                <h4 className="spec-heading">What's in the Box?</h4>
                                                <h3 className="spec-answer">1 x hoodie</h3>
                                            </div>
                                            <div className="spec-table u-s-m-b-50">
                                                <h4 className="spec-heading">General Information</h4>
                                                <table>
                                                    <tbody><tr>
                                                        <td>Sku</td>
                                                        <td>AY536FA08JT86NAFAMZ</td>
                                                    </tr>
                                                    </tbody></table>
                                            </div>
                                            <div className="spec-table u-s-m-b-50">
                                                <h4 className="spec-heading">Product Information</h4>
                                                <table>
                                                    <tbody><tr>
                                                        <td>Main Material</td>
                                                        <td>Cotton</td>
                                                    </tr>
                                                        <tr>
                                                            <td>Color</td>
                                                            <td>Heather Grey, Black, White</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Sleeves</td>
                                                            <td>Long Sleeve</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Top Fit</td>
                                                            <td>Regular</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Print</td>
                                                            <td>Not Printed</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Neck</td>
                                                            <td>Round Neck</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Pieces Count</td>
                                                            <td>1 piece</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Occasion</td>
                                                            <td>Casual</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Shipping Weight (kg)</td>
                                                            <td>0.5</td>
                                                        </tr>
                                                    </tbody></table>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Specifications-Tab /- */}
                                    {/* Reviews-Tab */}
                                    <div className="tab-pane fade" id="review">
                                        <div className="review-whole-container">
                                            <div className="row r-1 u-s-m-b-26 u-s-p-b-22">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="total-score-wrapper">
                                                        <h6 className="review-h6">Average Rating</h6>
                                                        <div className="circle-wrapper">
                                                            <h1>4.5</h1>
                                                        </div>
                                                        <h6 className="review-h6">Based on 23 Reviews</h6>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="total-star-meter">
                                                        <div className="star-wrapper">
                                                            <span>5 Stars</span>
                                                            <div className="star">
                                                                <span style={{ width: 0 }} />
                                                            </div>
                                                            <span>(0)</span>
                                                        </div>
                                                        <div className="star-wrapper">
                                                            <span>4 Stars</span>
                                                            <div className="star">
                                                                <span style={{ width: 67 }} />
                                                            </div>
                                                            <span>(23)</span>
                                                        </div>
                                                        <div className="star-wrapper">
                                                            <span>3 Stars</span>
                                                            <div className="star">
                                                                <span style={{ width: 0 }} />
                                                            </div>
                                                            <span>(0)</span>
                                                        </div>
                                                        <div className="star-wrapper">
                                                            <span>2 Stars</span>
                                                            <div className="star">
                                                                <span style={{ width: 0 }} />
                                                            </div>
                                                            <span>(0)</span>
                                                        </div>
                                                        <div className="star-wrapper">
                                                            <span>1 Star</span>
                                                            <div className="star">
                                                                <span style={{ width: 0 }} />
                                                            </div>
                                                            <span>(0)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row r-2 u-s-m-b-26 u-s-p-b-22">
                                                <div className="col-lg-12">
                                                    <div className="your-rating-wrapper">
                                                        <h6 className="review-h6">Your Review is matter.</h6>
                                                        <h6 className="review-h6">Have you used this product before?</h6>
                                                        <div className="star-wrapper u-s-m-b-8">
                                                            <div className="star">
                                                                <span id="your-stars" style={{ width: 0 }} />
                                                            </div>
                                                            <label htmlFor="your-rating-value" />
                                                            <input id="your-rating-value" type="text" className="text-field" placeholder={0.0} />
                                                            <span id="star-comment" />
                                                        </div>
                                                        <form>
                                                            <label htmlFor="your-name">Name
                                                                <span className="astk"> *</span>
                                                            </label>
                                                            <input id="your-name" type="text" className="text-field" placeholder="Your Name" />
                                                            <label htmlFor="your-email">Email
                                                                <span className="astk"> *</span>
                                                            </label>
                                                            <input id="your-email" type="text" className="text-field" placeholder="Your Email" />
                                                            <label htmlFor="review-title">Review Title
                                                                <span className="astk"> *</span>
                                                            </label>
                                                            <input id="review-title" type="text" className="text-field" placeholder="Review Title" />
                                                            <label htmlFor="review-text-area">Review
                                                                <span className="astk"> *</span>
                                                            </label>
                                                            <textarea className="text-area u-s-m-b-18" id="review-text-area" placeholder="Review" defaultValue={""} />
                                                            <button className="button button-outline-secondary">Submit Review</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Get-Reviews */}
                                            <div className="get-reviews u-s-p-b-22">
                                                {/* Review-Options */}
                                                <div className="review-options u-s-m-b-16">
                                                    <div className="review-option-heading">
                                                        <h6>Reviews
                                                            <span> (15) </span>
                                                        </h6>
                                                    </div>
                                                    <div className="review-option-box">
                                                        <div className="select-box-wrapper">
                                                            <label className="sr-only" htmlFor="review-sort">Review Sorter</label>
                                                            <select className="select-box" id="review-sort">
                                                                <option value>Sort by: Best Rating</option>
                                                                <option value>Sort by: Worst Rating</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Review-Options /- */}
                                                {/* All-Reviews */}
                                                <div className="reviewers">
                                                    <div className="review-data">
                                                        <div className="reviewer-name-and-date">
                                                            <h6 className="reviewer-name">John</h6>
                                                            <h6 className="review-posted-date">10 May 2018</h6>
                                                        </div>
                                                        <div className="reviewer-stars-title-body">
                                                            <div className="reviewer-stars">
                                                                <div className="star">
                                                                    <span style={{ width: 67 }} />
                                                                </div>
                                                                <span className="review-title">Good!</span>
                                                            </div>
                                                            <p className="review-body">
                                                                Good Quality...!
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="review-data">
                                                        <div className="reviewer-name-and-date">
                                                            <h6 className="reviewer-name">Doe</h6>
                                                            <h6 className="review-posted-date">10 June 2018</h6>
                                                        </div>
                                                        <div className="reviewer-stars-title-body">
                                                            <div className="reviewer-stars">
                                                                <div className="star">
                                                                    <span style={{ width: 67 }} />
                                                                </div>
                                                                <span className="review-title">Well done!</span>
                                                            </div>
                                                            <p className="review-body">
                                                                Cotton is good.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="review-data">
                                                        <div className="reviewer-name-and-date">
                                                            <h6 className="reviewer-name">Tim</h6>
                                                            <h6 className="review-posted-date">10 July 2018</h6>
                                                        </div>
                                                        <div className="reviewer-stars-title-body">
                                                            <div className="reviewer-stars">
                                                                <div className="star">
                                                                    <span style={{ width: 67 }} />
                                                                </div>
                                                                <span className="review-title">Well done!</span>
                                                            </div>
                                                            <p className="review-body">
                                                                Excellent condition
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="review-data">
                                                        <div className="reviewer-name-and-date">
                                                            <h6 className="reviewer-name">Johnny</h6>
                                                            <h6 className="review-posted-date">10 March 2018</h6>
                                                        </div>
                                                        <div className="reviewer-stars-title-body">
                                                            <div className="reviewer-stars">
                                                                <div className="star">
                                                                    <span style={{ width: 67 }} />
                                                                </div>
                                                                <span className="review-title">Bright!</span>
                                                            </div>
                                                            <p className="review-body">
                                                                Cotton
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="review-data">
                                                        <div className="reviewer-name-and-date">
                                                            <h6 className="reviewer-name">Alexia C. Marshall</h6>
                                                            <h6 className="review-posted-date">12 May 2018</h6>
                                                        </div>
                                                        <div className="reviewer-stars-title-body">
                                                            <div className="reviewer-stars">
                                                                <div className="star">
                                                                    <span style={{ width: 67 }} />
                                                                </div>
                                                                <span className="review-title">Well done!</span>
                                                            </div>
                                                            <p className="review-body">
                                                                Good polyester Cotton
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* All-Reviews /- */}
                                                {/* Pagination-Review */}
                                                <div className="pagination-review-area">
                                                    <div className="pagination-review-number">
                                                        <ul>
                                                            <li style={{ display: 'none' }}>
                                                                <a href="single-product.html" title="Previous">
                                                                    <i className="fas fa-angle-left" />
                                                                </a>
                                                            </li>
                                                            <li className="active">
                                                                <a href="single-product.html">1</a>
                                                            </li>
                                                            <li>
                                                                <a href="single-product.html">2</a>
                                                            </li>
                                                            <li>
                                                                <a href="single-product.html">3</a>
                                                            </li>
                                                            <li>
                                                                <a href="single-product.html">...</a>
                                                            </li>
                                                            <li>
                                                                <a href="single-product.html">10</a>
                                                            </li>
                                                            <li>
                                                                <a href="single-product.html" title="Next">
                                                                    <i className="fas fa-angle-right" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Pagination-Review /- */}
                                            </div>
                                            {/* Get-Reviews /- */}
                                        </div>
                                    </div>
                                    {/* Reviews-Tab /- */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Detail-Tabs /- */}
                    {/* Different-Product-Section */}
                    <div className="detail-different-product-section u-s-p-t-80">
                        {/* Similar-Products */}
                        <section className="section-maker">
                            <div className="container">
                                <div className="sec-maker-header text-center">
                                    <h3 className="sec-maker-h3">Similar Products</h3>
                                </div>
                                <div className="slider-fouc">
                                    <div className="products-slider owl-carousel" data-item={4}>
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
                                                    <div className="item-stars">
                                                        <div className="star" title="0 out of 5 - based on 0 Reviews">
                                                            <span style={{ width: 0 }} />
                                                        </div>
                                                        <span>(0)</span>
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
                                        <div className="item">
                                            <div className="image-container">
                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                    <img className="img-fluid" src="images/product/product-10.jpg" alt="Product" />
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
                                                        <a href="single-product.html">Fern Green Men's Jacket</a>
                                                    </h6>
                                                    <div className="item-stars">
                                                        <div className="star" title="0 out of 5 - based on 0 Reviews">
                                                            <span style={{ width: 0 }} />
                                                        </div>
                                                        <span>(0)</span>
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
                                            <div className="tag hot">
                                                <span>HOT</span>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="image-container">
                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                    <img className="img-fluid" src="images/product/product-11.jpg" alt="Product" />
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
                                                            <a href="shop-v2-sub-category.html">Sunglasses</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-v3-sub-sub-category.html">Round</a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="item-title">
                                                        <a href="single-product.html">Brown Dark Tan Round Double Bridge Sunglasses</a>
                                                    </h6>
                                                    <div className="item-stars">
                                                        <div className="star" title="0 out of 5 - based on 0 Reviews">
                                                            <span style={{ width: 0 }} />
                                                        </div>
                                                        <span>(0)</span>
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
                                            <div className="tag hot">
                                                <span>HOT</span>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="image-container">
                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                    <img className="img-fluid" src="images/product/product-12.jpg" alt="Product" />
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
                                                            <a href="shop-v2-sub-category.html">Sunglasses</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-v3-sub-sub-category.html">Round</a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="item-title">
                                                        <a href="single-product.html">Black Round Double Bridge Sunglasses</a>
                                                    </h6>
                                                    <div className="item-stars">
                                                        <div className="star" title="0 out of 5 - based on 0 Reviews">
                                                            <span style={{ width: 0 }} />
                                                        </div>
                                                        <span>(0)</span>
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
                                            <div className="tag hot">
                                                <span>HOT</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Similar-Products /- */}
                        {/* Recently-View-Products  */}
                        <section className="section-maker">
                            <div className="container">
                                <div className="sec-maker-header text-center">
                                    <h3 className="sec-maker-h3">Recently View</h3>
                                </div>
                                <div className="slider-fouc">
                                    <div className="products-slider owl-carousel" data-item={4}>
                                        <div className="item">
                                            <div className="image-container">
                                                <a className="item-img-wrapper-link" href="single-product.html">
                                                    <img className="img-fluid" src="images/product/product-9.jpg" alt="Product" />
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
                                                        <a href="single-product.html">Maire Battlefield Jeep Men's Jacket</a>
                                                    </h6>
                                                    <div className="item-stars">
                                                        <div className="star" title="0 out of 5 - based on 0 Reviews">
                                                            <span style={{ width: 0 }} />
                                                        </div>
                                                        <span>(0)</span>
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
                                            <div className="tag hot">
                                                <span>HOT</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Recently-View-Products /- */}
                    </div>
                    {/* Different-Product-Section /- */}
                </div>
            </div>
        </div>

    );
}

export default ShopDetail;