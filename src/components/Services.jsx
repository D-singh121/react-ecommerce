import '../style/Services.scss'
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";


const Services = () => {
	return (
		<section className='services-section'>
			<div className="services-container">

				{/* //section-1 */}
				<div className="services-1">
					<div>
						<TbTruckDelivery className="icon" />
						<h3>Super Fast and Free Delivery</h3>
					</div>
				</div>

				{/* section-2 */}
				<div className="services-2">
					<div className="services-colum-2">
						<div className='logo-text'>
							<MdSecurity className="icon" />
							<h3>Non-contact Shipping</h3>
						</div>
					</div>
					<div className="services-colum-2">
						<div className='logo-text'>
							<GiReceiveMoney className="icon" />
							<h3>Money-back Guaranteed</h3>
						</div>
					</div>
				</div>


				{/* section-3 */}
				<div className="services-3">
					<div>
						<RiSecurePaymentLine className="icon" />
						<h3>Super Secure Payment System</h3>
					</div>
				</div>

			</div>
		</section>

	)
}

export default Services