import CustomTextField from "@components/base/CustomTextField"
import { StandardTextFieldProps } from "@mui/material";
import { ProductFormValues } from "@utils/validators/ProductSchema";
import { FormikProps } from "formik";
import { useTranslation } from "react-i18next";

interface Props extends StandardTextFieldProps {
    formik: FormikProps<ProductFormValues>;
}

const ProductIngredientsInput = ({ formik, ...props }: Props) => {
    const { t } = useTranslation();

    return (
        <CustomTextField
            name='ingredients'
            label={ t('products.products_edit.ingredients') }
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