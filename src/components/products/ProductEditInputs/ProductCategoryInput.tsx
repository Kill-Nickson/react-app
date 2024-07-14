import { ProductRetrieveCategoryEnum } from "@/openapi";
import CustomSelect from "@components/base/CustomSelect";
import { MenuItem, OutlinedSelectProps } from "@mui/material";
import { ProductFormValues } from "@utils/validators/ProductSchema";
import { FormikProps } from "formik";
import { useTranslation } from "react-i18next";

interface Props extends OutlinedSelectProps {
    formik: FormikProps<ProductFormValues>;
}


const ProductCategoryInput = ({ formik, margin, ...props }: Props) => {
    const { t } = useTranslation();

    return (
        <CustomSelect
            name='category'
            label={ t('products.products_edit.category') }
            value={ formik.values.category }
            onChange={formik.handleChange}
            error={!!formik.errors.category}
            placeholder='Select category...'
            {...props}
        >
            {Object.entries(ProductRetrieveCategoryEnum).map(([value, option]) => (
                <MenuItem value={option} key={option}>
                    {value}
                </MenuItem>
            ))}
        </CustomSelect>
    )
}

export default ProductCategoryInput