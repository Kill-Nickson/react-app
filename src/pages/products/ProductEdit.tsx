import { useFormik } from "formik";
import { ProductSchema, productInitialValues } from "@utils/validators/ProductSchema";
import CustomSnackbar from "@components/base/CustomSnackbar";
import { useState } from "react";
import CustomFadeButton from "@components/base/CustomFadeButton";
import ProductNameInput from "@components/products/ProductEditInputs/ProductNameInput";
import ProductQuantityInput from "@components/products/ProductEditInputs/ProductQuantityInput";
import ProductCategoryInput from "@components/products/ProductEditInputs/ProductCategoryInput";

const ProductEdit = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<{ message: string; error: boolean }>({
    message: '',
    error: false,
  });

  const { data: res, isFetching } = (() => {
    return {
      data: {
        name: '',
      }, isFetching: true
    };
  })();

  console.log(res);

  const formik = useFormik({
    initialValues: productInitialValues,
    onSubmit: (values) => {
      console.log(values);
      setStatusMessage({ message: 'test message', error: false });
      setOpen(true);
    },
    enableReinitialize: !isFetching,
    validateOnBlur: false,
    validateOnChange: false,
    validateOnMount: false,
    validationSchema: ProductSchema
  });

  return (
    <>
      <h1>ProductEdit</h1>

      <form
        className='mt-10 ml-4 w-[300px] flex flex-col justify-center items-center'
        onSubmit={formik.handleSubmit}
      >
        <ProductNameInput formik={formik} margin='normal' />
        <ProductQuantityInput formik={formik} margin='normal' />
        <ProductCategoryInput formik={formik} margin='normal' />

        <CustomFadeButton className='mt-10' type='submit' children='Update' />
        <CustomSnackbar open={open} onClose={setOpen} message={statusMessage.message} severity={statusMessage.error ? 'error' : 'success'} />
      </form>
    </>

  )
}

export default ProductEdit