import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useProductContext } from "../Context/product_context";
import "../style/ProductDetails.scss";
import { PageNavigationBreadCrumbs, ProductDetailsImages, StarRating, AddToCart } from '../components/index.js';
import { FormatPrice } from '../helpers/index.js';

import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";


const singleProductApi = "https://api.pujakaitem.com/api/products"


const ProductDetails = () => {
	const { isSingleProductLoading, isError, singleProduct, getSIngleProduct } = useProductContext()

	const { id } = useParams()

	const { id: alias, name, price, reviews, stars, stock, description, company, image } = singleProduct;


	useEffect(() => {
		getSIngleProduct(`${singleProductApi}?id=${id}`);
		// getSIngleProduct(`${singleProductApi}/${id}`);

	}, [])


	{
		isSingleProductLoading &&
			<div className="page_loading">Loading...</div>
	}

	{ isError && <p>Some error occured ... </p> }

	// console.log(singleProduct);

	return (
		<section id="product-details--section">
			<PageNavigationBreadCrumbs title={name} />
			<div className="product-details--container">
				<div className="grid-two-column">
					<div className="product-images">
						<ProductDetailsImages imgs={image} />
					</div>

					<div className="text-info">
						<h2>{name}</h2>
						<StarRating stars={stars} reviews={reviews} />

						<p className="product-data-price">
							MRP:
							<del>
								<FormatPrice price={price + 250000} />
							</del>
						</p>

						<p className="product-data-price product-data-real-price">
							Deal of the Day: <FormatPrice price={price} />
						</p>

						<p>{description}</p>

						<div className="product-data-warranty">
							<div className="product-warranty-data">
								<TbTruckDelivery className="warranty-icon" />
								<p>Free Delivery</p>
							</div>

							<div className="product-warranty-data">
								<TbReplace className="warranty-icon" />
								<p>30 Days Replacement</p>
							</div>

							<div className="product-warranty-data">
								<TbTruckDelivery className="warranty-icon" />
								<p>D.Stores Delivered </p>
							</div>

							<div className="product-warranty-data">
								<MdSecurity className="warranty-icon" />
								<p>3 Year Warranty </p>
							</div>
						</div>

						<div className="product-data-info">
							<p>
								Available:
								<span> {stock > 0 ? "In Stock" : "Not Available"}</span>
							</p>
							<p>
								ID : <span> {id} </span>
							</p>
							<p>
								Brand :<span> {company} </span>
							</p>
						</div>

						<hr style={{ color: "#000", border: "0.1rem solid #000", width: "100%" }} />
						{stock > 0 && < AddToCart product={singleProduct} />}


					</div>

				</div>
			</div>
		</section>
	)
}

export default ProductDetails;