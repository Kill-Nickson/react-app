import CustomTextField from "@components/base/CustomTextField"
import { StandardTextFieldProps } from "@mui/material";
import { ProductFormValues } from "@utils/validators/ProductSchema";
import { FormikProps } from "formik";
import { useTranslation } from "react-i18next";

interface Props extends StandardTextFieldProps {
    formik: FormikProps<ProductFormValues>;
}

const ProductNameInput = ({ formik, ...props }: Props) => {
    const { t } = useTranslation();

    return (
        <CustomTextField
            name='name'
            label={ t('products.products_edit.name') }
            value={formik.values.name}
            onChange={formik.handleChange}
            error={!!formik.errors.name}
            helperText={!!formik.errors.name && formik.errors.name}
            placeholder='Enter name...'
            {...props}
        />
    )
}

export default ProductNameInput;