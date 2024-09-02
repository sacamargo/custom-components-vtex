import React from "react"
import { useProduct } from 'vtex.product-context'
import { useCssHandles } from 'vtex.css-handles'
import "../styles.css"

const CSS__HANDLES = ["containerPrice", "sellingPrice", "listPrice"]

type Props ={
    textPrice: string
}

const CustomProductPrice = ({textPrice}: Props) => {
    const {product} = useProduct()
    const {handles} = useCssHandles(CSS__HANDLES)

    const listPrice = product.priceRange.listPrice?.highPrice || 'N/A';
    const sellingPrice = product.priceRange.sellingPrice?.highPrice || 'N/A';

    const formatter = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    return (
        <div className={handles.containerPrice}>
            <p className={handles.sellingPrice}>{textPrice} {formatter.format(sellingPrice)}</p>
            <p className={handles.listPrice}>{formatter.format(listPrice)}</p>
        </div>
    );


};

CustomProductPrice.schema = {
    title: "Price Custom",
    type: "object",
    properties: {
        textPrice: {
            title: "text price",
            type: "string",
            description: "Please enter the selling price",
        }

    }
}

export default CustomProductPrice
