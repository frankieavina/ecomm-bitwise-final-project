import React, { useContext } from 'react';
import ProductList from './ProductList';
import { DropdownButton, Dropdown } from "react-bootstrap";
import ProductsContext from '../../context/ProductsContext';


const ProductPage = ({value}) => {
    //product context to set value for dropdown 
    const { setNav } = useContext(ProductsContext); 
    // function to handle change of dropdown
    const handleSelect = (e)=> {
        setNav(e);
    }

    return (

        <>
            {/* change width to 80vh */}
            <div style={{margin:"1.25rem auto", padding:"1.25rem", display:"flex", justifyContent:"flex-end", width:"75%"}}>
                <label style={{marginRight:"1rem"}}> Sort By: </label>
                <DropdownButton onSelect={handleSelect} id="dropdown-basic-button" title={value}>
                    <Dropdown.Item eventKey="Featured" >Featured</Dropdown.Item>
                    <Dropdown.Item eventKey="Price: Low to High" >Price: Low to High</Dropdown.Item>
                    <Dropdown.Item eventKey="Price: High to Low" >Price: High to Low</Dropdown.Item>
                </DropdownButton>
            </div>
            <ProductList value={value}/>
        </>


    )
}

export default ProductPage