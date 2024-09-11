import BrandSolutions from "../Brand/BrandSolutions";
import CardGrid from "../CardGrid";

import Navbar from "../shared/Navbar/Navbar";


const Home = () => {
  return (
    <div>
        <Navbar> </Navbar>
        <BrandSolutions></BrandSolutions>
        <CardGrid/>
        
    </div>
  )
}

export default Home;