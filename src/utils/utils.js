

// getting a list of 12 productSSS 
const getProductList = async () => {

    const foods = await fetch('http://fakestoreapi.com/products?limit=12')
        .then(res=>res.json())

    return foods; 

}

// getting only ONE product 
const getProduct = async () => {

    const foods = await fetch('http://fakestoreapi.com/products?limit=12')
        .then(res=>res.json())

    return foods; 

}


// getting only ONE product 
const getProductListCategory = async (category) => {

        const foods = await fetch(`http://fakestoreapi.com/products/category/${category}`)
        .then(res=>res.json())

        return foods; 

}

export { getProduct, getProductList, getProductListCategory};