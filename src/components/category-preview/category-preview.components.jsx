import { NavLink } from 'react-router-dom'

import ProductCard from '../product-card/product-card.component'

import './category-preview-styles.scss'

const CategoryPreview = ({title, products}) => {

  return (
    <div className="category-preview-container">
      <h2>
        <NavLink to={title} >
          <span className='title'>{title.toUpperCase()}</span>
        </NavLink>
      </h2>
      <div className="preview">
      {
        products
          .filter((_, index) => index < 4)
          .map(p => <ProductCard key={p.id} product={p} />)
      }
      </div>    
    </div>
  )
}

export default CategoryPreview