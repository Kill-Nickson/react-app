import CustomTextField from "@components/base/CustomTextField"
import { StandardTextFieldProps } from "@mui/material";
import { ProductFormValues } from "@utils/validators/ProductSchema";
import { FormikProps } from "formik";

interface Props extends StandardTextFieldProps {
    formik: FormikProps<ProductFormValues>;
}


const ProductQuantityInput = ( { formik, ...props }: Props ) => {
    return (
        <CustomTextField
            name='quantity'
            label={'Quantity'}
            value={ formik.values.quantity }
            onChange={formik.handleChange}
            error={!!formik.errors.quantity}
            helperText={!!formik.errors.quantity && formik.errors.quantity}
            placeholder='Enter quantity...'
            { ...props }
        />
    )
}

export default ProductQuantityInput