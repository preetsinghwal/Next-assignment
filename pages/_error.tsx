
function Error({statusCode}: {statusCode?: number}) {
    return (
        <p>
            {statusCode 
            ? `An error ${statusCode} occured on server`
            : 'An unknown error occured'
            }
        </p>
    )
}

Error.getInitialProps = ({res, err}: any) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error;