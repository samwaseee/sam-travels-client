import { useRouteError } from "react-router-dom";

const Error = () => {

    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="text-center grid items-center h-[100vh]">
            <div>
                <h1 className="text-6xl font-playfair font-bold">Oops! <br />{error.status} {error.statusText}</h1>
                <p className="text-4xl my-10">Sorry, an unexpected error has occurred.</p>
                <p className="text-3xl underline">
                    <i>{error.error.message}</i>
                </p>
            </div>
        </div>
    );
};

export default Error;