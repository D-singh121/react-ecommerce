import '../style/cartQuantity.scss'
import { Button } from "../components/index";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";




const CartQuantety = ({ initialQty, setIncreaseQty, setDecreaseQty }) => {
	return (
		<div className="cart-quantity-main">
			<Button
				onClick={() => setDecreaseQty()}
				type="text"
				label={<AiOutlineMinus  className='icon'/>}
				className="cartBtn"
			/>
			<p>{initialQty}</p>

			<Button
				onClick={() => setIncreaseQty()}
				type="text"
				label={<AiOutlinePlus className='icon' />}
				className="cartBtn"
			/>

		</div>
	)
}

export default CartQuantety