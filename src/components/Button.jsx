
const Button = ({ label, style, type, icons, ...props }) => {
	return (
		<button
			type={type}
			style={style}
			icon={icons}
			{...props}
		>
			{label}
		</button>
	)
}

export default Button;