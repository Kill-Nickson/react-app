import CustomTextField from "@components/base/CustomTextField"
import { StandardTextFieldProps } from "@mui/material";
import { ProductFormValues } from "@utils/validators/ProductSchema";
import { FormikProps } from "formik";

interface Props extends StandardTextFieldProps {
    formik: FormikProps<ProductFormValues>;
}

const ProductIngredientsInput = ({ formik, ...props }: Props) => {
    return (
        <CustomTextField
            name='ingredients'
            label={'Ingredients'}
            value={formik.values.ingredients}
            onChange={formik.handleChange}
            error={!!formik.errors.ingredients}
            helperText={!!formik.errors.ingredients && formik.errors.ingredients}
            placeholder='Enter ingredients...'
            {...props}
        />
    )
}

export default ProductIngredientsInput;