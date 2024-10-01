import React from 'react';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

interface ErrorDetail {
    name?: string;
    message?: string;
}

const ErrorPage: React.FC = () => {
    const error = useRouteError();

    const getErrorDetails = (): ErrorDetail => {
        if (isRouteErrorResponse(error)) {
            return {
                name: error.status.toString(),
                message: error.statusText
            };
        } else if (error instanceof Error) {
            return {
                name: error.name,
                message: error.message
            };
        } else if (typeof error === 'object' && error !== null) {
            return error as ErrorDetail;
        }
        return {
            name: 'Unknown Error',
            message: 'An unknown error occurred'
        };
    };

    const errorDetails = getErrorDetails();

    React.useEffect(() => {
        console.error('Route error:', error);
    }, [error]);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{errorDetails.name || errorDetails.message}</i>
            </p>
        </div>
    );
};

export default ErrorPage;