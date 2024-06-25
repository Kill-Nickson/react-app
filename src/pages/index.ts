import HomePage from "./HomePage";
import NotFound from "./NotFound";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import AuthRedirect from "@/hocs/AuthRedirect";
import AuthPrivate from "@/hocs/AuthPrivate";


const ProtectedAuthLayout = AuthRedirect(AuthLayout);
const ProtectedMainLayout = AuthPrivate(MainLayout);

export { ProtectedMainLayout, ProtectedAuthLayout, NotFound, HomePage };