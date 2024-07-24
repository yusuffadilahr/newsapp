const CardBody = (props) => {
    const { children, size='text-2xl' } = props
    return (
            <h5 className={`mb-2 ${size} font-bold tracking-tight text-gray-900`}>
                {children}
            </h5>
    )
}

export default CardBody