import { useRouteError } from "react-router-dom";

export default function ErrorPage(){
    const error = useRouteError();
    console.error(error);
    return(
        <div id="err_page">
            <p>is issue</p>
            <i>{error.message}</i>
        </div>
    );
}