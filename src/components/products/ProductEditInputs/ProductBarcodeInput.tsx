import CustomTextField from "@components/base/CustomTextField"
import { StandardTextFieldProps } from "@mui/material";
import { ProductFormValues } from "@utils/validators/ProductSchema";
import { FormikProps } from "formik";
import { useTranslation } from "react-i18next";

interface Props extends StandardTextFieldProps {
    formik: FormikProps<ProductFormValues>;
}

const ProductBarcodeInput = ({ formik, ...props }: Props) => {
    const { t } = useTranslation();

    return (
        <CustomTextField
            name='barcode'
            label={ t('products.products_edit.barcode') }
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