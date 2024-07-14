import { useFormik } from "formik";
import { ProductSchema, productInitialValues } from "@utils/validators/ProductSchema";
import CustomSnackbar from "@components/base/CustomSnackbar";
import { useEffect, useState } from "react";
import CustomFadeButton from "@components/base/CustomFadeButton";
import ProductNameInput from "@components/products/ProductEditInputs/ProductNameInput";
import ProductQuantityInput from "@components/products/ProductEditInputs/ProductQuantityInput";
import ProductCategoryInput from "@components/products/ProductEditInputs/ProductCategoryInput";
import ApiService from "@/openapi/apiService";
import { Params, useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import ProductBarcodeInput from "@components/products/ProductEditInputs/ProductBarcodeInput";
import ProductDescriptionInput from "@components/products/ProductEditInputs/ProductDescriptionInput";
import ProductIngredientsInput from "@components/products/ProductEditInputs/ProductIngredientsInput";
import { ProductsApiProductsPartialUpdateRequest } from "@/openapi";
import { useTranslation } from "react-i18next";

const ProductEdit = () => {
  const { t } = useTranslation();
  const { id } = useParams<Params>();
  const [open, setOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<{ message: string; error: boolean }>({
    message: '',
    error: false,
  });

  useEffect(() => {
    fetchProductData();
  }, [])

  const fetchProductData = () => {
    setIsLoading(true);
    ApiService.products().productsRead({ id: id! })
      .then((response) => {
        const keysToSet = Object.keys(productInitialValues);

        Object.entries(response.data).map(([key, value]) => {
          if (keysToSet.includes(key)) {
            formik.setFieldValue(key, value);
          }
        });
      })
      .finally(() => {
        setIsLoading(false);
      })
  };

  const updateProductData = (values: Omit<ProductsApiProductsPartialUpdateRequest, 'id'>) => {
    setIsLoading(true);

    const updatedValues = Object.fromEntries(
      Object.entries(values).filter(([_, value]) => value !== null)
    )
    ApiService.products().productsPartialUpdate({ ...updatedValues, id: id! })
      .then((response) => {
        const keysToSet = Object.keys(productInitialValues);

        Object.entries(response.data).map(([key, value]) => {
          if (keysToSet.includes(key)) {
            formik.setFieldValue(key, value);
          }
        });
      })
      .finally(() => {
        setIsLoading(false);
      })
  };

  const formik = useFormik({
    initialValues: productInitialValues,
    onSubmit: (values) => {
      updateProductData(values);
      setStatusMessage({ message: 'test message', error: false });
      setOpen(true);
    },
    validateOnBlur: false,
    validateOnChange: false,
    validateOnMount: false,
    validationSchema: ProductSchema
  });

  return (
    <div>
      <h1>{ t('products.products_edit.product_edit') }</h1>

      <form
        className='mt-3 ml-4 w-[300px] flex flex-col justify-center items-center'
        onSubmit={formik.handleSubmit}
      >
        <ProductNameInput formik={formik} margin='normal' />
        <ProductQuantityInput formik={formik} margin='normal' />
        <ProductCategoryInput formik={formik} margin='dense' />
        <ProductBarcodeInput formik={formik} margin='normal' />
        <ProductDescriptionInput formik={formik} margin='normal' />
        <ProductIngredientsInput formik={formik} margin='normal' />

        <CustomFadeButton className='mt-10' type='submit' children={ t('products.products_edit.update') } />
        <CustomSnackbar open={open} onClose={setOpen} message={statusMessage.message} severity={statusMessage.error ? 'error' : 'success'} />
      </form>
      {isLoading && (
        <div className='absolute inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50'>
          <CircularProgress />
        </div>
      )}
    </div>
  )
}

export default ProductEdit