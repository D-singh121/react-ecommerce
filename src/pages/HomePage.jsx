// import '../style/homepage.scss';
import { FeatureProducts, HeroSection, Services, Trusted } from '../components/index.js';


const HomePage = () => {
	const data = {
		name: "D.Store"
	}

	return (
		<>
			<HeroSection mydata={data} />
			<FeatureProducts />
			<Services />
			<Trusted />
		</>


	)
}

export default HomePage