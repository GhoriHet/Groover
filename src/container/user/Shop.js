import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory } from '../../Redux/Slice/AddCategory';
import { fetchSubcategory } from '../../Redux/Slice/AddSubcategorySlice';
import { fetchProduct } from '../../Redux/Slice/AddProductSlice';
import { Link } from 'react-router-dom';

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

    const getSubcategoryNameById = (id) => {
        const category = subcatDataFetched?.data?.find((cat) => cat._id === id);
        return category ? category.subcategory_name : 'Unknown Category';
    };

    const uniqueProducts = proDataFetched?.data?.reduce((accumulator, currentProduct) => {
        const subcategoryName = getSubcategoryNameById(currentProduct.subcategory_id);
        if (selectedSubcategory === 'All' || subcategoryName === selectedSubcategory) {
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

    const currentProducts = uniqueProducts.filter((v) => {
        const categoryName = getCategoryNameById(v.category_id);

        return categoryName === selectedCategory || selectedCategory === 'All'

    })

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
                <div className="shop-intro">
                            <h3>{selectedCategory}</h3>
                        </div>
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
                            <div className="page-bar clearfix">
                                <div className="shop-settings">
                                    <a id="list-anchor" className={viewMode === 'list' ? 'active' : ''} onClick={handleListAnchorClick}>
                                        <i className="fas fa-th-list" />
                                    </a>
                                    <a id="grid-anchor" className={viewMode === 'grid' ? 'active' : ''} onClick={handleGridAnchorClick}>
                                        <i class="fas fa-th"></i>
                                    </a>
                                </div>
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
                            </div>
                            <div className={`row product-container ${viewMode === 'list' ? 'list-style' : 'grid-style'}`}>

                                {
                                    currentProducts.map((v) => {
                                        const categoryName = getCategoryNameById(v.category_id);
                                        const subcategoryName = getSubcategoryNameById(v.subcategory_id);

                                        if (selectedCategory === 'All') {
                                            return (
                                                <div className="product-item col-lg-4 col-md-6 col-sm-6" key={v.id}>

                                                    <Link to={"/product_Details/" + v.id} >
                                                        <div className="item">
                                                            <div className="image-container">

                                                                <a className="item-img-wrapper-link" >
                                                                    <img className="img-fluid zoomimg" src={v.avatar[0].url} alt="Product" />
                                                                </a>

                                                                <div className="item-action-behaviors">

                                                                    <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                                                                    <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                                </div>
                                                            </div>
                                                            <div className="item-content">
                                                                <div className="what-product-is">
                                                                    <ul className="bread-crumb">
                                                                        <li className="has-separator">
                                                                            <a href="shop-v1-root-category.html">{categoryName}</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="shop-v3-sub-sub-category.html">{subcategoryName}</a>
                                                                        </li>
                                                                    </ul>
                                                                    <h6 className="item-title">
                                                                        <a href="single-product.html">{v.name}</a>
                                                                    </h6>
                                                                    <div className="item-description">
                                                                        <p>{v.description}</p>
                                                                    </div>
                                                                    <div className="item-stars">
                                                                        <div className="star" title="4.5 out of 5 - based on 23 Reviews">
                                                                            {/* <span style={{ width: `${averageRating * 20}%` }} /> */}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="price-template">
                                                                    <div className="item-new-price">
                                                                        ${v.price}
                                                                    </div>
                                                                    <div className="item-old-price">
                                                                        ${v.mrp}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tag new">
                                                                <span>NEW</span>
                                                            </div>
                                                        </div>
                                                    </Link>

                                                </div>
                                            )
                                        } else if (categoryName === selectedCategory) {
                                            return (
                                                <div className="product-item col-lg-4 col-md-6 col-sm-6" key={v.id}>

                                                    <Link to={"/product_Details/" + v.id} >
                                                        <div className="item">
                                                            <div className="image-container">

                                                                <a className="item-img-wrapper-link" >
                                                                    <img className="img-fluid zoomimg" src={v.avatar[0].url} alt="Product" />
                                                                </a>

                                                                <div className="item-action-behaviors">

                                                                    <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                                                                    <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                                                                </div>
                                                            </div>
                                                            <div className="item-content">
                                                                <div className="what-product-is">
                                                                    <ul className="bread-crumb">
                                                                        <li className="has-separator">
                                                                            <a href="shop-v1-root-category.html">{categoryName}</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="shop-v3-sub-sub-category.html">{subcategoryName}</a>
                                                                        </li>
                                                                    </ul>
                                                                    <h6 className="item-title">
                                                                        <a href="single-product.html">{v.name}</a>
                                                                    </h6>
                                                                    <div className="item-description">
                                                                        <p>{v.description}</p>
                                                                    </div>
                                                                    <div className="item-stars">
                                                                        <div className="star" title="4.5 out of 5 - based on 23 Reviews">
                                                                            {/* <span style={{ width: `${averageRating * 20}%` }} /> */}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="price-template">
                                                                    <div className="item-new-price">
                                                                        ${v.price}
                                                                    </div>
                                                                    <div className="item-old-price">
                                                                        ${v.mrp}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tag new">
                                                                <span>NEW</span>
                                                            </div>
                                                        </div>
                                                    </Link>

                                                </div>
                                            )
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Shop;