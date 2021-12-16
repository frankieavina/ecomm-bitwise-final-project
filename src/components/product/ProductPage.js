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
            <div style={{margin:"1.25rem auto", display:"flex", justifyContent:"flex-end", width:"80vh"}}>
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