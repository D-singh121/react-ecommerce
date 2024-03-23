import '../style/about.scss';

import { HeroSection } from "../components";


const About = () => {
  const data = {
    name: " Dee ecommerce-shop"
  }

  return (
    <div
      style={{
        // backgroundColor: "red",
        width: "100%",
        height: "100vh",
        // paddingTop:"2rem"
      }}>
      <HeroSection mydata={data} />
    </div>

  )
}

export default About;