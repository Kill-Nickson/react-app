import { useFormik } from "formik";
import { ProductSchema, productInitialValues } from "@utils/validators/ProductSchema";
import CustomSnackbar from "@components/base/CustomSnackbar";
import { useState } from "react";
import CustomFadeButton from "@components/base/CustomFadeButton";
import ProductNameInput from "@components/products/ProductEditInputs/ProductNameInput";
import ProductQuantityInput from "@components/products/ProductEditInputs/ProductQuantityInput";
import ProductCategoryInput from "@components/products/ProductEditInputs/ProductCategoryInput";
import ApiService from "@/openapi/apiService";
import { CircularProgress } from "@mui/material";
import ProductBarcodeInput from "@components/products/ProductEditInputs/ProductBarcodeInput";
import ProductDescriptionInput from "@components/products/ProductEditInputs/ProductDescriptionInput";
import ProductIngredientsInput from "@components/products/ProductEditInputs/ProductIngredientsInput";
import { ProductsApiProductsCreateRequest } from "@/openapi";
import { useNavigate } from "react-router-dom";
import ROUTE from "@utils/enums";
import { useTranslation } from "react-i18next";


const ProductCreate = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<{ message: string; error: boolean }>({
    message: '',
    error: false,
  });

  const createProduct = (values: Omit<ProductsApiProductsCreateRequest, 'id'>) => {
    setIsLoading(true);

    ApiService.products().productsCreate(values)
      .catch((error) => {
        Object.entries(error.response.data).forEach(([errorField, errorMessage]: [string, any]) => {
          formik.setFieldError(errorField, errorMessage[0]);
        })
      })
      .then((response) => {
        if (response?.data?.id) {
          navigate(`${ROUTE.PRODUCT_EDIT.replace(':id', response.data.id.toString())}`);
        }
      })
      .finally(() => {
        setIsLoading(false);
      })
  };

  const formik = useFormik({
    initialValues: productInitialValues,
    onSubmit: (values) => {
      createProduct(values);
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
      <h1>{ t('products.products_create.product_create') }</h1>

      <form
        className='mt-3 ml-4 w-[300px] flex flex-col justify-center items-center'
        onSubmit={formik.handleSubmit}
      >
        <ProductNameInput formik={formik} margin='normal' />
        <ProductQuantityInput formik={formik} margin='normal' />
        <ProductCategoryInput formik={formik} variant={"outlined"} />
        <ProductBarcodeInput formik={formik} margin='normal' />
        <ProductDescriptionInput formik={formik} margin='normal' />
        <ProductIngredientsInput formik={formik} margin='normal' />

        <CustomFadeButton className='mt-10' type='submit' children={ t('products.products_create.create') } />
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

export default ProductCreate;