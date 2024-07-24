import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className='flex h-screen justify-center items-center text-center'>
            <div className='text-center font-semibold'>
                <p> {error.status}
                    <br />
                    {error.statusText}
                </p>
            </div>
        </div>
    )
}

export default ErrorPage
