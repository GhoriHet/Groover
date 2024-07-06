import React from 'react';
import Layout from '../container/admin/component/Layout';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../container/admin/container/Dashboard';

function AdminRoutes(props) {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Dashboard />} />
            </Routes>
        </Layout>
    );
}

export default AdminRoutes;