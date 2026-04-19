import { useRouteError } from "react-router-dom";
import errorImg from './assets/error.jpeg';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Упс! Ашибачка</h1>
            <p>Давай чини ошибку</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <img src={errorImg}  alt="Ашiбачка" />
        </div>
    )
}