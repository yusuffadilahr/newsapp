const Button = (props) => {
    const { children,
        color = 'bg-blue-600 hover:bg-blue-700',
        width,
        text = 'text-white',
        shadow,
        onClick = () => { },
    } = props


    return (
        <button className={`${color} px-3 py-2 rounded-xl ${width} ${shadow} ${text} font-semibold`}
            onClick={onClick}>
            {children}
        </button>
    )
}

export default Button