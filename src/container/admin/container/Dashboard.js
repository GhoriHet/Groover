import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory } from '../../../Redux/Slice/AddCategory';
import { fetchSubcategory } from '../../../Redux/Slice/AddSubcategorySlice';
import { fetchProduct } from '../../../Redux/Slice/AddProductSlice';

function Dashboard(props) {

    const dispatch = useDispatch();

    const catDataFetch = useSelector((state => state.category?.data));
    const subcatDataFetch = useSelector((state => state.subcategory?.data));
    const proDataFetch = useSelector((state => state.product?.data));

    React.useEffect(() => {
        dispatch(fetchCategory());
        dispatch(fetchSubcategory());
        dispatch(fetchProduct());
    }, [dispatch])

    return (
        <div className="dash-content">
            <div className="overview">
                <div className="title">
                    <DashboardIcon style={{ marginRight: '18px', fontSize: '28px', color: '#707070' }} />
                    <span className="text">Dashboard</span>
                </div>
                <div className="boxes">
                    <div className="box box1">
                        {/* <i className="uil uil-thumbs-up" /> */}
                        <span className="text">Total Category</span>
                        <span className="number">{catDataFetch?.data?.length}</span>
                    </div>
                    <div className="box box2">
                        {/* <i className="uil uil-comments" /> */}
                        <span className="text">Total Subcategory</span>
                        <span className="number">{subcatDataFetch?.data?.length}</span>
                    </div>
                    <div className="box box3">
                        {/* <i className="uil uil-share" /> */}
                        <span className="text">Total Product</span>
                        <span className="number">{proDataFetch?.data?.length}</span>
                    </div>
                </div>
            </div>
            <div className="activity">
                <div className="title">
                    <DashboardIcon style={{ marginRight: '18px', fontSize: '28px', color: '#707070' }} />
                    <span className="text">Recent Activity</span>
                </div>
                <div className="activity-data">
                    <div className="data names">
                        <span className="data-title">Category Name</span>
                        <span className="data-list">{catDataFetch?.data?.map((v) => v.category_name)}</span>
                    </div>
                    <div className="data email">
                        <span className="data-title">Subcategory Name</span>
                        <span className="data-list">{subcatDataFetch?.data?.map((v) => v.subcategory_name)}</span>
                    </div>
                    <div className="data joined">
                        <span className="data-title">Product Name</span>
                        <span className="data-list">{proDataFetch?.data?.map((v) => v.name)}</span>
                    </div>
                    <div className="data type">
                        <span className="data-title">Supplier</span>
                        <span className="data-list">New</span>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Dashboard;