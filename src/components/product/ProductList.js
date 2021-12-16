import { useContext } from "react";
import ProductCard from "./ProductCard";
import './ProductCard.css'
// Using Context to get data
import ProductsContext from "./../../context/ProductsContext";
import Container from 'react-bootstrap/Container'
import { Row } from "react-bootstrap";


const ProductsList = () => {
    //content consumer 
  const { products } = useContext(ProductsContext);

  return (

    <Container>

        <Row className="CardsBody">
            {products.map((product) => (
                <ProductCard
                    id={product.id}
                    title={product.title}
                    category={product.category}
                    description={product.description}
                    image={product.image}
                    price={product.price}
                    rating={product.rating}
                />
            ))}
        </Row>

    </Container>

  );
};

export default ProductsList;