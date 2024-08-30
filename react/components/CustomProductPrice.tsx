import React from "react"
import { useProduct } from 'vtex.product-context'


const CustomProductPrice = () => {
    const {product} = useProduct()
    console.log("CONTEXTO DE PRODUCTO", product)

    const listPrice = product.priceRange.listPrice?.highPrice || 'N/A';
    const sellingPrice = product.priceRange.sellingPrice?.highPrice || 'N/A';

    const formatter = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    return (
        <div className="containerPrice">
            <p className="sellingPrice">Now {formatter.format(sellingPrice)}</p>
            <p className="listPrice">{formatter.format(listPrice)}</p>
        </div>
    );
};

export default CustomProductPrice
