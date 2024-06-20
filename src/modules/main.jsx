// ProductContext.js
import React, { createContext, useState } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState({
        name: 'Produto Exemplo',
        quantity: 10,
    });

    return (
        <ProductContext.Provider value={{ product, setProduct }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContext;
