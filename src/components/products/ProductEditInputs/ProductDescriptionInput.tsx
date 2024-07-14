import CustomTextField from "@components/base/CustomTextField"
import { StandardTextFieldProps } from "@mui/material";
import { ProductFormValues } from "@utils/validators/ProductSchema";
import { FormikProps } from "formik";

interface Props extends StandardTextFieldProps {
    formik: FormikProps<ProductFormValues>;
}

const ProductDescriptionInput = ({ formik, ...props }: Props) => {
    return (
        <CustomTextField
            name='description'
            label={'Description'}
            value={formik.values.description}
            onChange={formik.handleChange}
            error={!!formik.errors.description}
            helperText={!!formik.errors.description && formik.errors.description}
            placeholder='Enter description...'
            {...props}
        />
    )
}

export default ProductDescriptionInput;