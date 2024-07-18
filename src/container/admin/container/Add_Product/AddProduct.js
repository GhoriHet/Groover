import React from 'react';
import * as yup from "yup";
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory } from '../../../../Redux/Slice/AddCategory';
import { fetchSubcategory } from '../../../../Redux/Slice/AddSubcategorySlice';
import { fetchProduct, postProduct } from '../../../../Redux/Slice/AddProductSlice';
import { useFormik } from 'formik';

function AddProduct(props) {
    const [open, setOpen] = React.useState(false);
    const [category, setCategory] = React.useState('');
    const [subcategory, setSubcategory] = React.useState([]);

    const dispatch = useDispatch();

    const categoryDataFetch = useSelector((state => state.category?.data));
    const subcategoryDataFetch = useSelector((state => state.subcategory?.data));
    const productDataFetch = useSelector((state => state.product?.data));

    React.useEffect(() => {
        dispatch(fetchCategory());
        dispatch(fetchSubcategory());
        dispatch(fetchProduct());
    }, [dispatch]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false)
        // formik.resetForm()
        // setUpdate(null);
    }

    const ProductValidation = yup.object({
        category_id: yup.string().required(),
        subcategory_name: yup.string().min(2, 'Name must be at least 2 characters').matches(/^[a-zA-Z. ]+$/, "name is invalid").required('Name is a required field'),
        subcategory_desc: yup.string().min(2, 'Description must be at least 2 characters').required('Description is a required field'),
        avatar: yup.array().of(yup.mixed().required()).min(1, 'At least one image is required').required('Avatar is required'),
    });

    const formik = useFormik({
        initialValues: { category_id: "", subcategory_name: "", subcategory_desc: "", avatar: [] },
        validationSchema: ProductValidation,
        onSubmit: async (values) => {
            const formData = new FormData();
            formData.append('category_id', values.category_id);
            formData.append('subcategory_name', values.subcategory_name);
            formData.append('subcategory_desc', values.subcategory_desc);
            values.avatar.forEach(file => {
                formData.append('avatar', file);
            });

            await dispatch(postProduct(formData));

            await dispatch(fetchProduct());
            handleClose();
        }
    });

    const { handleBlur, handleChange, handleSubmit, touched, errors, values, setFieldValue } = formik;

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 90,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
        },
    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];

    const handleSub = (value) => {
        setCategory(value);
        
        const finalData = subcategoryDataFetch?.data.filter((v) => v.category_id === value);

        setSubcategory(finalData);
    }

    return (
        <>
            <div className='d-flex align-items-center justify-content-between' style={{ marginTop: '75px' }}>
                <h3 className='mb-0' style={{ color: '#FF6337' }}>Add Product</h3>
                <Button type="button" variant="contained" onClick={handleClickOpen}>Add Product <AddIcon fontSize="small" /></Button>
            </div>
            <Dialog id='addModal' open={open}>
                <DialogTitle style={{ fontSize: '24px', fontWeight: 'bold', color: '#707070', fontFamily: 'Poppins' }} className='px-5 pt-4 pb-0 text-center'>Add Product</DialogTitle>
                <DialogContent className='px-5 pb-4'>
                    <form className='row' style={{ width: "500px" }}>

                        <div className="col-12 mb-3 form_field position-relative" style={{ marginTop: '25px' }}>
                            <div className='category_name' style={{ display: 'flex' }}>
                                <label style={{ paddingRight: '60px', paddingTop: '6px' }}><b>CATEGORY NAME:</b></label>
                                <select
                                    name="category_id"
                                    id="category_id"
                                    className="form-select"
                                    onChange={(e) => { handleChange(e); handleSub(e.target.value) }}
                                    onBlur={handleBlur}
                                    value={values.category_id}
                                    style={{ width: '200px', height: '35px', paddingLeft: '10px' }}
                                >

                                    <option value='0'>-- Select --</option>
                                    {
                                        categoryDataFetch.data?.map((value) => {
                                            return (
                                                <option key={value._id} value={value._id}>{value.category_name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>

                        <div className="col-12 mb-3 form_field position-relative" style={{ marginTop: '25px' }}>
                            <div className='category_name' style={{ display: 'flex' }}>
                                <label style={{ paddingRight: '30px', paddingTop: '6px' }}><b>SUBCATEGORY NAME:</b></label>
                                <select
                                    name="subcategory_id"
                                    id="subcategory_id"
                                    className="form-select"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.subcategory_id}
                                    style={{ width: '200px', height: '35px', paddingLeft: '10px' }}
                                >

                                    <option value='0'>-- Select --</option>
                                    {
                                        subcategory.map((value) => {
                                            return (
                                                <option key={value._id} value={value._id}>{value.subcategory_name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>

                        <div className="col-12 mb-3 form_field position-relative">
                            <TextField className='m-0' margin="dense" id="mediName" label="Name" type="text" fullWidth name='mediname' variant="standard"
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                            // value={values.mediname}
                            />
                            {/* {errors.mediname && touched.mediname ? (
                                <span className="d-block position-absolute form-error">{errors.mediname}</span>
                            ) : null} */}
                        </div>
                        <div className="col-6 mb-3 form_field position-relative">
                            <TextField className='m-0' margin="dense" id="mediPrice" label="Price" type="text" fullWidth name='mediprice' variant="standard"
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                            // value={values.mediprice}
                            />
                            {/* {errors.mediprice && touched.mediprice ? (
                                <span className="d-block position-absolute form-error">{errors.mediprice}</span>
                            ) : null} */}
                        </div>
                        <div className="col-6 mb-3 form_field position-relative">
                            <TextField className='m-0' margin="dense" id="mediExpiryDate" label=" " type="date" name='mediexpiry' fullWidth variant="standard"
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                            // value={values.mediexpiry}
                            />
                            {/* {errors.mediexpiry && touched.mediexpiry ? (
                                <span className="d-block position-absolute form-error">{errors.mediexpiry}</span>
                            ) : null} */}
                        </div>
                        <div className="col-12 mb-3 form_field position-relative">
                            <TextField className='m-0' margin="dense" id="mediDesc" label="Description" type="text" fullWidth multiline rows={3} name='medidesc' variant="standard"
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                            // value={values.medidesc}
                            />
                            {/* {errors.medidesc && touched.medidesc ? (
                                <span className="d-block position-absolute form-error">{errors.medidesc}</span>
                            ) : null} */}
                        </div>
                        <div className='pt-3 col-12 text-center'>
                            <Button className='me-3' onClick={handleClose}>Cancel</Button>
                            <Button type="submit" variant="contained">Submit</Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
            <div style={{ height: 400, width: '100%', marginTop: '50px' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                />
            </div>
        </>
    );
}

export default AddProduct;