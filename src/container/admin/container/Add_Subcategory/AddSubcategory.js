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
import { useDispatch, useSelector } from 'react-redux';
import { deleteSubcategory, fetchSubcategory, postSubcategory } from '../../../../Redux/Slice/AddSubcategorySlice';
import { fetchCategory } from '../../../../Redux/Slice/AddCategory';
import { useFormik } from 'formik';

function AddSubcategory(props) {
    const [open, setOpen] = React.useState(false);
    const [fileInputs, setFileInputs] = React.useState([0]);
    const [update, setUpdate] = React.useState(false);

    const dispatch = useDispatch();

    const subcateoryDataFetch = useSelector((state => state.subcategory?.data));
    const categoryDataFetch = useSelector((state => state.category?.data));

    React.useEffect(() => {
        dispatch(fetchCategory());
        dispatch(fetchSubcategory());
    }, [dispatch]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false)
        formik.resetForm()
        setFileInputs([0]);
        setUpdate(null);
    }

    const SubcategoryValidation = yup.object({
        category_id: yup.string().required(),
        subcategory_name: yup.string().min(2, 'Name must be at least 2 characters').required('Name is a required field'),
        subcategory_desc: yup.string().min(2, 'Description must be at least 2 characters').required('Description is a required field'),
        avatar: yup.array().of(yup.mixed().required()).min(1, 'At least one image is required').required('Avatar is required'),
    });

    const formik = useFormik({
        initialValues: { category_id: "", subcategory_name: "", subcategory_desc: "", avatar: [] },
        validationSchema: SubcategoryValidation,
        onSubmit: async (values) => {
            const formData = new FormData();
            formData.append('category_id', values.category_id);
            formData.append('subcategory_name', values.subcategory_name);
            formData.append('subcategory_desc', values.subcategory_desc);
            values.avatar.forEach(file => {
                formData.append('avatar', file);
            });

            await dispatch(postSubcategory(formData));

            await dispatch(fetchSubcategory());
            handleClose();
        }
    });

    React.useEffect(() => {
        if (!update && formik.values.avatar.length > 0 && fileInputs.length === formik.values.avatar.length) {
            setFileInputs([...fileInputs, fileInputs.length]);
        }
    }, [formik.values.avatar, fileInputs]);

    const columns = [
        { field: 'id', headerName: 'Subcategory ID', width: 260 },
        {
            field: 'category_id', headerName: 'Category Name', width: 150,
            renderCell: (params) => {
                const fData = categoryDataFetch.data.filter((v) => v._id === params.row.category_id);
                return fData.length > 0 ? fData[0].category_name : null;
            }
        },
        { field: 'subcategory_name', headerName: 'Name', width: 150 },
        { field: 'subcategory_desc', headerName: 'Desc', width: 150 },
        {
            field: 'avatar',
            headerName: 'Images',
            width: 220,
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

    const handleUpdate = async (data) => {
        console.log(data)
    }

    const handleDelete = async (subcategoryId) => {
        await dispatch(deleteSubcategory(subcategoryId));
        await dispatch(fetchSubcategory());
    }

    const rows = Array.isArray(subcateoryDataFetch?.data) ? subcateoryDataFetch.data.map((subcategory, index) => ({
        id: subcategory._id || index + 1,
        category_id: subcategory.category_id,
        subcategory_name: subcategory.subcategory_name,
        subcategory_desc: subcategory.subcategory_desc,
        avatar: subcategory.avatar || [],
        created_at: subcategory.created_at || new Date().toISOString(),
    })) : [];

    const { handleBlur, handleChange, handleSubmit, touched, errors, values, setFieldValue } = formik;

    return (
        <>
            <div className='d-flex align-items-center justify-content-between' style={{ marginTop: '75px' }}>
                <h3 className='mb-0' style={{ color: '#FF6337' }}>Add Subcategory</h3>
                <Button type="button" variant="contained" onClick={handleClickOpen}>Add Subcategory <AddIcon fontSize="small" /></Button>
            </div>
            <Dialog id='addModal' open={open}>
                <DialogTitle style={{ fontSize: '24px', fontWeight: 'bold', color: '#707070', fontFamily: 'Poppins' }} className='px-5 pt-4 pb-0 text-center'>Add Subcategory</DialogTitle>
                <DialogContent className='px-5 pb-4'>

                    <form className='row' onSubmit={handleSubmit} style={{ width: "500px" }}>
                        <div className="col-12 mb-3 form_field position-relative" style={{ marginTop: '25px' }}>
                            <div className='category_name' style={{ display: 'flex' }}>
                                <label style={{ paddingRight: '30px', paddingTop: '6px' }}><b>CATEGORY NAME:</b></label>
                                <select
                                    name="category_id"
                                    id="category_id"
                                    className="form-select"
                                    onChange={handleChange}
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

                        <div className="col-6 mb-3 form_field position-relative">
                            <TextField className='m-0' margin="dense" id="subcategory_name" label="Name" type="text" fullWidth name='subcategory_name' variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.subcategory_name}
                            />
                            {errors.subcategory_name && touched.subcategory_name ? (
                                <span className="d-block position-absolute form-error">{errors.subcategory_name}</span>
                            ) : null}
                        </div>

                        <div className="col-6 mb-3 form_field position-relative">
                            <TextField className='m-0' margin="dense" id="subcategory_desc" label="Description" type="text" fullWidth name='subcategory_desc' variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.subcategory_desc}
                            />
                            {errors.subcategory_desc && touched.subcategory_desc ? (
                                <span className="d-block position-absolute form-error">{errors.subcategory_desc}</span>
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
                            <Button type="submit" variant="contained">Submit</Button>
                        </div>

                    </form>
                </DialogContent>
            </Dialog >
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

export default AddSubcategory;