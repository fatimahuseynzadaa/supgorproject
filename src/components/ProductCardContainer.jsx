import React, { useState } from 'react'
import ProductCards from './ProductCards'
import Categories from './Categories'
import products from '../data/products'
import categories from '../data/categories'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategoryProducts } from '../tools/actions/categoryActions'
import {filterProduct} from "../tools/actions/productAction"
import { setProducts } from '../tools/actions/productAction'


const ProductCardContainer = () => {
    const [filteredCategory, setFilteredCategory] = useState(null)
    const dispatch = useDispatch()


const filteredData = useSelector(state => state.product.filtered)

const handleFilter = (cat) => {
  dispatch(filterProduct(cat))
}


    return (
    
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-3">
                        <Categories setFilteredCategory={ handleFilter} />
                    </div>
                    <div className="col-12 col-md-9">
                        <button
                            className="btn btn-sm btn-light mt-2 mb-3"
                             onClick={() => dispatch(filterProduct(null))}
                        >
                            <span> <i class="fa-solid fa-xmark"></i> </span>Clear Filter
                        </button>
                        <div className="row">
                            {filteredData.map(product => (
                                <ProductCards key={product.id} product={product} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}

export default ProductCardContainer
