import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubcategory } from '../../../../Redux/Slice/AddSubcategorySlice';
import { fetchCategory } from '../../../../Redux/Slice/AddCategory';

function AddSubcategory(props) {
    const [open, setOpen] = React.useState(false);

    const dispatch = useDispatch();

    const subcateoryDataFetch = useSelector((state => state.subcategory?.data?.data));
    console.log(subcateoryDataFetch, "{19-Subcategory}")

    const categoryDataFetch = useSelector((state => state.category?.data?.data));
    console.log(categoryDataFetch, "{22-Category}")

    React.useEffect(() => {
        dispatch(fetchCategory());
        dispatch(fetchSubcategory());
    }, [dispatch]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false)
        // formik.resetForm()
        // setUpdate(null);
    }

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
    return (
        <>
            <div className='d-flex align-items-center justify-content-between' style={{ marginTop: '75px' }}>
                <h3 className='mb-0' style={{ color: '#FF6337' }}>Add Subcategory</h3>
                <Button type="button" variant="contained" onClick={handleClickOpen}>Add Subcategory <AddIcon fontSize="small" /></Button>
            </div>
            <Dialog id='addModal' open={open}>
                <DialogTitle style={{ fontSize: '24px', fontWeight: 'bold', color: '#707070', fontFamily: 'Poppins' }} className='px-5 pt-4 pb-0 text-center'>Add Subcategory</DialogTitle>
                <DialogContent className='px-5 pb-4'>
                    <form className='row' style={{ width: "500px" }}>
                        <div className="col-6 mb-3 form_field position-relative">
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
                            <TextField className='m-0' margin="dense" id="mediDesc" label="Description" type="text" fullWidth name='medidesc' variant="standard"
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

export default AddSubcategory;