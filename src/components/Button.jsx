
const Button = ({ label, style, type, icons, userClassname, ...props }) => {
	return (
		<button
			type={type}
			style={style}
			icon={icons}
			className={userClassname}
			{...props}
		>
			{label}
		</button>
	)
}

export default Button;