
const Button = ({ label, style, type, ...props }) => {
	return (
		<button
			type={type}
			style={style}
			{...props}
		>
			{label}
		</button>
	)
}

export default Button;