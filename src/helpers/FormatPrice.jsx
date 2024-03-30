
const FormatPrice = ({ price }) => {
	return Intl.NumberFormat('en-IN',
		{
			style: 'currency',
			currency: 'INR',
			maximumFractionDigits: 2,
		}).format(price / 100) // converting from paisa to rupees

}

export default FormatPrice;