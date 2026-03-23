function Button ({label, onClick, children, variant, isDisabled}) {
    const className = `${variant} ${isDisabled ? 'disabled' : ''}`;
    return <button 
        onClick={onClick}
        className={className}
    >
        {label}
        {children}
    </button>
}

export default Button;