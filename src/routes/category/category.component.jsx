import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { CategoriesContext } from '../../contexts/categories.context'
import ProductCard from '../../components/product-card/product-card.component'

import './category.styles.scss'

const Category = () => {

  const { category } = useParams()
  const { categoriesMap } = useContext(CategoriesContext)
  const [products, setProducts] = useState(null)
  
  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [categoriesMap, category])

  console.log(products)

  return (
    <>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      <div className="category-container">
        { products && 
          products.map(p => (
            <ProductCard key={p.id} product={p} />
          ))
        }
      </div>
    </>
  )
}

export default Category