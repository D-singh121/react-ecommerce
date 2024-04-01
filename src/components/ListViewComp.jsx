import { NavLink } from "react-router-dom";
import { FormatPrice } from "../helpers";
import { Button } from "./index.js";

import '../style/ListView.scss'

const ListViewComp = ({ products }) => {
	return (
		<section className="main-listview--section">
			<div className="listview--container">
				{products.map((curElem) => {
					const { id, name, image, price, description } = curElem;
					return (
						<div key={id} className="listview--card">
							<figure>
								<img src={image} alt={name} />
							</figure>

							<div className="listview-card-data">
								<h3 id="heading">{name}</h3>
								<p className="price">
									<FormatPrice price={price} />
								</p>
								<p className="desc">{description.slice(0, 90)}...</p>

								<NavLink to={`/product/${id}`} className="btn-main">
									<Button
										className="listview--btn"
										label="Read More"
									/>
								</NavLink>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	)
}

export default ListViewComp