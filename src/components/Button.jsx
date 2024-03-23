
const Button = ({ label, type, ...props }) => {
	return (
		<div>
			<button
				type={type}
				{...props}
			>
				{label}
			</button>
		</div>
	)
}

export default Button;