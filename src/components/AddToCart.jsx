import { Button, CartQuantety } from "../components/index.js";
import { useState } from "react";
import '../style/AddToCart.scss';
import { FaCheck } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const AddToCart = ({ product }) => {
	// console.log(product);
	const { id, colors, stock } = product;
	const [color, setColor] = useState(colors[0]);


	// cart functioanality
	const [quantity, setQuantity] = useState(1)
	const setDecreaseQty = () => {
		{ quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1) }
	};

	const setIncreaseQty = () => {
		quantity < stock ? setQuantity(quantity + 1) : setQuantity(stock)
	}



	return (
		<section>
			<div className="main-colors-boxes">
				<div className="colors-boxes"> <span> Colors : </span>
					{colors && colors.map((curColor, index) => {
						return <Button
							key={index}
							type="text"
							label={color === curColor ? <FaCheck className="checkMark" /> : null}
							style={{ backgroundColor: curColor }}
							className={color === curColor ? "btn active" : "btn"}
							onClick={() => setColor(curColor)}
						/>
					})}
				</div>

				<CartQuantety
					initialQty={quantity}
					setIncreaseQty={setIncreaseQty}
					setDecreaseQty={setDecreaseQty}
				/>


				<NavLink to="/cart">
					<Button
						type="text"
						label={`ADD TO CART `}
						className="add-to-cart--btn"
					/>
				</NavLink>
			</div>

		</section>
	)
}

export default AddToCart