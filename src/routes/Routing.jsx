import { createBrowserRouter} from "react-router-dom";
import Root from "./Root";
import ErrorPage from "../ErrPage";
import IndexPage from '../components/IndexPage';
import PokemonPage from '../components/PokemonPage';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage/>,
      children:[
        {
            path: "/",
            element: <IndexPage/>,
        },
        {
            path: "/pokemon",
            element: <PokemonPage/>,
        },]
    },
]);