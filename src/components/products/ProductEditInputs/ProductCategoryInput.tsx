import CustomTextField from "@components/base/CustomTextField"
import { StandardTextFieldProps } from "@mui/material";
import { ProductFormValues } from "@utils/validators/ProductSchema";
import { FormikProps } from "formik";

interface Props extends StandardTextFieldProps {
    formik: FormikProps<ProductFormValues>;
};


const ProductCategoryInput = ( { formik, ...props }: Props ) => {
    return (
        <CustomTextField
            name='category'
            label={'Category'}
            value={ formik.values.category }
            onChange={formik.handleChange}
            error={!!formik.errors.category}
            helperText={!!formik.errors.category && formik.errors.category}
            placeholder='Enter category...'
            { ...props }
        />
    )
}

export default ProductCategoryInput