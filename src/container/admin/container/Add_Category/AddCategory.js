import React from 'react';
import * as yup from "yup";
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';
import { useFormik } from 'formik';
import { fetchCategory } from '../../../../Redux/Slice/AddCategory';
import { useDispatch, useSelector } from 'react-redux';

function AddCategory(props) {
    const [open, setOpen] = React.useState(false);

    const dispatch = useDispatch();

    const cateDataFetch = useSelector((state => state.category?.data?.data));
    console.log(cateDataFetch)

    React.useEffect(() => {
        dispatch(fetchCategory())
    }, [])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false)
        // formik.resetForm()
        // setUpdate(null);
    }

    const categoryValidation = yup.object({
        cate_name: yup.string().min(2, 'Name must be at least 2 characters').matches(/^[a-zA-Z. ]+$/, "name is invalid").required('Name is a required field'),
        cate_desc: yup.string().min(2, 'Description must be at least 2 characters').required('Description is a required field'),
        file: yup.mixed().required()
    });

    const formik = useFormik({
        initialValues: { cate_name: "", cate_desc: "", file: "" },
        validationSchema: categoryValidation,
        onSubmit: (values, action) => {
            console.log(values)
        }
    })

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

    const { handleBlur, handleChange, handleSubmit, touched, errors, values, setFieldValue } = formik;

    return (
        <>
            <div className='d-flex align-items-center justify-content-between' style={{ marginTop: '65px' }}>
                <h3 className='mb-0' style={{ color: '#FF6337' }}>Add Category</h3>
                <Button type="button" variant="contained" onClick={handleClickOpen}>Category <AddIcon fontSize="small" /></Button>
            </div>
            <Dialog id='addModal' open={open}>
                <DialogTitle style={{ fontSize: '24px', fontWeight: 'bold', color: '#707070', fontFamily: 'Poppins' }} className='px-5 pt-4 pb-0 text-center'>Add Category</DialogTitle>
                <DialogContent className='px-5 pb-4'>
                    <form className='row' onSubmit={handleSubmit} style={{ width: "500px", marginTop: '7px' }}>
                        <div className="col-6 mb-3 form_field position-relative">
                            <TextField className='m-0' margin="dense" id="cate_name" label="Category Name" type="text" fullWidth name='cate_name' variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.cate_name}
                            />
                            {errors.cate_name && touched.cate_name ? (
                                <span className="d-block position-absolute form-error">{errors.cate_name}</span>
                            ) : null}
                        </div>
                        <div className="col-6 mb-3 form_field position-relative">
                            <TextField className='m-0' margin="dense" id="cate_desc" label="Category Description" type="text" fullWidth name='cate_desc' variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.cate_desc}
                            />
                            {errors.cate_desc && touched.cate_desc ? (
                                <span className="d-block position-absolute form-error">{errors.cate_desc}</span>
                            ) : null}
                        </div>
                        <div className="col-6 mb-3 form_field position-relative">
                            <input type='file' name='file'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.file}
                            />
                            {errors.file && touched.file ? (
                                <span className="d-block position-absolute form-error">{errors.file}</span>
                            ) : null}
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

export default AddCategory;