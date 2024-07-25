import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../../Redux/Slice/AddProductSlice';
import { fetchCategory } from '../../Redux/Slice/AddCategory';
import { fetchSubcategory } from '../../Redux/Slice/AddSubcategorySlice';

function ShopDetail(props) {
    const [filterData, setFilterData] = React.useState([]);
    const [activeImageIndex, setActiveImageIndex] = React.useState(0);

    const { _id } = useParams();
    const dispatch = useDispatch();

    const catDataFetched = useSelector((state) => state.category?.data);
    const subcatDataFetched = useSelector((state) => state.subcategory?.data);
    const proDataFetched = useSelector((state) => state.product?.data);

    const getCategoryNameById = (id) => {
        const category = catDataFetched?.data?.find((cat) => cat._id === id);
        return category ? category.category_name : 'Unknown Category';
    };

    const getSubcategoryNameById = (id) => {
        const category = subcatDataFetched?.data?.find((cat) => cat._id === id);
        return category ? category.subcategory_name : 'Unknown Category';
    };

    React.useEffect(() => {
        dispatch(fetchProduct());
        dispatch(fetchCategory());
        dispatch(fetchSubcategory());

        const filteredData = proDataFetched?.data?.filter((v) => v._id === _id);
        setFilterData(filteredData);
    }, [dispatch, _id, proDataFetched]);

    const matchingObjects = proDataFetched?.data?.filter((obj) => obj._id === _id);

    const handleImageClick = (index) => {
        setActiveImageIndex(index);
    };

    const newData = filterData.filter((v) => v._id === _id);
    console.log(newData)

    return (
        <div>
            <div className="page-detail u-s-p-t-80">
                <div className="container">
                    {filterData.map((v) => {
                        const categoryName = getCategoryNameById(v.category_id);
                        const subcategoryName = getSubcategoryNameById(v.subcategory_id);

                        return (
                            <div className="row" key={v._id}>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="zoom-area">
                                        <div className="main-image">
                                            <img
                                                className="img-fluid drift-demo-trigger"
                                                src={matchingObjects[0].avatar[activeImageIndex].url}
                                                alt="Zoom Image"
                                            />
                                        </div>
                                        <div id="gallery" className="u-s-m-t-10">
                                            {matchingObjects[0].avatar.map((image, i) => (
                                                <a
                                                    key={i}
                                                    className={activeImageIndex === i ? 'active' : ''}
                                                    onClick={() => handleImageClick(i)}
                                                >
                                                    <img src={image.url} alt={`Product Thumbnail ${i + 1}`} />
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="all-information-wrapper">
                                        <div className="section-1-title-breadcrumb-rating">
                                            <div className="product-title">
                                                <h1>
                                                    <a href="single-product.html">{v.name}</a>
                                                </h1>
                                            </div>
                                            <ul className="bread-crumb">
                                                <li className="has-separator">
                                                    <a href="home.html">Home</a>
                                                </li>
                                                <li className="has-separator">
                                                    <a href="shop-v1-root-category.html">{categoryName}</a>
                                                </li>
                                                <li className="is-marked">
                                                    <a href="shop-v3-sub-sub-category.html">{subcategoryName}</a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="section-2-short-description u-s-p-y-14">
                                            <h6 className="information-heading u-s-m-b-8">Description:</h6>
                                            <p>{v.description}</p>
                                        </div>

                                        <div className="section-3-price-original-discount u-s-p-y-14">
                                            <div className="price">
                                                <h4>${v.price}</h4>
                                            </div>
                                            <div className="original-price" style={{ color: 'gray' }}>
                                                <h4>${v.mrp}</h4>
                                            </div>
                                            <div className="discount-price">
                                                <h4>({Math.round((v.mrp - v.price) * 100 / v.mrp)}% off)</h4>
                                            </div>
                                        </div>

                                        <div className="section-4-sku-information u-s-p-y-14">
                                            <h6 className="information-heading u-s-m-b-8">Sku Information:</h6>
                                            <div className="availability">
                                                <span>Availability:</span>
                                                {v.sizesAndStocks.some((sizeOption) => sizeOption.stock > 0) ? (
                                                    <span>In Stock</span>
                                                ) : (
                                                    <span>Out of Stock</span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="section-5-product-variants u-s-p-y-14">
                                            <div className="sizes u-s-m-b-11">
                                                <span>Available Size:</span>
                                                <div className="size-variant select-box-wrapper">
                                                    <select className="select-box product-size">
                                                        {
                                                            v.sizesAndStocks.map((sizeOption, index) => (
                                                                <option key={index}>{sizeOption.size}</option>
                                                            ))
                                                        }
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
                                                        <input
                                                            type="text"
                                                            className="quantity-text-field"
                                                            value={1}
                                                        />

                                                        <a className="plus-a">
                                                            +
                                                        </a>
                                                        <a className="minus-a">
                                                            -
                                                        </a>
                                                    </div>
                                                </div>
                                                <div>

                                                    <button className="button button-outline-secondary" type="submit">Add to cart</button>
                                                    <button className="button button-outline-secondary far fa-heart u-s-m-l-6" />
                                                </div>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="row">
                {/* <div className="col-lg-12 col-md-12 col-sm-12"> */}
                <div className="detail-tabs-wrapper u-s-p-t-80">
                    <div className="specification-whole-container">
                        <div className="spec-table u-s-m-b-50">
                            <h4 className="spec-heading">Product Information</h4>
                            <table>
                                <tbody>
                                    <tr>
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
                                        <td>Shipping Weight (kg)</td>
                                        <td>0.5</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>

        </div>
    );
}

export default ShopDetail;
