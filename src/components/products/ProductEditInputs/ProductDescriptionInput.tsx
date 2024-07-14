import CustomTextField from "@components/base/CustomTextField"
import { StandardTextFieldProps } from "@mui/material";
import { ProductFormValues } from "@utils/validators/ProductSchema";
import { FormikProps } from "formik";
import { useTranslation } from "react-i18next";

interface Props extends StandardTextFieldProps {
    formik: FormikProps<ProductFormValues>;
}

const ProductDescriptionInput = ({ formik, ...props }: Props) => {
    const { t } = useTranslation();

    return (
        <CustomTextField
            name='description'
            label={ t('products.products_edit.description') }
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