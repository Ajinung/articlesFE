import { createBrowserRouter } from "react-router-dom"
import Layout from "../components/common/Layout"
import HomeScreen from "../pages/HomeScreen"
import CreateArticleScreen from "../pages/CreateArticleScreen"
import DetailScreen from "../pages/DetailScreen"

export const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomeScreen />
            },
            {
                index: true,
                path: "/create",
                element: <CreateArticleScreen />
            },
            {
                index: true,
                path: "/:articleID/article",
                element: <DetailScreen />
            },
        ]
    }
])