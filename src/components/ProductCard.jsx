import { NavLink } from 'react-router-dom';
import '../style/ProductCard.scss'


const ProductCard = (product) => {
	// console.log(product);

	const { id, name, price, image, category } = product;

	return (
		<NavLink to={`/product/${id}`}>
			<div id="card">
				<figure id='card-fig'>
					<img src={image} alt={name} id='feature-img' />
					<figcaption className="caption">{category}</figcaption>
				</figure>

				<div className="card-data">
					<div className="card-data-flex">
						<h3 className='card-data--name'>{name}</h3>
						<p className="card-data--price">{price}</p>
					</div>
				</div>
			</div>
		</NavLink>
	)
}

export default ProductCard;