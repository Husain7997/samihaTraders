
import bgimg from '../assets/bg3.jpeg';
const Products = () => {
    return (
        <div style={{ backgroundImage: `url(${bgimg})`,
                    backgroundRepeat:"no-repeat",
                    backgroundSize:"cover",
        }} >
            Product
        </div>
    );
};

export default Products;