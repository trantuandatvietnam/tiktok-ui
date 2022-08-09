// Layout
import { HeaderOnly } from "~/layouts";

// routes config
import config from "~/config";

// Pages
import Following from "~/pages/Following";
import Home from "~/pages/Home";
import Profile from "~/pages/Profile";
import Search from "~/pages/Search";
import Upload from "~/pages/Upload";
import Live from "~/pages/Live";

// publicRoutes: Không cần đăng nhập vẫn xem được
const publicRoutes = [
    {
        path: config.routesConfig.home,
        component: Home,
    },
    {
        path: config.routesConfig.following,
        component: Following,
    },
    {
        path: config.routesConfig.profile,
        component: Profile,
    },
    {
        path: config.routesConfig.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: config.routesConfig.search,
        component: Search,
        layout: null,
    },
    {
        path: config.routesConfig.live,
        component: Live,
    },
];

// privateRoutes: Phải đăng nhập mới xem được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
