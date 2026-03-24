function Button ({onClick, children, variant}) {
    return <button 
        onClick={onClick}
        className={`flex gap-2 items-center px-3 py-1 rounded-sm drop-shadow-md ${variant}
                    transition-all duration-300 hover:-translate-y-0.5`}
    >
        {children}
    </button>
}

export default Button;