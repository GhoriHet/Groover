import React from 'react';
import Layout from '../container/admin/component/Layout';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../container/admin/container/Dashboard';
import AddCategory from '../container/admin/container/Add_Category/AddCategory';
import AddSubcategory from '../container/admin/container/Add_Subcategory/AddSubcategory';
import AddProduct from '../container/admin/container/Add_Product/AddProduct';

function AdminRoutes(props) {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/add-category' element={<AddCategory />} />
                <Route path='/add-subcategory' element={<AddSubcategory />} />
                <Route path='/add-product' element={<AddProduct />} />
            </Routes>
        </Layout>
    );
}

export default AdminRoutes;