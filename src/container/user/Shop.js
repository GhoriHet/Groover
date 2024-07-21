import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory } from '../../Redux/Slice/AddCategory';
import { fetchSubcategory } from '../../Redux/Slice/AddSubcategorySlice';
import { fetchProduct } from '../../Redux/Slice/AddProductSlice';

function Shop(props) {
    const [viewMode, setViewMode] = React.useState('list');
    const [selectedSubcategory, setSelectedSubcategory] = React.useState('All');

    const dispatch = useDispatch();

    const catDataFetched = useSelector((state => state.category?.data));
    const subcatDataFetched = useSelector((state => state.subcategory?.data));
    const proDataFetched = useSelector((state => state.product?.data));

    const selectedCategory = useSelector(state => state.selectcategory.selectedCategory);

    const getCategoryNameById = (id) => {
        const category = catDataFetched?.data?.find((cat) => cat._id === id);
        return category ? category.category_name : 'Unknown Category';
    };

    const uniqueProducts = proDataFetched?.data?.reduce((accumulator, currentProduct) => {
        if ((selectedSubcategory === 'All' || currentProduct.subcatDataFetched.data === selectedSubcategory)) {
            accumulator.push(currentProduct);
        }
        return accumulator;
    }, []) || [];

    React.useEffect(() => {
        const fetchData = async () => {
            await dispatch(fetchCategory());
            await dispatch(fetchSubcategory());
            await dispatch(fetchProduct());
        };
        fetchData();
    }, [dispatch]);

    const currentProducts = uniqueProducts.filter((v) => v.category_id === selectedCategory || selectedCategory === 'All');
    // const currentProducts = uniqueProducts.filter((v) => (selectedCategory === 'All' || v.category_name === selectedCategory));

    console.log(currentProducts, "CURRNET PRODUCT")

    const handleListAnchorClick = () => {
        setViewMode('list');
        // setItemsPerPage(5);
    };

    const handleGridAnchorClick = () => {
        setViewMode('grid');
        // setItemsPerPage(9);
    };

    const handleClick = (event, subcategoryValue) => {
        event.preventDefault();
        setSelectedSubcategory(subcategoryValue);
    }


    return (
        <div>
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
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="v-menu">
                                <span className="v-title">
                                    <i className="ion ion-md-menu" />
                                    All Categories
                                </span>
                                <nav>
                                    <div className="v-wrapper">
                                        <ul className="v-list animated fadeIn">
                                            <li className="js-backdrop">
                                                <a href="shop-v1-root-category.html" onClick={(event) => handleClick(event, 'All')}>
                                                    <i class="ion ion-md-heart"></i>
                                                    All
                                                    <i className="ion ion-ios-arrow-forward" />
                                                </a>

                                            </li>

                                            {subcatDataFetched?.data?.map((item, index) => {
                                                const categoryName = getCategoryNameById(item.category_id);

                                                if (selectedCategory === 'All') {
                                                    return (
                                                        <li key={index} className="js-backdrop">
                                                            <a href="shop-v1-root-category.html" onClick={(event) => handleClick(event, item.subcategory_name)}>
                                                                <i className="ion ion-md-heart"></i>
                                                                {item.subcategory_name}
                                                                <i className="ion ion-ios-arrow-forward" />
                                                            </a>
                                                        </li>
                                                    );
                                                } else if (selectedCategory === categoryName) {
                                                    return (
                                                        <li key={index} className="js-backdrop">
                                                            <a href="shop-v1-root-category.html" onClick={(event) => handleClick(event, item.subcategory_name)}>
                                                                <i className="ion ion-md-heart"></i>
                                                                {item.subcategory_name}
                                                                <i className="ion ion-ios-arrow-forward" />
                                                            </a>
                                                        </li>
                                                    );
                                                }
                                                return null;
                                            })}



                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12">
                            {/* Page-Bar */}
                            <div className="page-bar clearfix">
                                <div className="shop-settings">
                                    <a id="list-anchor" className={viewMode === 'list' ? 'active' : ''} onClick={handleListAnchorClick}>
                                        <i className="fas fa-th-list" />
                                    </a>
                                    <a id="grid-anchor" className={viewMode === 'grid' ? 'active' : ''} onClick={handleGridAnchorClick}>
                                        <i class="fas fa-th"></i>
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
                            <div className={`row product-container ${viewMode === 'list' ? 'list-style' : 'grid-style'}`}>
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

export default Shop;