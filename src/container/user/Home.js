import React from 'react';

function Home(props) {
    return (
        <div id="app">
            {/* Main-Slider */}
            <div className="default-height ph-item">
                <div className="slider-main owl-carousel">
                    <div className="bg-image one">
                        <div className="slide-content slide-animation">
                            <h1>Casual Clothing</h1>
                            <h2>lifestyle / clothing / hype</h2>
                        </div>
                    </div>
                    <div className="bg-image two">
                        <div className="slide-content-2 slide-animation">
                            <h2 className="slide-2-h2-a">Hiking</h2>
                            <h2 className="slide-2-h2-b">Collection</h2>
                            <h1>2024</h1>
                        </div>
                    </div>
                    <div className="bg-image three">
                        <div className="slide-content slide-animation">
                            <h1>Tech
                                <span style={{ color: '#333' }}>Deals</span>
                            </h1>
                            <h2 style={{ color: '#333' }}># shopping</h2>
                        </div>
                    </div>
                </div>
            </div>
            {/* Main-Slider /- */}
            {/* Banner-Layer */}
            <div className="banner-layer">
                <div className="container">
                </div>
            </div>
            {/* Banner-Layer /- */}
            {/* Men-Clothing */}
            <section className="section-maker">
                <div className="container">
                    <div className="sec-maker-header text-center">
                        <h3 className="sec-maker-h3">MEN'S CLOTHING</h3>
                        <ul className="nav tab-nav-style-1-a justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#men-latest-products">Latest Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#men-best-selling-products">Best Selling</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#men-top-rating-products">Top Rating</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#men-featured-products">Featured Products</a>
                            </li>
                        </ul>
                    </div>
                    <div className="wrapper-content">
                        <div className="outer-area-tab">
                            <div className="tab-content">
                                <div className="tab-pane active show fade" id="men-latest-products">
                                    <div className="slider-fouc">
                                        <div className="products-slider owl-carousel" data-item={4}>
                                            <div className="item">
                                                <div className="image-container">
                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                        <img className="img-fluid" src="images/product/product-1.jpg" alt="Product" />
                                                    </a>
                                                    <div className="item-action-behaviors">
                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                        </a>
                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to
                                                            Wishlist</a>
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
                                                        <img className="img-fluid" src="images/product/product-2.jpg" alt="Product" />
                                                    </a>
                                                    <div className="item-action-behaviors">
                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                        </a>
                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to
                                                            Wishlist</a>
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
                                            </div>
                                            <div className="item">
                                                <div className="image-container">
                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                        <img className="img-fluid" src="images/product/product-3.jpg" alt="Product" />
                                                    </a>
                                                    <div className="item-action-behaviors">
                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                        </a>
                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to
                                                            Wishlist</a>
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
                                            </div>
                                            <div className="item">
                                                <div className="image-container">
                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                        <img className="img-fluid" src="images/product/product-4.jpg" alt="Product" />
                                                    </a>
                                                    <div className="item-action-behaviors">
                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                        </a>
                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to
                                                            Wishlist</a>
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
                                                        <img className="img-fluid" src="images/product/product-5.jpg" alt="Product" />
                                                    </a>
                                                    <div className="item-action-behaviors">
                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                        </a>
                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to
                                                            Wishlist</a>
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
                                                <div className="tag sale">
                                                    <span>SALE</span>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="image-container">
                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                        <img className="img-fluid" src="images/product/product-6.jpg" alt="Product" />
                                                    </a>
                                                    <div className="item-action-behaviors">
                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                        </a>
                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to
                                                            Wishlist</a>
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
                                            </div>
                                            <div className="item">
                                                <div className="image-container">
                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                        <img className="img-fluid" src="images/product/product-7.jpg" alt="Product" />
                                                    </a>
                                                    <div className="item-action-behaviors">
                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                        </a>
                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to
                                                            Wishlist</a>
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
                                            </div>
                                            <div className="item">
                                                <div className="image-container">
                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                        <img className="img-fluid" src="images/product/product-8.jpg" alt="Product" />
                                                    </a>
                                                    <div className="item-action-behaviors">
                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                        </a>
                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to
                                                            Wishlist</a>
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
                                                            <a href="single-product.html">Zambezi Carved Leather Business
                                                                Casual Shoes
                                                            </a>
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
                                                <div className="tag discount">
                                                    <span>-15%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="men-best-selling-products">
                                    {/* Product Not Found */}
                                    <div className="product-not-found">
                                        <div className="not-found">
                                            <h2>SORRY!</h2>
                                            <h6>There is not any product in specific catalogue.</h6>
                                        </div>
                                    </div>
                                    {/* Product Not Found /- */}
                                </div>
                                <div className="tab-pane fade" id="men-top-rating-products">
                                    <div className="slider-fouc">
                                        <div className="products-slider owl-carousel" data-item={4}>
                                            <div className="item">
                                                <div className="image-container">
                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                        <img className="img-fluid" src="images/product/product-5.jpg" alt="Product" />
                                                    </a>
                                                    <div className="item-action-behaviors">
                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                        </a>
                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to
                                                            Wishlist</a>
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
                                            <div className="item">
                                                <div className="image-container">
                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                        <img className="img-fluid" src="images/product/product-6.jpg" alt="Product" />
                                                    </a>
                                                    <div className="item-action-behaviors">
                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                        </a>
                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to
                                                            Wishlist</a>
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
                                            <div className="item">
                                                <div className="image-container">
                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                        <img className="img-fluid" src="images/product/product-7.jpg" alt="Product" />
                                                    </a>
                                                    <div className="item-action-behaviors">
                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                        </a>
                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to
                                                            Wishlist</a>
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
                                                            <a href="single-product.html">Blue Zodiac Boxes Reg Tie</a>
                                                        </h6>
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
                                            <div className="item">
                                                <div className="image-container">
                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                        <img className="img-fluid" src="images/product/product-8.jpg" alt="Product" />
                                                    </a>
                                                    <div className="item-action-behaviors">
                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                        </a>
                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to
                                                            Wishlist</a>
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
                                                            <a href="single-product.html">Zambezi Carved Leather Business
                                                                Casual Shoes
                                                            </a>
                                                        </h6>
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
                                </div>
                                <div className="tab-pane fade" id="men-featured-products">
                                    {/* Product Not Found */}
                                    <div className="product-not-found">
                                        <div className="not-found">
                                            <h2>SORRY!</h2>
                                            <h6>There is not any product in specific catalogue.</h6>
                                        </div>
                                    </div>
                                    {/* Product Not Found /- */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Men-Clothing-Timing-Section */}
            <section className="section-maker">
                <div className="container">
                    <div className="sec-maker-header text-center">
                        <span className="sec-maker-span-text">Men's Clothing</span>
                        <h3 className="sec-maker-h3 u-s-m-b-22">Hot Deals</h3>
                        <span className="sec-maker-span-text">Ends in</span>
                        {/* Timing-Box */}
                        <div className="section-timing-wrapper dynamic">
                            <span className="fictitious-seconds" style={{ display: 'none' }}>18000</span>
                            <div className="section-box-wrapper box-days">
                                <div className="section-box">
                                    <span className="section-key">120</span>
                                    <span className="section-value">Days</span>
                                </div>
                            </div>
                            <div className="section-box-wrapper box-hrs">
                                <div className="section-box">
                                    <span className="section-key">54</span>
                                    <span className="section-value">HRS</span>
                                </div>
                            </div>
                            <div className="section-box-wrapper box-mins">
                                <div className="section-box">
                                    <span className="section-key">3</span>
                                    <span className="section-value">MINS</span>
                                </div>
                            </div>
                            <div className="section-box-wrapper box-secs">
                                <div className="section-box">
                                    <span className="section-key">32</span>
                                    <span className="section-value">SEC</span>
                                </div>
                            </div>
                        </div>
                        {/* Timing-Box /- */}
                    </div>
                    {/* Carousel */}
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
                    {/* Carousel /- */}
                </div>
            </section>
            {/* Men-Clothing-Timing-Section /- */}
            {/* Banner-Image & View-more */}
            <div className="banner-image-view-more">
                <div className="container">
                    <div className="image-banner u-s-m-y-40">
                        <a href="shop-v1-root-category.html" className="mx-auto banner-hover effect-dark-opacity">
                            <img className="img-fluid" src="images/banners/ban-men.jpg" alt="Men Banner" />
                        </a>
                    </div>
                    <div className="redirect-link-wrapper text-center u-s-p-t-25 u-s-p-b-80">
                        <a className="redirect-link" href="store-directory.html">
                            <span>View more on this category</span>
                        </a>
                    </div>
                </div>
            </div>
            {/* Banner-Image & View-more /- */}
            {/* Men-Clothing /- */}
            {/* Women-Clothing */}
            <section className="section-maker">
                <div className="container">
                    <div className="sec-maker-header text-center">
                        <h3 className="sec-maker-h3">WOMEN'S CLOTHING</h3>
                        <ul className="nav tab-nav-style-1-a justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#women-latest-products">Latest
                                    Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#women-best-selling-products">Best Selling</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#women-top-rating-products">Top Rating</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#women-featured-products">Featured Products</a>
                            </li>
                        </ul>
                    </div>
                    <div className="wrapper-content">
                        <div className="outer-area-tab">
                            <div className="tab-content">
                                <div className="tab-pane active show fade" id="women-latest-products">
                                    <div className="slider-fouc">
                                        <div className="products-slider owl-carousel" data-item={4}>
                                            <div className="item">
                                                <div className="image-container">
                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                        <img className="img-fluid" src="images/product/product-13.jpg" alt="Product" />
                                                    </a>
                                                    <div className="item-action-behaviors">
                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                        </a>
                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to
                                                            Wishlist</a>
                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                    </div>
                                                </div>
                                                <div className="item-content">
                                                    <div className="what-product-is">
                                                        <ul className="bread-crumb">
                                                            <li className="has-separator">
                                                                <a href="shop-v1-root-category.html">Women's</a>
                                                            </li>
                                                            <li className="has-separator">
                                                                <a href="shop-v2-sub-category.html">Tops</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-v3-sub-sub-category.html">Dresses</a>
                                                            </li>
                                                        </ul>
                                                        <h6 className="item-title">
                                                            <a href="single-product.html">White Solitude Dress with mid heel
                                                                &amp; Bag
                                                            </a>
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
                                                        <img className="img-fluid" src="images/product/product-14.jpg" alt="Product" />
                                                    </a>
                                                    <div className="item-action-behaviors">
                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                        </a>
                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to
                                                            Wishlist</a>
                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                    </div>
                                                </div>
                                                <div className="item-content">
                                                    <div className="what-product-is">
                                                        <ul className="bread-crumb">
                                                            <li className="has-separator">
                                                                <a href="shop-v1-root-category.html">Women's</a>
                                                            </li>
                                                            <li className="has-separator">
                                                                <a href="shop-v2-sub-category.html">Tops</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-v3-sub-sub-category.html">Dresses</a>
                                                            </li>
                                                        </ul>
                                                        <h6 className="item-title">
                                                            <a href="single-product.html">Black Rock Dress with High
                                                                Jewelery Necklace
                                                            </a>
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
                                            </div>
                                            <div className="item">
                                                <div className="image-container">
                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                        <img className="img-fluid" src="images/product/product-15.jpg" alt="Product" />
                                                    </a>
                                                    <div className="item-action-behaviors">
                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                        </a>
                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to
                                                            Wishlist</a>
                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                    </div>
                                                </div>
                                                <div className="item-content">
                                                    <div className="what-product-is">
                                                        <ul className="bread-crumb">
                                                            <li className="has-separator">
                                                                <a href="shop-v1-root-category.html">Women's</a>
                                                            </li>
                                                            <li className="has-separator">
                                                                <a href="shop-v2-sub-category.html">Tops</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-v3-sub-sub-category.html">Dresses</a>
                                                            </li>
                                                        </ul>
                                                        <h6 className="item-title">
                                                            <a href="single-product.html">Haiti Full Dress with Boots &amp;
                                                                Jacket</a>
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
                                            </div>
                                            <div className="item">
                                                <div className="image-container">
                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                        <img className="img-fluid" src="images/product/product-16.jpg" alt="Product" />
                                                    </a>
                                                    <div className="item-action-behaviors">
                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                        </a>
                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to
                                                            Wishlist</a>
                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                    </div>
                                                </div>
                                                <div className="item-content">
                                                    <div className="what-product-is">
                                                        <ul className="bread-crumb">
                                                            <li className="has-separator">
                                                                <a href="shop-v1-root-category.html">Women's</a>
                                                            </li>
                                                            <li className="has-separator">
                                                                <a href="shop-v2-sub-category.html">Tops</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-v3-sub-sub-category.html">Dresses</a>
                                                            </li>
                                                        </ul>
                                                        <h6 className="item-title">
                                                            <a href="single-product.html">Black &amp; White Wrap Dress with High
                                                                Jewelery Necklace</a>
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
                                                        <img className="img-fluid" src="images/product/product-17.jpg" alt="Product" />
                                                    </a>
                                                    <div className="item-action-behaviors">
                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                        </a>
                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to
                                                            Wishlist</a>
                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                    </div>
                                                </div>
                                                <div className="item-content">
                                                    <div className="what-product-is">
                                                        <ul className="bread-crumb">
                                                            <li className="has-separator">
                                                                <a href="shop-v1-root-category.html">Women's</a>
                                                            </li>
                                                            <li className="has-separator">
                                                                <a href="shop-v2-sub-category.html">Tops</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-v3-sub-sub-category.html">Dresses</a>
                                                            </li>
                                                        </ul>
                                                        <h6 className="item-title">
                                                            <a href="single-product.html">Grey Nickel Special Occasion
                                                                Dress</a>
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
                                                <div className="tag sale">
                                                    <span>SALE</span>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="image-container">
                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                        <img className="img-fluid" src="images/product/product-18.jpg" alt="Product" />
                                                    </a>
                                                    <div className="item-action-behaviors">
                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                        </a>
                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to
                                                            Wishlist</a>
                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                    </div>
                                                </div>
                                                <div className="item-content">
                                                    <div className="what-product-is">
                                                        <ul className="bread-crumb">
                                                            <li className="has-separator">
                                                                <a href="shop-v1-root-category.html">Women's</a>
                                                            </li>
                                                            <li className="has-separator">
                                                                <a href="shop-v2-sub-category.html">Tops</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-v3-sub-sub-category.html">Dresses</a>
                                                            </li>
                                                        </ul>
                                                        <h6 className="item-title">
                                                            <a href="single-product.html">Red Carmine Winter Special
                                                                Occasion Dress
                                                            </a>
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
                                            </div>
                                            <div className="item">
                                                <div className="image-container">
                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                        <img className="img-fluid" src="images/product/product-19.jpg" alt="Product" />
                                                    </a>
                                                    <div className="item-action-behaviors">
                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                        </a>
                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to
                                                            Wishlist</a>
                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                    </div>
                                                </div>
                                                <div className="item-content">
                                                    <div className="what-product-is">
                                                        <ul className="bread-crumb">
                                                            <li className="has-separator">
                                                                <a href="shop-v1-root-category.html">Women's</a>
                                                            </li>
                                                            <li className="has-separator">
                                                                <a href="shop-v2-sub-category.html">Bottoms</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-v3-sub-sub-category.html">Shoes</a>
                                                            </li>
                                                        </ul>
                                                        <h6 className="item-title">
                                                            <a href="single-product.html">Wax Flower with Corn Silk Heel
                                                            </a>
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
                                            </div>
                                            <div className="item">
                                                <div className="image-container">
                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                        <img className="img-fluid" src="images/product/product-20.jpg" alt="Product" />
                                                    </a>
                                                    <div className="item-action-behaviors">
                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                        </a>
                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to
                                                            Wishlist</a>
                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                    </div>
                                                </div>
                                                <div className="item-content">
                                                    <div className="what-product-is">
                                                        <ul className="bread-crumb">
                                                            <li className="has-separator">
                                                                <a href="shop-v1-root-category.html">Women's</a>
                                                            </li>
                                                            <li className="has-separator">
                                                                <a href="shop-v2-sub-category.html">Intimates</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-v3-sub-sub-category.html">Bras</a>
                                                            </li>
                                                        </ul>
                                                        <h6 className="item-title">
                                                            <a href="single-product.html">Red Wild Bra
                                                            </a>
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
                                                <div className="tag discount">
                                                    <span>-15%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="women-best-selling-products">
                                    {/* Product Not Found */}
                                    <div className="product-not-found">
                                        <div className="not-found">
                                            <h2>SORRY!</h2>
                                            <h6>There is not any product in specific catalogue.</h6>
                                        </div>
                                    </div>
                                    {/* Product Not Found /- */}
                                </div>
                                <div className="tab-pane fade" id="women-top-rating-products">
                                    <div className="slider-fouc">
                                        <div className="products-slider owl-carousel" data-item={4}>
                                            <div className="item">
                                                <div className="image-container">
                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                        <img className="img-fluid" src="images/product/product-17.jpg" alt="Product" />
                                                    </a>
                                                    <div className="item-action-behaviors">
                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                        </a>
                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to
                                                            Wishlist</a>
                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                    </div>
                                                </div>
                                                <div className="item-content">
                                                    <div className="what-product-is">
                                                        <ul className="bread-crumb">
                                                            <li className="has-separator">
                                                                <a href="shop-v1-root-category.html">Women's</a>
                                                            </li>
                                                            <li className="has-separator">
                                                                <a href="shop-v2-sub-category.html">Tops</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-v3-sub-sub-category.html">Dresses</a>
                                                            </li>
                                                        </ul>
                                                        <h6 className="item-title">
                                                            <a href="single-product.html">Grey Nickel Special Occasion
                                                                Dress</a>
                                                        </h6>
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
                                            <div className="item">
                                                <div className="image-container">
                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                        <img className="img-fluid" src="images/product/product-18.jpg" alt="Product" />
                                                    </a>
                                                    <div className="item-action-behaviors">
                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                        </a>
                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to
                                                            Wishlist</a>
                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                    </div>
                                                </div>
                                                <div className="item-content">
                                                    <div className="what-product-is">
                                                        <ul className="bread-crumb">
                                                            <li className="has-separator">
                                                                <a href="shop-v1-root-category.html">Women's</a>
                                                            </li>
                                                            <li className="has-separator">
                                                                <a href="shop-v2-sub-category.html">Tops</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-v3-sub-sub-category.html">Dresses</a>
                                                            </li>
                                                        </ul>
                                                        <h6 className="item-title">
                                                            <a href="single-product.html">Red Carmine Winter Special
                                                                Occasion Dress
                                                            </a>
                                                        </h6>
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
                                            <div className="item">
                                                <div className="image-container">
                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                        <img className="img-fluid" src="images/product/product-19.jpg" alt="Product" />
                                                    </a>
                                                    <div className="item-action-behaviors">
                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                        </a>
                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to
                                                            Wishlist</a>
                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                    </div>
                                                </div>
                                                <div className="item-content">
                                                    <div className="what-product-is">
                                                        <ul className="bread-crumb">
                                                            <li className="has-separator">
                                                                <a href="shop-v1-root-category.html">Women's</a>
                                                            </li>
                                                            <li className="has-separator">
                                                                <a href="shop-v2-sub-category.html">Bottoms</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-v3-sub-sub-category.html">Shoes</a>
                                                            </li>
                                                        </ul>
                                                        <h6 className="item-title">
                                                            <a href="single-product.html">Wax Flower with Corn Silk Heel</a>
                                                        </h6>
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
                                            <div className="item">
                                                <div className="image-container">
                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                        <img className="img-fluid" src="images/product/product-20.jpg" alt="Product" />
                                                    </a>
                                                    <div className="item-action-behaviors">
                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                        </a>
                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to
                                                            Wishlist</a>
                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                    </div>
                                                </div>
                                                <div className="item-content">
                                                    <div className="what-product-is">
                                                        <ul className="bread-crumb">
                                                            <li className="has-separator">
                                                                <a href="shop-v1-root-category.html">Women's</a>
                                                            </li>
                                                            <li className="has-separator">
                                                                <a href="shop-v2-sub-category.html">Intimates</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-v3-sub-sub-category.html">Bras</a>
                                                            </li>
                                                        </ul>
                                                        <h6 className="item-title">
                                                            <a href="single-product.html">Red Wild Bra</a>
                                                        </h6>
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
                                </div>
                                <div className="tab-pane fade" id="women-featured-products">
                                    {/* Product Not Found */}
                                    <div className="product-not-found">
                                        <div className="not-found">
                                            <h2>SORRY!</h2>
                                            <h6>There is not any product in specific catalogue.</h6>
                                        </div>
                                    </div>
                                    {/* Product Not Found /- */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="redirect-link-wrapper text-center u-s-p-t-25 u-s-p-b-80">
                        <a className="redirect-link" href="store-directory.html">
                            <span>View more on this category</span>
                        </a>
                    </div>
                </div>
            </section>
            {/* Women-Clothing /- */}
            {/* Toys-Hobbies-&-Robots */}
            <section className="section-maker">
                <div className="container">
                    <div className="sec-maker-header text-center">
                        <h3 className="sec-maker-h3">Toys Hobbies &amp; Robots</h3>
                        <ul className="nav tab-nav-style-1-a justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#toys-latest-products">Latest
                                    Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#toys-best-selling-products">Best Selling</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#toys-top-rating-products">Top Rating</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#toys-featured-products">Featured Products</a>
                            </li>
                        </ul>
                    </div>
                    <div className="wrapper-content">
                        <div className="outer-area-tab">
                            <div className="tab-content">
                                <div className="tab-pane active show fade" id="toys-latest-products">
                                    <div className="slider-fouc">
                                        <div className="products-slider owl-carousel" data-item={4}>
                                            <div className="item">
                                                <div className="image-container">
                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                        <img className="img-fluid" src="images/product/product-21.jpg" alt="Product" />
                                                    </a>
                                                    <div className="item-action-behaviors">
                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                        </a>
                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to
                                                            Wishlist</a>
                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                    </div>
                                                </div>
                                                <div className="item-content">
                                                    <div className="what-product-is">
                                                        <ul className="bread-crumb">
                                                            <li className="has-separator">
                                                                <a href="shop-v1-root-category.html">Toys Drones</a>
                                                            </li>
                                                            <li className="has-separator">
                                                                <a href="shop-v2-sub-category.html">RC Toys &amp; Hobbies</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-v3-sub-sub-category.html">RC Helicopte</a>
                                                            </li>
                                                        </ul>
                                                        <h6 className="item-title">
                                                            <a href="single-product.html">RC Helicopter 6-Cell</a>
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
                                                        <img className="img-fluid" src="images/product/product-22.jpg" alt="Product" />
                                                    </a>
                                                    <div className="item-action-behaviors">
                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                        </a>
                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to
                                                            Wishlist</a>
                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                    </div>
                                                </div>
                                                <div className="item-content">
                                                    <div className="what-product-is">
                                                        <ul className="bread-crumb">
                                                            <li className="has-separator">
                                                                <a href="shop-v1-root-category.html">Toys Drones</a>
                                                            </li>
                                                            <li className="has-separator">
                                                                <a href="shop-v2-sub-category.html">RC Toys &amp; Hobbies</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-v3-sub-sub-category.html">RC Drone</a>
                                                            </li>
                                                        </ul>
                                                        <h6 className="item-title">
                                                            <a href="single-product.html">DJI Phantom with 1080p Camera</a>
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
                                            </div>
                                            <div className="item">
                                                <div className="image-container">
                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                        <img className="img-fluid" src="images/product/product-23.jpg" alt="Product" />
                                                    </a>
                                                    <div className="item-action-behaviors">
                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                        </a>
                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to
                                                            Wishlist</a>
                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                    </div>
                                                </div>
                                                <div className="item-content">
                                                    <div className="what-product-is">
                                                        <ul className="bread-crumb">
                                                            <li className="has-separator">
                                                                <a href="shop-v1-root-category.html">Toys Drones</a>
                                                            </li>
                                                            <li className="has-separator">
                                                                <a href="shop-v2-sub-category.html">RC Toys &amp; Hobbies</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-v3-sub-sub-category.html">RC Drone</a>
                                                            </li>
                                                        </ul>
                                                        <h6 className="item-title">
                                                            <a href="single-product.html">DJI Inspire with 1080p Camera</a>
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
                                            </div>
                                            <div className="item">
                                                <div className="image-container">
                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                        <img className="img-fluid" src="images/product/product-24.jpg" alt="Product" />
                                                    </a>
                                                    <div className="item-action-behaviors">
                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                        </a>
                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to
                                                            Wishlist</a>
                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                    </div>
                                                </div>
                                                <div className="item-content">
                                                    <div className="what-product-is">
                                                        <ul className="bread-crumb">
                                                            <li className="has-separator">
                                                                <a href="shop-v1-root-category.html">Toys Drones</a>
                                                            </li>
                                                            <li className="has-separator">
                                                                <a href="shop-v2-sub-category.html">RC Toys &amp; Hobbies</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-v3-sub-sub-category.html">RC Drone</a>
                                                            </li>
                                                        </ul>
                                                        <h6 className="item-title">
                                                            <a href="single-product.html">DJI Phantom with Battery
                                                                Lights</a>
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
                                                        <img className="img-fluid" src="images/product/product-25.jpg" alt="Product" />
                                                    </a>
                                                    <div className="item-action-behaviors">
                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                        </a>
                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to
                                                            Wishlist</a>
                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                    </div>
                                                </div>
                                                <div className="item-content">
                                                    <div className="what-product-is">
                                                        <ul className="bread-crumb">
                                                            <li className="has-separator">
                                                                <a href="shop-v1-root-category.html">Toys Drones</a>
                                                            </li>
                                                            <li className="has-separator">
                                                                <a href="shop-v2-sub-category.html">RC Toys &amp; Hobbies</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-v3-sub-sub-category.html">RC Drone</a>
                                                            </li>
                                                        </ul>
                                                        <h6 className="item-title">
                                                            <a href="single-product.html">DJI Mavic Air
                                                            </a>
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
                                                <div className="tag sale">
                                                    <span>SALE</span>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="image-container">
                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                        <img className="img-fluid" src="images/product/product-26.jpg" alt="Product" />
                                                    </a>
                                                    <div className="item-action-behaviors">
                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                        </a>
                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to
                                                            Wishlist</a>
                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                    </div>
                                                </div>
                                                <div className="item-content">
                                                    <div className="what-product-is">
                                                        <ul className="bread-crumb">
                                                            <li className="has-separator">
                                                                <a href="shop-v1-root-category.html">Toys Drones</a>
                                                            </li>
                                                            <li className="has-separator">
                                                                <a href="shop-v2-sub-category.html">RC Toys &amp; Hobbies</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-v3-sub-sub-category.html">RC Drone</a>
                                                            </li>
                                                        </ul>
                                                        <h6 className="item-title">
                                                            <a href="single-product.html">U45 Raven RC Quadcopter
                                                            </a>
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
                                            </div>
                                            <div className="item">
                                                <div className="image-container">
                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                        <img className="img-fluid" src="images/product/product-27.jpg" alt="Product" />
                                                    </a>
                                                    <div className="item-action-behaviors">
                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                        </a>
                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to
                                                            Wishlist</a>
                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                    </div>
                                                </div>
                                                <div className="item-content">
                                                    <div className="what-product-is">
                                                        <ul className="bread-crumb">
                                                            <li className="has-separator">
                                                                <a href="shop-v1-root-category.html">Toys Drones</a>
                                                            </li>
                                                            <li className="has-separator">
                                                                <a href="shop-v2-sub-category.html">RC Toys &amp; Hobbies</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-v3-sub-sub-category.html">RC Drone</a>
                                                            </li>
                                                        </ul>
                                                        <h6 className="item-title">
                                                            <a href="single-product.html">DJI Inspire 1 with 1080p Camera
                                                            </a>
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
                                            </div>
                                            <div className="item">
                                                <div className="image-container">
                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                        <img className="img-fluid" src="images/product/product-28.jpg" alt="Product" />
                                                    </a>
                                                    <div className="item-action-behaviors">
                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                        </a>
                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to
                                                            Wishlist</a>
                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                    </div>
                                                </div>
                                                <div className="item-content">
                                                    <div className="what-product-is">
                                                        <ul className="bread-crumb">
                                                            <li className="has-separator">
                                                                <a href="shop-v1-root-category.html">Toys Drones</a>
                                                            </li>
                                                            <li className="has-separator">
                                                                <a href="shop-v2-sub-category.html">RC Toys &amp; Hobbies</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-v3-sub-sub-category.html">RC Drone</a>
                                                            </li>
                                                        </ul>
                                                        <h6 className="item-title">
                                                            <a href="single-product.html">DJI Inspire 1 with 360° Camera
                                                            </a>
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
                                                <div className="tag discount">
                                                    <span>-15%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="toys-best-selling-products">
                                    {/* Product Not Found */}
                                    <div className="product-not-found">
                                        <div className="not-found">
                                            <h2>SORRY!</h2>
                                            <h6>There is not any product in specific catalogue.</h6>
                                        </div>
                                    </div>
                                    {/* Product Not Found /- */}
                                </div>
                                <div className="tab-pane fade" id="toys-top-rating-products">
                                    <div className="slider-fouc">
                                        <div className="products-slider owl-carousel" data-item={4}>
                                            <div className="item">
                                                <div className="image-container">
                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                        <img className="img-fluid" src="images/product/product-24.jpg" alt="Product" />
                                                    </a>
                                                    <div className="item-action-behaviors">
                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                        </a>
                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to
                                                            Wishlist</a>
                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                    </div>
                                                </div>
                                                <div className="item-content">
                                                    <div className="what-product-is">
                                                        <ul className="bread-crumb">
                                                            <li className="has-separator">
                                                                <a href="shop-v1-root-category.html">Toys Drones</a>
                                                            </li>
                                                            <li className="has-separator">
                                                                <a href="shop-v2-sub-category.html">RC Toys &amp; Hobbies</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-v3-sub-sub-category.html">RC Drone</a>
                                                            </li>
                                                        </ul>
                                                        <h6 className="item-title">
                                                            <a href="single-product.html">DJI Mavic Air
                                                            </a>
                                                        </h6>
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
                                            <div className="item">
                                                <div className="image-container">
                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                        <img className="img-fluid" src="images/product/product-25.jpg" alt="Product" />
                                                    </a>
                                                    <div className="item-action-behaviors">
                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                        </a>
                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to
                                                            Wishlist</a>
                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                    </div>
                                                </div>
                                                <div className="item-content">
                                                    <div className="what-product-is">
                                                        <ul className="bread-crumb">
                                                            <li className="has-separator">
                                                                <a href="shop-v1-root-category.html">Toys Drones</a>
                                                            </li>
                                                            <li className="has-separator">
                                                                <a href="shop-v2-sub-category.html">RC Toys &amp; Hobbies</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-v3-sub-sub-category.html">RC Drone</a>
                                                            </li>
                                                        </ul>
                                                        <h6 className="item-title">
                                                            <a href="single-product.html">U45 Raven RC Quadcopter
                                                            </a>
                                                        </h6>
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
                                            <div className="item">
                                                <div className="image-container">
                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                        <img className="img-fluid" src="images/product/product-26.jpg" alt="Product" />
                                                    </a>
                                                    <div className="item-action-behaviors">
                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                        </a>
                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to
                                                            Wishlist</a>
                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                    </div>
                                                </div>
                                                <div className="item-content">
                                                    <div className="what-product-is">
                                                        <ul className="bread-crumb">
                                                            <li className="has-separator">
                                                                <a href="shop-v1-root-category.html">Toys Drones</a>
                                                            </li>
                                                            <li className="has-separator">
                                                                <a href="shop-v2-sub-category.html">RC Toys &amp; Hobbies</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-v3-sub-sub-category.html">RC Drone</a>
                                                            </li>
                                                        </ul>
                                                        <h6 className="item-title">
                                                            <a href="single-product.html">DJI Inspire 1 with 1080p
                                                                Camera</a>
                                                        </h6>
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
                                            <div className="item">
                                                <div className="image-container">
                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                        <img className="img-fluid" src="images/product/product-28.jpg" alt="Product" />
                                                    </a>
                                                    <div className="item-action-behaviors">
                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                        </a>
                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to
                                                            Wishlist</a>
                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                    </div>
                                                </div>
                                                <div className="item-content">
                                                    <div className="what-product-is">
                                                        <ul className="bread-crumb">
                                                            <li className="has-separator">
                                                                <a href="shop-v1-root-category.html">Toys Drones</a>
                                                            </li>
                                                            <li className="has-separator">
                                                                <a href="shop-v2-sub-category.html">RC Toys &amp; Hobbies</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-v3-sub-sub-category.html">RC Drone</a>
                                                            </li>
                                                        </ul>
                                                        <h6 className="item-title">
                                                            <a href="single-product.html">DJI Inspire 1 with 360° Camera</a>
                                                        </h6>
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
                                </div>
                                <div className="tab-pane fade" id="toys-featured-products">
                                    {/* Product Not Found */}
                                    <div className="product-not-found">
                                        <div className="not-found">
                                            <h2>SORRY!</h2>
                                            <h6>There is not any product in specific catalogue.</h6>
                                        </div>
                                    </div>
                                    {/* Product Not Found /- */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="redirect-link-wrapper text-center u-s-p-t-25 u-s-p-b-80">
                        <a className="redirect-link" href="store-directory.html">
                            <span>View more on this category</span>
                        </a>
                    </div>
                </div>
            </section>
            {/* Toys-Hobbies-&-Robots /- */}
            {/* Mobiles-&-Tablets */}
            <section className="section-maker">
                <div className="container">
                    <div className="sec-maker-header text-center">
                        <h3 className="sec-maker-h3">Mobiles &amp; Tablets</h3>
                        <ul className="nav tab-nav-style-1-a justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#mobiles-latest-products">Latest
                                    Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#mobiles-best-selling-products">Best Selling</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#mobiles-top-rating-products">Top Rating</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#mobiles-featured-products">Featured
                                    Products</a>
                            </li>
                        </ul>
                        <span className="sec-maker-span-text u-s-m-b-8 d-block">Select products in specific category</span>
                    </div>
                    <div className="wrapper-content">
                        <div className="outer-area-tab">
                            <div className="tab-content">
                                <div className="tab-pane active show fade" id="mobiles-latest-products">
                                    <div className="row align-items-center">
                                        <div className="col-lg-1 col-md-12">
                                            <ul className="nav tab-nav-style-2-a">
                                                <li className="nav-item">
                                                    <a className="nav-link active" data-toggle="tab" href="#smart-phones" title="Smart Phones">
                                                        <i className="ion ion-ios-phone-portrait" />
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="tab" href="#tablets" title="Tablets">
                                                        <i className="ion ion-md-phone-landscape" />
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="tab" href="#smart-watches" title="Smart Watches">
                                                        <i className="ion ion-md-watch" />
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="tab" href="#device-accessories" title="Device Accessories">
                                                        <i className="ion ion-md-settings" />
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="tab" href="#power-banks" title="Power Banks">
                                                        <i className="ion ion-md-battery-charging" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-11 col-md-12">
                                            <div className="tab-content">
                                                <div className="tab-pane fade show active" id="smart-phones">
                                                    <div className="slider-fouc">
                                                        <div className="specific-category-slider owl-carousel" data-item={3}>
                                                            <div className="item">
                                                                <div className="image-container">
                                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                                        <img className="img-fluid" src="images/product/product-29.jpg" alt="Product" />
                                                                    </a>
                                                                    <div className="item-action-behaviors">
                                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist
                                                                        </a>
                                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="item-content">
                                                                    <div className="what-product-is">
                                                                        <ul className="bread-crumb">
                                                                            <li className="has-separator">
                                                                                <a href="shop-v1-root-category.html">Mobiles
                                                                                    &amp; Tablets
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="shop-v2-sub-category.html">Smartphones</a>
                                                                            </li>
                                                                        </ul>
                                                                        <h6 className="item-title">
                                                                            <a href="single-product.html">Xiaomi Note 2
                                                                                Black Color
                                                                            </a>
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
                                                                        <img className="img-fluid" src="images/product/product-30.jpg" alt="Product" />
                                                                    </a>
                                                                    <div className="item-action-behaviors">
                                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist
                                                                        </a>
                                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="item-content">
                                                                    <div className="what-product-is">
                                                                        <ul className="bread-crumb">
                                                                            <li className="has-separator">
                                                                                <a href="shop-v1-root-category.html">Mobiles
                                                                                    &amp; Tablets
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="shop-v2-sub-category.html">Smartphones</a>
                                                                            </li>
                                                                        </ul>
                                                                        <h6 className="item-title">
                                                                            <a href="single-product.html">Iphone X Silver
                                                                                Color</a>
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
                                                            </div>
                                                            <div className="item">
                                                                <div className="image-container">
                                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                                        <img className="img-fluid" src="images/product/product-31.jpg" alt="Product" />
                                                                    </a>
                                                                    <div className="item-action-behaviors">
                                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist
                                                                        </a>
                                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="item-content">
                                                                    <div className="what-product-is">
                                                                        <ul className="bread-crumb">
                                                                            <li className="has-separator">
                                                                                <a href="shop-v1-root-category.html">Mobiles
                                                                                    &amp; Tablets
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="shop-v2-sub-category.html">Smartphones</a>
                                                                            </li>
                                                                        </ul>
                                                                        <h6 className="item-title">
                                                                            <a href="single-product.html">Samsung S7 Green
                                                                                Metallic Color
                                                                            </a>
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
                                                                <div className="tag sale">
                                                                    <span>SALE</span>
                                                                </div>
                                                            </div>
                                                            <div className="item">
                                                                <div className="image-container">
                                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                                        <img className="img-fluid" src="images/product/product-32.jpg" alt="Product" />
                                                                    </a>
                                                                    <div className="item-action-behaviors">
                                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist
                                                                        </a>
                                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="item-content">
                                                                    <div className="what-product-is">
                                                                        <ul className="bread-crumb">
                                                                            <li className="has-separator">
                                                                                <a href="shop-v1-root-category.html">Mobiles
                                                                                    &amp; Tablets
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="shop-v2-sub-category.html">Smartphones</a>
                                                                            </li>
                                                                        </ul>
                                                                        <h6 className="item-title">
                                                                            <a href="single-product.html">Sony Xperia 3
                                                                                Black Color
                                                                            </a>
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
                                                                <div className="tag discount">
                                                                    <span>-15%</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="tablets">
                                                    {/* Product Not Found */}
                                                    <div className="product-not-found">
                                                        <div className="not-found">
                                                            <h2>SORRY!</h2>
                                                            <h6>There is not any product in specific catalogue.</h6>
                                                        </div>
                                                    </div>
                                                    {/* Product Not Found /- */}
                                                </div>
                                                <div className="tab-pane fade" id="smart-watches">
                                                    <div className="slider-fouc">
                                                        <div className="specific-category-slider owl-carousel" data-item={3}>
                                                            <div className="item">
                                                                <div className="image-container">
                                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                                        <img className="img-fluid" src="images/product/product-33.jpg" alt="Product" />
                                                                    </a>
                                                                    <div className="item-action-behaviors">
                                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist
                                                                        </a>
                                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="item-content">
                                                                    <div className="what-product-is">
                                                                        <ul className="bread-crumb">
                                                                            <li className="has-separator">
                                                                                <a href="shop-v1-root-category.html">Mobiles
                                                                                    &amp; Tablets
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="shop-v2-sub-category.html">Smartwatches
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                        <h6 className="item-title">
                                                                            <a href="single-product.html">Outatime Mix
                                                                                Smartwatch
                                                                            </a>
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
                                                                        <img className="img-fluid" src="images/product/product-34.jpg" alt="Product" />
                                                                    </a>
                                                                    <div className="item-action-behaviors">
                                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist
                                                                        </a>
                                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="item-content">
                                                                    <div className="what-product-is">
                                                                        <ul className="bread-crumb">
                                                                            <li className="has-separator">
                                                                                <a href="shop-v1-root-category.html">Mobiles
                                                                                    &amp; Tablets
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="shop-v2-sub-category.html">Smartwatches
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                        <h6 className="item-title">
                                                                            <a href="single-product.html">Mombo Full Wrist
                                                                                Smartwatch
                                                                            </a>
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
                                                            </div>
                                                            <div className="item">
                                                                <div className="image-container">
                                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                                        <img className="img-fluid" src="images/product/product-35.jpg" alt="Product" />
                                                                    </a>
                                                                    <div className="item-action-behaviors">
                                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist
                                                                        </a>
                                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="item-content">
                                                                    <div className="what-product-is">
                                                                        <ul className="bread-crumb">
                                                                            <li className="has-separator">
                                                                                <a href="shop-v1-root-category.html">Mobiles
                                                                                    &amp; Tablets
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="shop-v2-sub-category.html">Smartwatches
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                        <h6 className="item-title">
                                                                            <a href="single-product.html">Apollo Sport Think
                                                                                Smartwatch
                                                                            </a>
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
                                                                <div className="tag sale">
                                                                    <span>SALE</span>
                                                                </div>
                                                            </div>
                                                            <div className="item">
                                                                <div className="image-container">
                                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                                        <img className="img-fluid" src="images/product/product-36.jpg" alt="Product" />
                                                                    </a>
                                                                    <div className="item-action-behaviors">
                                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist
                                                                        </a>
                                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="item-content">
                                                                    <div className="what-product-is">
                                                                        <ul className="bread-crumb">
                                                                            <li className="has-separator">
                                                                                <a href="shop-v1-root-category.html">Mobiles
                                                                                    &amp; Tablets
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="shop-v2-sub-category.html">Smartwatches
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                        <h6 className="item-title">
                                                                            <a href="single-product.html">Rhythm Pulse
                                                                                Smartwatch
                                                                            </a>
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
                                                                <div className="tag discount">
                                                                    <span>-15%</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="device-accessories">
                                                    {/* Product Not Found */}
                                                    <div className="product-not-found">
                                                        <div className="not-found">
                                                            <h2>SORRY!</h2>
                                                            <h6>There is not any product in specific catalogue.</h6>
                                                        </div>
                                                    </div>
                                                    {/* Product Not Found /- */}
                                                </div>
                                                <div className="tab-pane fade" id="power-banks">
                                                    {/* Product Not Found */}
                                                    <div className="product-not-found">
                                                        <div className="not-found">
                                                            <h2>SORRY!</h2>
                                                            <h6>There is not any product in specific catalogue.</h6>
                                                        </div>
                                                    </div>
                                                    {/* Product Not Found /- */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="mobiles-best-selling-products">
                                    {/* Product Not Found */}
                                    <div className="product-not-found">
                                        <div className="not-found">
                                            <h2>SORRY!</h2>
                                            <h6>There is not any product in specific catalogue.</h6>
                                        </div>
                                    </div>
                                    {/* Product Not Found /- */}
                                </div>
                                <div className="tab-pane fade" id="mobiles-top-rating-products">
                                    {/* Product Not Found */}
                                    <div className="product-not-found">
                                        <div className="not-found">
                                            <h2>SORRY!</h2>
                                            <h6>There is not any product in specific catalogue.</h6>
                                        </div>
                                    </div>
                                    {/* Product Not Found /- */}
                                </div>
                                <div className="tab-pane fade" id="mobiles-featured-products">
                                    {/* Product Not Found */}
                                    <div className="product-not-found">
                                        <div className="not-found">
                                            <h2>SORRY!</h2>
                                            <h6>There is not any product in specific catalogue.</h6>
                                        </div>
                                    </div>
                                    {/* Product Not Found /- */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="redirect-link-wrapper text-center u-s-p-t-25 u-s-p-b-80">
                        <a className="redirect-link" href="store-directory.html">
                            <span>View more on this category</span>
                        </a>
                    </div>
                </div>
            </section>
            {/* Mobiles-&-Tablets /- */}
            {/* Consumer-Electronics */}
            <section className="section-maker">
                <div className="container">
                    <div className="sec-maker-header text-center">
                        <h3 className="sec-maker-h3">Consumer Electronics</h3>
                        <ul className="nav tab-nav-style-1-a justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#consumer-latest-products">Latest
                                    Products
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#consumer-best-selling-products">Best
                                    Selling</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#consumer-top-rating-products">Top Rating</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#consumer-featured-products">Featured
                                    Products</a>
                            </li>
                        </ul>
                        <span className="sec-maker-span-text u-s-m-b-8 d-block">Select products in specific category</span>
                    </div>
                    <div className="wrapper-content">
                        <div className="outer-area-tab">
                            <div className="tab-content">
                                <div className="tab-pane active show fade" id="consumer-latest-products">
                                    <div className="row align-items-center">
                                        <div className="col-lg-1 col-md-12">
                                            <ul className="nav tab-nav-style-2-a">
                                                <li className="nav-item">
                                                    <a className="nav-link active" data-toggle="tab" href="#laptops" title="Laptops">
                                                        <i className="ion ion-md-laptop" />
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="tab" href="#pc-and-accessories" title="PC & Accessories">
                                                        <i className="ion ion-ios-settings" />
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="tab" href="#tv" title="TV's">
                                                        <i className="ion ion-md-tv" />
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="tab" href="#cam-corder" title="Camera & Camcorders">
                                                        <i className="ion ion-md-camera" />
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="tab" href="#audio-amplifiers" title="Audio & Amplifiers">
                                                        <i className="ion ion-md-microphone" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-11 col-md-12">
                                            <div className="tab-content">
                                                <div className="tab-pane fade show active" id="laptops">
                                                    <div className="slider-fouc">
                                                        <div className="specific-category-slider owl-carousel" data-item={3}>
                                                            <div className="item">
                                                                <div className="image-container">
                                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                                        <img className="img-fluid" src="images/product/product-37.jpg" alt="Product" />
                                                                    </a>
                                                                    <div className="item-action-behaviors">
                                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist
                                                                        </a>
                                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="item-content">
                                                                    <div className="what-product-is">
                                                                        <ul className="bread-crumb">
                                                                            <li className="has-separator">
                                                                                <a href="shop-v1-root-category.html">Consumer
                                                                                    Electronics
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="shop-v2-sub-category.html">Laptops</a>
                                                                            </li>
                                                                        </ul>
                                                                        <h6 className="item-title">
                                                                            <a href="single-product.html">HP Pavilion 15
                                                                                Notebook
                                                                            </a>
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
                                                                        <img className="img-fluid" src="images/product/product-38.jpg" alt="Product" />
                                                                    </a>
                                                                    <div className="item-action-behaviors">
                                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist
                                                                        </a>
                                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="item-content">
                                                                    <div className="what-product-is">
                                                                        <ul className="bread-crumb">
                                                                            <li className="has-separator">
                                                                                <a href="shop-v1-root-category.html">Consumer
                                                                                    Electronics
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="shop-v2-sub-category.html">Laptops</a>
                                                                            </li>
                                                                        </ul>
                                                                        <h6 className="item-title">
                                                                            <a href="single-product.html">Apple Macbook Pro
                                                                                2017</a>
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
                                                            </div>
                                                            <div className="item">
                                                                <div className="image-container">
                                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                                        <img className="img-fluid" src="images/product/product-39.jpg" alt="Product" />
                                                                    </a>
                                                                    <div className="item-action-behaviors">
                                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist
                                                                        </a>
                                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="item-content">
                                                                    <div className="what-product-is">
                                                                        <ul className="bread-crumb">
                                                                            <li className="has-separator">
                                                                                <a href="shop-v1-root-category.html">Consumer
                                                                                    Electronics
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="shop-v2-sub-category.html">Laptops</a>
                                                                            </li>
                                                                        </ul>
                                                                        <h6 className="item-title">
                                                                            <a href="single-product.html">Dell Inspiron
                                                                                15</a>
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
                                                                <div className="tag sale">
                                                                    <span>SALE</span>
                                                                </div>
                                                            </div>
                                                            <div className="item">
                                                                <div className="image-container">
                                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                                        <img className="img-fluid" src="images/product/product-40.jpg" alt="Product" />
                                                                    </a>
                                                                    <div className="item-action-behaviors">
                                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist
                                                                        </a>
                                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="item-content">
                                                                    <div className="what-product-is">
                                                                        <ul className="bread-crumb">
                                                                            <li className="has-separator">
                                                                                <a href="shop-v1-root-category.html">Consumer
                                                                                    Electronics
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="shop-v2-sub-category.html">Laptops</a>
                                                                            </li>
                                                                        </ul>
                                                                        <h6 className="item-title">
                                                                            <a href="single-product.html">Dell Inspiron
                                                                                1525</a>
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
                                                                <div className="tag discount">
                                                                    <span>-15%</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="pc-and-accessories">
                                                    {/* Product Not Found */}
                                                    <div className="product-not-found">
                                                        <div className="not-found">
                                                            <h2>SORRY!</h2>
                                                            <h6>There is not any product in specific catalogue.</h6>
                                                        </div>
                                                    </div>
                                                    {/* Product Not Found /- */}
                                                </div>
                                                <div className="tab-pane fade" id="tv">
                                                    <div className="slider-fouc">
                                                        <div className="specific-category-slider owl-carousel" data-item={3}>
                                                            <div className="item">
                                                                <div className="image-container">
                                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                                        <img className="img-fluid" src="images/product/product-41.jpg" alt="Product" />
                                                                    </a>
                                                                    <div className="item-action-behaviors">
                                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist
                                                                        </a>
                                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="item-content">
                                                                    <div className="what-product-is">
                                                                        <ul className="bread-crumb">
                                                                            <li className="has-separator">
                                                                                <a href="shop-v1-root-category.html">Consumer
                                                                                    Electronics
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="shop-v2-sub-category.html">TV/LCD/LED
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                        <h6 className="item-title">
                                                                            <a href="single-product.html">Hisense 4k LED
                                                                                TV</a>
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
                                                                        <img className="img-fluid" src="images/product/product-42.jpg" alt="Product" />
                                                                    </a>
                                                                    <div className="item-action-behaviors">
                                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist
                                                                        </a>
                                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="item-content">
                                                                    <div className="what-product-is">
                                                                        <ul className="bread-crumb">
                                                                            <li className="has-separator">
                                                                                <a href="shop-v1-root-category.html">Consumer
                                                                                    Electronics
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="shop-v2-sub-category.html">TV/LCD/LED
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                        <h6 className="item-title">
                                                                            <a href="single-product.html">TCL 4k LED TV</a>
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
                                                            </div>
                                                            <div className="item">
                                                                <div className="image-container">
                                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                                        <img className="img-fluid" src="images/product/product-43.jpg" alt="Product" />
                                                                    </a>
                                                                    <div className="item-action-behaviors">
                                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist
                                                                        </a>
                                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="item-content">
                                                                    <div className="what-product-is">
                                                                        <ul className="bread-crumb">
                                                                            <li className="has-separator">
                                                                                <a href="shop-v1-root-category.html">Consumer
                                                                                    Electronics
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="shop-v2-sub-category.html">TV/LCD/LED
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                        <h6 className="item-title">
                                                                            <a href="single-product.html">Sony 4k LED TV
                                                                            </a>
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
                                                                <div className="tag sale">
                                                                    <span>SALE</span>
                                                                </div>
                                                            </div>
                                                            <div className="item">
                                                                <div className="image-container">
                                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                                        <img className="img-fluid" src="images/product/product-44.jpg" alt="Product" />
                                                                    </a>
                                                                    <div className="item-action-behaviors">
                                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist
                                                                        </a>
                                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="item-content">
                                                                    <div className="what-product-is">
                                                                        <ul className="bread-crumb">
                                                                            <li className="has-separator">
                                                                                <a href="shop-v1-root-category.html">Consumer
                                                                                    Electronics
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="shop-v2-sub-category.html">TV/LCD/LED
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                        <h6 className="item-title">
                                                                            <a href="single-product.html">China Petrei 4k
                                                                                LED TV</a>
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
                                                                <div className="tag discount">
                                                                    <span>-15%</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="cam-corder">
                                                    {/* Product Not Found */}
                                                    <div className="product-not-found">
                                                        <div className="not-found">
                                                            <h2>SORRY!</h2>
                                                            <h6>There is not any product in specific catalogue.</h6>
                                                        </div>
                                                    </div>
                                                    {/* Product Not Found /- */}
                                                </div>
                                                <div className="tab-pane fade" id="audio-amplifiers">
                                                    {/* Product Not Found */}
                                                    <div className="product-not-found">
                                                        <div className="not-found">
                                                            <h2>SORRY!</h2>
                                                            <h6>There is not any product in specific catalogue.</h6>
                                                        </div>
                                                    </div>
                                                    {/* Product Not Found /- */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="consumer-best-selling-products">
                                    {/* Product Not Found */}
                                    <div className="product-not-found">
                                        <div className="not-found">
                                            <h2>SORRY!</h2>
                                            <h6>There is not any product in specific catalogue.</h6>
                                        </div>
                                    </div>
                                    {/* Product Not Found /- */}
                                </div>
                                <div className="tab-pane fade" id="consumer-top-rating-products">
                                    {/* Product Not Found */}
                                    <div className="product-not-found">
                                        <div className="not-found">
                                            <h2>SORRY!</h2>
                                            <h6>There is not any product in specific catalogue.</h6>
                                        </div>
                                    </div>
                                    {/* Product Not Found /- */}
                                </div>
                                <div className="tab-pane fade" id="consumer-featured-products">
                                    {/* Product Not Found */}
                                    <div className="product-not-found">
                                        <div className="not-found">
                                            <h2>SORRY!</h2>
                                            <h6>There is not any product in specific catalogue.</h6>
                                        </div>
                                    </div>
                                    {/* Product Not Found /- */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="redirect-link-wrapper text-center u-s-p-t-25 u-s-p-b-80">
                        <a className="redirect-link" href="store-directory.html">
                            <span>View more on this category</span>
                        </a>
                    </div>
                </div>
            </section>
            {/* Consumer-Electronics /- */}
            {/* Books-&-Audible */}
            <section className="section-maker">
                <div className="container">
                    <div className="sec-maker-header text-center">
                        <h3 className="sec-maker-h3">Books &amp; Audible</h3>
                        <ul className="nav tab-nav-style-1-a justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#books-latest-products">Latest
                                    Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#books-best-selling-products">Best Selling</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#books-top-rating-products">Top Rating</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#books-featured-products">Featured Products</a>
                            </li>
                        </ul>
                    </div>
                    <div className="wrapper-content">
                        <div className="outer-area-tab">
                            <div className="tab-content">
                                <div className="tab-pane active show fade" id="books-latest-products">
                                    <div className="slider-fouc">
                                        <div className="products-slider owl-carousel" data-item={4}>
                                            <div className="item">
                                                <div className="image-container">
                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                        <img className="img-fluid" src="images/product/product-45.jpg" alt="Product" />
                                                    </a>
                                                    <div className="item-action-behaviors">
                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                        </a>
                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to
                                                            Wishlist</a>
                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                    </div>
                                                </div>
                                                <div className="item-content">
                                                    <div className="what-product-is">
                                                        <ul className="bread-crumb">
                                                            <li>
                                                                <a href="shop-v1-root-category.html">Books</a>
                                                            </li>
                                                        </ul>
                                                        <h6 className="item-title">
                                                            <a href="single-product.html">JavaScript The Definitive Guide by
                                                                David Flanagan
                                                            </a>
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
                                                        <img className="img-fluid" src="images/product/product-46.jpg" alt="Product" />
                                                    </a>
                                                    <div className="item-action-behaviors">
                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                        </a>
                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to
                                                            Wishlist</a>
                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                    </div>
                                                </div>
                                                <div className="item-content">
                                                    <div className="what-product-is">
                                                        <ul className="bread-crumb">
                                                            <li>
                                                                <a href="shop-v1-root-category.html">Books</a>
                                                            </li>
                                                        </ul>
                                                        <h6 className="item-title">
                                                            <a href="single-product.html">Eloquent JavaScript by Marijn
                                                                Haverbeke
                                                            </a>
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
                                            </div>
                                            <div className="item">
                                                <div className="image-container">
                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                        <img className="img-fluid" src="images/product/product-47.jpg" alt="Product" />
                                                    </a>
                                                    <div className="item-action-behaviors">
                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                        </a>
                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to
                                                            Wishlist</a>
                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                    </div>
                                                </div>
                                                <div className="item-content">
                                                    <div className="what-product-is">
                                                        <ul className="bread-crumb">
                                                            <li>
                                                                <a href="shop-v1-root-category.html">Books</a>
                                                            </li>
                                                        </ul>
                                                        <h6 className="item-title">
                                                            <a href="single-product.html">Secret of the JavaScript Ninja by
                                                                Bear Bibeault &amp; John Resig
                                                            </a>
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
                                            </div>
                                            <div className="item">
                                                <div className="image-container">
                                                    <a className="item-img-wrapper-link" href="single-product.html">
                                                        <img className="img-fluid" src="images/product/product-48.jpg" alt="Product" />
                                                    </a>
                                                    <div className="item-action-behaviors">
                                                        <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                                                        </a>
                                                        <a className="item-mail" href="javascript:void(0)">Mail</a>
                                                        <a className="item-addwishlist" href="javascript:void(0)">Add to
                                                            Wishlist</a>
                                                        <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                    </div>
                                                </div>
                                                <div className="item-content">
                                                    <div className="what-product-is">
                                                        <ul className="bread-crumb">
                                                            <li>
                                                                <a href="shop-v1-root-category.html">Books</a>
                                                            </li>
                                                        </ul>
                                                        <h6 className="item-title">
                                                            <a href="single-product.html">JavaScript The Good Parts by
                                                                Douglas Crockford
                                                            </a>
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
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="books-best-selling-products">
                                    {/* Product Not Found */}
                                    <div className="product-not-found">
                                        <div className="not-found">
                                            <h2>SORRY!</h2>
                                            <h6>There is not any product in specific catalogue.</h6>
                                        </div>
                                    </div>
                                    {/* Product Not Found /- */}
                                </div>
                                <div className="tab-pane fade" id="books-top-rating-products">
                                    {/* Product Not Found */}
                                    <div className="product-not-found">
                                        <div className="not-found">
                                            <h2>SORRY!</h2>
                                            <h6>There is not any product in specific catalogue.</h6>
                                        </div>
                                    </div>
                                    {/* Product Not Found /- */}
                                </div>
                                <div className="tab-pane fade" id="books-featured-products">
                                    {/* Product Not Found */}
                                    <div className="product-not-found">
                                        <div className="not-found">
                                            <h2>SORRY!</h2>
                                            <h6>There is not any product in specific catalogue.</h6>
                                        </div>
                                    </div>
                                    {/* Product Not Found /- */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="redirect-link-wrapper text-center u-s-p-t-25 u-s-p-b-80">
                        <a className="redirect-link" href="store-directory.html">
                            <span>View more on this category</span>
                        </a>
                    </div>
                </div>
            </section>
            {/* Books-&-Audible /- */}
            {/* Continue-Link */}
            <div className="continue-link-wrapper u-s-p-b-80">
                <a className="continue-link" href="store-directory.html" title="View all products on site">
                    <i className="ion ion-ios-more" />
                </a>
            </div>
            {/* Continue-Link /- */}
            {/* Brand-Slider */}
            <div className="brand-slider u-s-p-b-80">
                <div className="container">
                    <div className="brand-slider-content owl-carousel" data-item={5}>
                        <div className="brand-pic">
                            <a href="#">
                                <img src="images/brand-logos/b1.png" alt="Brand 1" />
                            </a>
                        </div>
                        <div className="brand-pic">
                            <a href="#">
                                <img src="images/brand-logos/b2.png" alt="Brand 2" />
                            </a>
                        </div>
                        <div className="brand-pic">
                            <a href="#">
                                <img src="images/brand-logos/b3.png" alt="Brand 3" />
                            </a>
                        </div>
                        <div className="brand-pic">
                            <a href="#">
                                <img src="images/brand-logos/b4.png" alt="Brand 4" />
                            </a>
                        </div>
                        <div className="brand-pic">
                            <a href="#">
                                <img src="images/brand-logos/b5.png" alt="Brand 5" />
                            </a>
                        </div>
                        <div className="brand-pic">
                            <a href="#">
                                <img src="images/brand-logos/b6.png" alt="Brand 6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Brand-Slider /- */}
            {/* Site-Priorities */}
            <section className="app-priority">
                <div className="container">
                    <div className="priority-wrapper u-s-p-b-80">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className="single-item-wrapper">
                                    <div className="single-item-icon">
                                        <i className="ion ion-md-star" />
                                    </div>
                                    <h2>
                                        Great Value
                                    </h2>
                                    <p>We offer competitive prices on our 100 million plus product range</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className="single-item-wrapper">
                                    <div className="single-item-icon">
                                        <i className="ion ion-md-cash" />
                                    </div>
                                    <h2>
                                        Shop with Confidence
                                    </h2>
                                    <p>Our Protection covers your purchase from click to delivery</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className="single-item-wrapper">
                                    <div className="single-item-icon">
                                        <i className="ion ion-ios-card" />
                                    </div>
                                    <h2>
                                        Safe Payment
                                    </h2>
                                    <p>Pay with the world’s most popular and secure payment methods</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className="single-item-wrapper">
                                    <div className="single-item-icon">
                                        <i className="ion ion-md-contacts" />
                                    </div>
                                    <h2>
                                        24/7 Help Center
                                    </h2>
                                    <p>Round-the-clock assistance for a smooth shopping experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Site-Priorities /- */}
            {/* Footer */}
            
            {/* Footer /- */}
            {/* Dummy Selectbox */}
            <div className="select-dummy-wrapper">
                <select id="compute-select">
                    <option id="compute-option">All</option>
                </select>
            </div>
            {/* Dummy Selectbox /- */}
            {/* Responsive-Search */}
            <div className="responsive-search-wrapper">
                <button type="button" className="button ion ion-md-close" id="responsive-search-close-button" />
                <div className="responsive-search-container">
                    <div className="container">
                        <p>Start typing and press Enter to search</p>
                        <form className="responsive-search-form">
                            <label className="sr-only" htmlFor="search-text">Search</label>
                            <input id="search-text" type="text" className="responsive-search-field" placeholder="PLEASE SEARCH" />
                            <i className="fas fa-search" />
                        </form>
                    </div>
                </div>
            </div>
            {/* Newsletter-Modal /- */}
            {/* Quick-view-Modal */}
            <div id="quick-view" className="modal fade">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <button type="button" className="button dismiss-button ion ion-ios-close" data-dismiss="modal" />
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    {/* Product-zoom-area */}
                                    <div className="zoom-area">
                                        <img id="zoom-pro-quick-view" className="img-fluid" src="images/product/product-1@4x-1.jpg" data-zoom-image="images/product/product-1@4x-1.jpg" alt="Zoom Image" />
                                        <div id="gallery-quick-view" className="u-s-m-t-10">
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
                                            <p>This hoodie is full cotton. It includes a muff sewn onto the lower front, and
                                                (usually) a drawstring to adjust the hood opening. Throughout the U.S., it
                                                is common for middle-school, high-school, and college students to wear this
                                                sweatshirts—with or without hoods—that display their respective school names
                                                or mascots across the chest, either as part of a uniform or personal
                                                preference.
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
                                                    <button className="button button-outline-secondary" type="submit">Add to
                                                        cart</button>
                                                    <button className="button button-outline-secondary far fa-heart u-s-m-l-6" />
                                                    <button className="button button-outline-secondary far fa-envelope u-s-m-l-6" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    {/* Product-details /- */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Quick-view-Modal /- */}
        </div>

    );
}

export default Home;