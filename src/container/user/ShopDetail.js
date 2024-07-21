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
                                            <div className="original-price">
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
                                                {/* {v.size.some((sizeOption) => sizeOption.stock > 0) ? (
                                                    <span>In Stock</span>
                                                ) : (
                                                    <span>Out of Stock</span>
                                                )} */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default ShopDetail;
