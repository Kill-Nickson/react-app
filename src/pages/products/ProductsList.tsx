import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { Button } from '@mui/material';
import { DataGrid, GridColDef, GridPaginationModel, GridRenderCellParams } from '@mui/x-data-grid';
import { productsList } from '@store-services/products/productsSlice';
import ROUTE from '@utils/enums';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ProductsList = () => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const { products, status, count } = useAppSelector((state) => state.persistedReducer.products);
    const [page, setPage] = useState(0);
    const controllerRef = useRef<AbortController>();
    
    const PER_SIZE = 10;

    useEffect(() => {
        fetchData(page, PER_SIZE);
    }, [page]);

    const fetchData = async (page: number, perPage: number) => {
        if (controllerRef.current) {
            controllerRef.current.abort();
        }

        controllerRef.current = new AbortController();
        const signal = controllerRef.current.signal;

        dispatch(productsList({
            requestDto: { page: page + 1, perPage: perPage },
            signal
        }))
    }

    const handlePageChange = (params: GridPaginationModel) => {
        setPage(params.page);
    };

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'name', headerName: t('products.products_list.name'), width: 130 },
        { field: 'category', headerName: t('products.products_list.category'), width: 130 },
        { field: 'quantity', headerName: t('products.products_list.quantity'), width: 90 },
        { field: 'score', headerName: t('products.products_list.score'), sortable: true, width: 90 },
        {
            field: "actions",
            headerName: t('products.products_list.actions'),
            sortable: false,
            flex: 1,
            headerAlign: 'center',
            align: 'right',
            renderCell: (params: GridRenderCellParams) => {
                const productId = params.row.id;
                return (
                    <Link to={`${ROUTE.PRODUCT_EDIT.replace(':id', productId.toString())}`}>
                        <Button variant="outlined" color="success">{ t('products.products_list.edit') }</Button>
                    </Link>
                );
            },
        },
    ];

    return (
        <>
            <div className="flex items-center">
                <h1 className="mr-auto">{ t('products.products_list.products_list') }</h1>
                <Link to={ROUTE.PRODUCT_CREATE} className="ml-4">
                    <Button variant="contained" color="success">{ t('products.products_list.create') }</Button>
                </Link>
            </div>
            <DataGrid
                className={'mt-3'}
                style={{ 'height': `calc(100% - ${35}px)` }}
                rows={status === 'loading' ? [] : products}
                columns={columns}
                loading={status === 'loading'}
                pagination
                paginationMode="server"
                rowCount={count}
                paginationModel={{ pageSize: PER_SIZE, page }}
                pageSizeOptions={[PER_SIZE]}
                onPaginationModelChange={handlePageChange}
                checkboxSelection={false}
                disableColumnMenu
                disableColumnResize
                disableColumnFilter
                disableColumnSorting
            />
        </>
    );
};

export default ProductsList;
