import HomePage from "./HomePage";
import NotFound from "./NotFound";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import AuthPrivate from "@/hocs/AuthPrivate";
import AccessPrivate from "@/hocs/AccessPrivate";


const ProtectedAuthLayout = AuthPrivate(AuthLayout);
const ProtectedMainLayout = AccessPrivate(MainLayout);

export { ProtectedMainLayout, ProtectedAuthLayout, NotFound, HomePage };