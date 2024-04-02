const Input = ({ type, value, name, id, placeholder, userClassName, ...props }) => {
	return (
		<div>
			<input
				type={type}
				name={name}
				id={id}
				value={value}
				placeholder={placeholder}
				className={userClassName}
				{...props}
			/>
		</div>
	)
}


export default Input;