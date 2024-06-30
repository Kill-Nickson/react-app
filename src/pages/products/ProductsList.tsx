import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { Button } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { productsList } from '@store-services/products/productsSlice';
import ROUTE from '@utils/enums';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'category', headerName: 'Category', width: 130 },
    { field: 'quantity', headerName: 'Quantity', width: 90 },
    { field: 'score', headerName: 'Score', sortable: true, width: 70 },
    {
        field: "actions",
        headerName: "Actions",
        sortable: false,
        flex: 1,
        headerAlign: 'center',
        align: 'right',
        renderCell: (params: GridRenderCellParams) => {
            const productId = params.row.id;
            return (
                <Link to={ROUTE.PRODUCT_EDIT.replace(`:id`, productId)}>
                    <Button variant="outlined" color="success">Edit</Button>
                </Link>
            );
        },
    },
];

const ProductsList = () => {
    const dispatch = useAppDispatch();
    const { products, status } = useAppSelector(
        (state) => state.persistedReducer.products,
    );

    const [errorRes, setErrorRes] = useState({ errorText: '', waiting: false })

    useEffect(() => {
        setErrorRes(prevState => ({ ...prevState, waiting: true }));

        dispatch(productsList({}))
            .unwrap()
            .catch(({ detail }) => {
                console.log(detail);
                setErrorRes(prevState => ({ ...prevState, errorText: detail }));
            })
            .finally(() => {
                setErrorRes(prevState => ({ ...prevState, waiting: false }));
            });
    }, []);

    return (
        <div style={{ height: 400, width: '100%' }}>
            <h1>ProductsList</h1>
            <DataGrid
                rows={products}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection={false}
                disableColumnMenu
                disableColumnResize
                disableColumnFilter
                disableColumnSorting
            />
        </div>
    );
};

export default ProductsList;
