import { lazy } from "react";

const ProductCreate = lazy(() => import("./ProductCreate"));
const ProductEdit = lazy(() => import("./ProductEdit"));
const ProductsList = lazy(() => import("./ProductsList"));


export { ProductCreate, ProductEdit, ProductsList };