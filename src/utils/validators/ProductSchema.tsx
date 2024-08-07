import { ProductRetrieveCategoryEnum } from '@/openapi';
import * as yup from 'yup';

// const FILE_SIZE = 5 * 1024 * 1024; // 5 MB
// const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'];

export const ProductSchema = yup.object({
    name: yup.string().required("Name field is required"),
    quantity: yup.string().required("Quantity field is required"),
    category: yup.string().required("Category field is required")
        .oneOf(Object.values(ProductRetrieveCategoryEnum)),
    barcode: yup.string().required("Barcode field is required"),
    description: yup.string().trim().transform(
        (value, originalValue) => originalValue === null ? '' : value
    ),
    ingredients: yup.string().trim().transform(
        (value, originalValue) => originalValue === null ? '' : value
    ),
    // front_image: yup
    //     .mixed()
    //     .required("Pixel field is required")
    //     .test('fileFormat', 'Invalid file format', value => {return value && (value instanceof File);})
    //     .test('fileSize', 'File size is too large', value => !value || (value.size <= FILE_SIZE))
    //     .test('fileFormat', 'Unsupported Format', value => !value || SUPPORTED_FORMATS.includes(value.type)),
    // back_image: yup.mixed().required("Pixel field is required").test('fileFormat', 'Invalid file format', value => {
    //     return value && (value instanceof File);
    // })
});

export type ProductFormValues = yup.InferType<typeof ProductSchema>;

export const productInitialValues: ProductFormValues = {
    name: '',
    quantity: '',
    category: Object.values(ProductRetrieveCategoryEnum)[0],
    barcode: '',
    description: '',
    ingredients: '',
    // front_image: {} as File,
    // back_image: {} as File,
};