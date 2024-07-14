import CustomTextField from "@components/base/CustomTextField"
import { StandardTextFieldProps } from "@mui/material";
import { ProductFormValues } from "@utils/validators/ProductSchema";
import { FormikProps } from "formik";
import { useTranslation } from "react-i18next";

interface Props extends StandardTextFieldProps {
    formik: FormikProps<ProductFormValues>;
}


const ProductQuantityInput = ( { formik, ...props }: Props ) => {
    const { t } = useTranslation();

    return (
        <CustomTextField
            name='quantity'
            label={ t('products.products_edit.quantity') }
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