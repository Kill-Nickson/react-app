import CustomTextField from "@components/base/CustomTextField"
import { StandardTextFieldProps } from "@mui/material";
import { ProductFormValues } from "@utils/validators/ProductSchema";
import { FormikProps } from "formik";

interface Props extends StandardTextFieldProps {
    formik: FormikProps<ProductFormValues>;
}

const ProductBarcodeInput = ({ formik, ...props }: Props) => {
    return (
        <CustomTextField
            name='barcode'
            label={'Barcode'}
            value={formik.values.barcode}
            onChange={formik.handleChange}
            error={!!formik.errors.barcode}
            helperText={!!formik.errors.barcode && formik.errors.barcode}
            placeholder='Enter barcode...'
            {...props}
        />
    )
}

export default ProductBarcodeInput;