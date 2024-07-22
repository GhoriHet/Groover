import React from 'react';
import * as yup from "yup";
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import IconButton from '@mui/material/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory } from '../../../../Redux/Slice/AddCategory';
import { fetchSubcategory } from '../../../../Redux/Slice/AddSubcategorySlice';
import { deleteProduct, fetchProduct, postProduct } from '../../../../Redux/Slice/AddProductSlice';
import { useFormik } from 'formik';

function AddProduct(props) {
    const [open, setOpen] = React.useState(false);
    const [fileInputs, setFileInputs] = React.useState([0]);
    const [category, setCategory] = React.useState('');
    const [subcategory, setSubcategory] = React.useState([]);
    const [update, setUpdate] = React.useState(false);
    const [sizesAndStocks, setSizesAndStocks] = React.useState([{ size: null, stock: null }])

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
        formik.resetForm();
        setFileInputs([0]);
    }
    const handleAddSizeAndStock = () => {
        setSizesAndStocks(prevState => [
            ...prevState,
            { size: '', stock: '' }
        ]);
        formik.setFieldValue('sizesAndStocks', [...sizesAndStocks, { size: '', stock: '' }]);
    }
    const ProductValidation = yup.object({
        category_id: yup.string().required(),
        subcategory_id: yup.string().required(),
        sku: yup.number().required(),
        name: yup.string().min(2, 'Name must be at least 2 characters').required(),
        description: yup.string().min(2, 'Description must be at least 2 characters').required(),
        color: yup.string().required(),
        weight: yup.number().required(),
        mrp: yup.number().required(),
        price: yup.number().required(),
        avatar: yup.array().of(yup.mixed().required()).min(1, 'At least one image is required').required(),
    });

    const formik = useFormik({
        initialValues: { category_id: "", subcategory_id: "", sku: "", name: "", description: "", color: "", weight: "", mrp: "", price: "", avatar: [], sizesAndStocks: [{ size: '', stock: '' }] },
        validationSchema: ProductValidation,
        onSubmit: async (values) => {
            const formData = new FormData();

            formData.append('category_id', values.category_id);
            formData.append('subcategory_id', values.subcategory_id);
            formData.append('sku', values.sku);
            formData.append('name', values.name);
            formData.append('description', values.description);
            formData.append('color', values.color);
            formData.append('weight', values.weight);
            formData.append('mrp', values.mrp);
            formData.append('price', values.price);
            values.avatar.forEach(file => {
                formData.append('avatar', file);
            });

            const sizesAndStocks = values.sizesAndStocks || [];
            sizesAndStocks.forEach((value, index) => {
                formData.append(`sizesAndStocks[${index}][size]`, value.size);
                formData.append(`sizesAndStocks[${index}][stock]`, value.stock);
            });

            await dispatch(postProduct(formData));

            await dispatch(fetchProduct());
            handleClose();
        }
    });

    const handleSizeChange = (e, index) => {
        const updatedSizesAndStocks = [...sizesAndStocks];
        updatedSizesAndStocks[index] = {
            ...updatedSizesAndStocks[index],
            size: e.target.value
        };
        setSizesAndStocks(updatedSizesAndStocks);
        formik.setFieldValue(`sizesAndStocks[${index}].size`, e.target.value);
    };

    const handleStockChange = (e, index) => {
        const stockValue = parseInt(e.target.value);
        if (!isNaN(stockValue) && stockValue >= 0) {
            const updatedSizesAndStocks = [...sizesAndStocks];
            updatedSizesAndStocks[index] = {
                ...updatedSizesAndStocks[index],
                stock: stockValue
            };
            setSizesAndStocks(updatedSizesAndStocks);
            formik.setFieldValue(`sizesAndStocks[${index}].stock`, stockValue);
        }
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
            field: 'category_id', headerName: 'CName', width: 180,
            renderCell: (params) => {
                const fData = categoryDataFetch.data.filter((v) => v._id === params.row.category_id);
                return fData.length > 0 ? fData[0].category_name : null;
            }
        },
        {
            field: 'subcategory_id', headerName: 'SName', width: 150,
            renderCell: (params) => {
                const fData = subcategoryDataFetch.data.filter((v) => v._id === params.row.subcategory_id);
                return fData.length > 0 ? fData[0].subcategory_name : null;
            }
        },
        { field: 'name', headerName: 'PName', width: 180 },
        { field: 'description', headerName: 'PDesc', width: 300 },
        {
            field: "action", headerName: "Action", flex: 1, sortable: false, disableColumnMenu: true,
            renderCell: (params) => {
                return (
                    <>
                        <IconButton aria-label="edit" type='button' onClick={() => handleUpdate(params.row)} >
                            <EditIcon sx={{ fontSize: '20px' }} />
                        </IconButton>
                        <IconButton aria-label="delete" type='button' onClick={() => handleDelete(params.row.id)} >
                            <DeleteIcon sx={{ fontSize: '20px' }} />
                        </IconButton>
                    </>
                )
            }
        }
    ];

    const handleUpdate = async (data) => {
        console.log(data)
    }

    const handleDelete = async (productId) => {
        await dispatch(deleteProduct(productId));
        await dispatch(fetchProduct());
    }

    const rows = Array.isArray(productDataFetch?.data) ? productDataFetch.data.map((product, index) => ({
        id: product._id || index + 1,
        category_id: product.category_id,
        subcategory_id: product.subcategory_id,
        name: product.name,
        description: product.description,
        sku: product.sku,
        color: product.color,
        weight: product.weight,
        mrp: product.mrp,
        price: product.price,
        avatar: product.avatar || [],
        created_at: product.created_at || new Date().toISOString(),
    })) : [];

    React.useEffect(() => {
        if (!update && formik.values.avatar.length > 0 && fileInputs.length === formik.values.avatar.length) {
            setFileInputs([...fileInputs, fileInputs.length]);
        }
    }, [formik.values.avatar, fileInputs]);

    const handleSub = (value) => {
        setCategory(value);

        const finalData = subcategoryDataFetch?.data.filter((v) => v.category_id === value);

        setSubcategory(finalData);
    }

    const { handleBlur, handleChange, handleSubmit, touched, errors, values, setFieldValue } = formik;

    return (
        <>
            <div className='d-flex align-items-center justify-content-between' style={{ marginTop: '75px' }}>
                <h3 className='mb-0' style={{ color: '#FF6337' }}>Add Product</h3>
                <Button type="button" variant="contained" onClick={handleClickOpen}>Add Product <AddIcon fontSize="small" /></Button>
            </div>
            <Dialog id='addModal' open={open}>
                <DialogTitle style={{ fontSize: '24px', fontWeight: 'bold', color: '#707070', fontFamily: 'Poppins' }} className='px-5 pt-4 pb-0 text-center'>Add Product</DialogTitle>
                <DialogContent className='px-5 pb-4'>
                    <form className='row' onSubmit={handleSubmit} style={{ width: "500px" }}>

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

                        <div className="col-6 mb-3 form_field position-relative">
                            <TextField className='m-0' margin="dense" id="name" label="Name" type="text" fullWidth name='name' variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            {errors.name && touched.name ? (
                                <span className="d-block position-absolute form-error">{errors.name}</span>
                            ) : null}
                        </div>

                        <div className="col-6 mb-3 form_field position-relative">
                            <TextField className='m-0' margin="dense" id="sku" label="SKU" type="number" fullWidth name='sku' variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.sku}
                            />
                            {errors.sku && touched.sku ? (
                                <span className="d-block position-absolute form-error">{errors.sku}</span>
                            ) : null}
                        </div>

                        <div className="col-12 mb-3 form_field position-relative">
                            <TextField className='m-0' margin="dense" id="description" label="Description" type="text" fullWidth multiline rows={3} name='description' variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.description}
                            />
                            {errors.description && touched.description ? (
                                <span className="d-block position-absolute form-error">{errors.description}</span>
                            ) : null}
                        </div>

                        <div className="col-6 mb-3 form_field position-relative">
                            <TextField className='m-0' margin="dense" id="color" label="Color" type="text" fullWidth name='color' variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.color}
                            />
                            {errors.color && touched.color ? (
                                <span className="d-block position-absolute form-error">{errors.color}</span>
                            ) : null}
                        </div>

                        <>
                            {/* Labels for Size and Stock */}
                            <div className='col-4' >
                                {/* <label htmlFor={ecommerce-product-size}>Size</label> */}
                                <label className="form-label" htmlFor={`ecommerce-product-size`}>Size</label>
                            </div>
                            <div className='col-4'>
                                {/* <label htmlFor={ecommerce-product-stock}>Stock</label> */}
                                <label className="form-label" htmlFor={`ecommerce-product-stock`}>Stock</label>
                            </div>


                            {sizesAndStocks.map((input, index) => (
                                <div style={{ display: 'flex', margin: '5px 0', height: '39px' }} key={index}>

                                    {/* Sizes */}
                                    <div className='col-4 mb-3' style={{ margin: "0 5px", width: '140px' }}>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id={`ecommerce-product-size-${index}`}
                                            placeholder="Size"
                                            name={`sizesAndStocks[${index}].size`}
                                            aria-label="Product size"
                                            value={input.size}
                                            onChange={e => handleSizeChange(e, index)}
                                            onBlur={handleBlur}
                                            required
                                        />
                                        {/* {errors.sizesAndStocks?.[index]?.size && <p>{errors.sizesAndStocks[index].size}</p>} */}
                                    </div>
                                    {/* Stock */}
                                    <div className='col-4 mb-3' style={{ margin: "0 5px", width: '140px' }}>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id={`ecommerce-product-stock-${index}`}
                                            placeholder="Stock"
                                            name={`sizesAndStocks[${index}].stock`}
                                            aria-label="Product stock"
                                            value={input.stock}
                                            onChange={e => handleStockChange(e, index)}
                                            onBlur={handleBlur}
                                            required
                                        />
                                        {/* {errors.sizesAndStocks?.[index]?.stock && <p>{errors.sizesAndStocks[index].stock}</p>} */}
                                    </div>
                                </div>
                            ))}
                            {/* Add Button */}
                            <div className="addButtonContainer">
                                <Button className="addButton" variant="contained" onClick={handleAddSizeAndStock}>
                                    <ArrowForwardIcon />
                                </Button>
                            </div>
                        </>

                        <div className="col-6 mb-3 form_field position-relative">
                            <TextField className='m-0' margin="dense" id="weight" label="Weight" type="number" fullWidth name='weight' variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.weight}
                            />
                            {errors.weight && touched.weight ? (
                                <span className="d-block position-absolute form-error">{errors.weight}</span>
                            ) : null}
                        </div>

                        <div className="col-6 mb-3 form_field position-relative">
                            <TextField className='m-0' margin="dense" id="mrp" label="MRP" type="number" fullWidth name='mrp' variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.mrp}
                            />
                            {errors.mrp && touched.mrp ? (
                                <span className="d-block position-absolute form-error">{errors.mrp}</span>
                            ) : null}
                        </div>

                        <div className="col-6 mb-3 form_field position-relative">
                            <TextField className='m-0' margin="dense" id="price" label="Price" type="number" fullWidth name='price' variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.price}
                            />
                            {errors.price && touched.price ? (
                                <span className="d-block position-absolute form-error">{errors.price}</span>
                            ) : null}
                        </div>

                        <div className='addProduct' style={{ paddingLeft: 65 }}>
                            {fileInputs.map((input, index) => (
                                <div key={input}>
                                    <input
                                        type='file'
                                        name='avatar'
                                        id={`fileInput${input}`}
                                        onChange={(event) => {
                                            const files = Array.from(event.currentTarget.files);
                                            const newAvatarArray = [...values.avatar];
                                            newAvatarArray[index] = files[0];
                                            setFieldValue('avatar', newAvatarArray);
                                        }}
                                        style={{ display: 'none' }}
                                    />
                                    <label htmlFor={`fileInput${input}`} className="file-input-label">
                                        {values.avatar[index] ? 'Change Image' : 'Choose Image'}
                                    </label>

                                    {values.avatar[index] && (
                                        <div className="img-container" style={{ margin: '0 11px' }}>
                                            <img
                                                src={URL.createObjectURL(values.avatar[index])}
                                                id='selected-image'
                                                alt={`Preview ${index}`}
                                            />
                                        </div>
                                    )}
                                    {errors.avatar && touched.avatar ? (
                                        <span className="d-block position-absolute form-error">{errors.avatar}</span>
                                    ) : null}
                                </div>
                            ))}
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