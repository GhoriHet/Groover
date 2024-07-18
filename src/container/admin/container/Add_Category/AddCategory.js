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
import IconButton from '@mui/material/IconButton';
import { useFormik } from 'formik';
import { deleteCategory, fetchCategory, postCategory, putCategory } from '../../../../Redux/Slice/AddCategory';
import { useDispatch, useSelector } from 'react-redux';

function AddCategory(props) {
    const [open, setOpen] = React.useState(false);
    const [fileInputs, setFileInputs] = React.useState([0]);
    const [update, setUpdate] = React.useState(false);
    // const [currentCategory, setCurrentCategory] = React.useState(null);

    const dispatch = useDispatch();
    const cateDataFetch = useSelector(state => state.category?.data);

    React.useEffect(() => {
        dispatch(fetchCategory());
    }, [dispatch]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        formik.resetForm();
        setFileInputs([0]);
        setUpdate(false);
    }

    const categoryValidation = yup.object({
        category_name: yup.string().min(2, 'Name must be at least 2 characters').matches(/^[a-zA-Z. ]+$/, "name is invalid").required('Name is a required field'),
        category_desc: yup.string().min(2, 'Description must be at least 2 characters').required('Description is a required field'),
        avatar: yup.array().of(yup.mixed().required()).min(1, 'At least one image is required').required('Avatar is required'),
    });

    const formik = useFormik({
        initialValues: { category_name: "", category_desc: "", avatar: [] },
        validationSchema: categoryValidation,
        onSubmit: async (values) => {
            const formData = new FormData();
            formData.append('category_name', values.category_name);
            formData.append('category_desc', values.category_desc);
            values.avatar.forEach(file => {
                formData.append('avatar', file);
            });
            await dispatch(postCategory(formData));

            await dispatch(fetchCategory());
            handleClose();
        }
    });

    React.useEffect(() => {
        if (!update && formik.values.avatar.length > 0 && fileInputs.length === formik.values.avatar.length) {
            setFileInputs([...fileInputs, fileInputs.length]);
        }
    }, [formik.values.avatar, fileInputs]);

    const columns = [
        { field: 'id', headerName: 'Category ID', width: 290 },
        { field: 'category_name', headerName: 'Category Name', width: 150 },
        { field: 'category_desc', headerName: 'Category Description', width: 200 },
        {
            field: 'avatar',
            headerName: 'Images',
            width: 250,
            renderCell: (params) => (
                <div style={{ display: 'flex', gap: '5px' }}>
                    {params.value.map((image, index) => (
                        <img key={index} src={image.url} alt={`Image ${index + 1}`} style={{ width: 50, height: 50 }} />
                    ))}
                </div>
            ),
        },
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

    const handleUpdate = (data) => {
        console.log(data);
        // setCurrentCategory(data);
        // setUpdate(true);
        // setOpen(true);
    };

    const handleDelete = async (categoryId) => {
        await dispatch(deleteCategory(categoryId));
        await dispatch(fetchCategory());
    }

    const rows = Array.isArray(cateDataFetch?.data) ? cateDataFetch.data.map((category, index) => ({
        id: category._id || index + 1,
        category_name: category.category_name,
        category_desc: category.category_desc,
        avatar: category.avatar || [],
        created_at: category.created_at || new Date().toISOString(),
    })) : [];

    const { handleBlur, handleChange, handleSubmit, touched, errors, values, setFieldValue } = formik;

    return (
        <>
            <div className='d-flex align-items-center justify-content-between' style={{ marginTop: '75px' }}>
                <h3 className='mb-0' style={{ color: '#FF6337' }}>{update ? 'Update Category' : 'Add Category'}</h3>
                <Button type="button" variant="contained" onClick={handleClickOpen}>{update ? 'Update Category' : 'Add Category'} <AddIcon fontSize="small" /></Button>
            </div>
            <Dialog id='addModal' open={open} onClose={handleClose}>
                <DialogTitle style={{ fontSize: '24px', fontWeight: 'bold', color: '#707070', fontFamily: 'Poppins' }} className='px-5 pt-4 pb-0 text-center'>
                    {update ? 'Update Category' : 'Add Category'}
                </DialogTitle>
                <DialogContent className='px-5 pb-4'>
                    <form className='row' onSubmit={handleSubmit} style={{ width: "500px", marginTop: '7px' }}>

                        <div className="col-6 mb-3 form_field position-relative">
                            <TextField className='m-0' margin="dense" id="category_name" label="Category Name" type="text" fullWidth name='category_name' variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.category_name}
                            />
                            {errors.category_name && touched.category_name ? (
                                <span className="d-block position-absolute form-error">{errors.category_name}</span>
                            ) : null}
                        </div>

                        <div className="col-6 mb-3 form_field position-relative">
                            <TextField className='m-0' margin="dense" id="category_desc" label="Category Description" type="text" fullWidth name='category_desc' variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.category_desc}
                            />
                            {errors.category_desc && touched.category_desc ? (
                                <span className="d-block position-absolute form-error">{errors.category_desc}</span>
                            ) : null}
                        </div>

                        <div className='addProduct'>
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
                            <Button type="submit" variant="contained">{update ? 'Update' : 'Submit'}</Button>
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

export default AddCategory;
