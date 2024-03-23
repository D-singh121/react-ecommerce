const Input = ({ type, value, name, id, placeholder, userClassName }) => {
	return (
		<div>
			<input
				type={type}
				name={name}
				id={id}
				value={value}
				placeholder={placeholder}
				className={userClassName}

			/>
		</div>
	)
}


export default Input;