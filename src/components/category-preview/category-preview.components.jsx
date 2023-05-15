import { useNavigate } from 'react-router-dom'

import ProductCard from '../product-card/product-card.component'

import './category-preview-styles.scss'

const CategoryPreview = ({title, products}) => {

  const navigate = useNavigate()

  return (
    <div className="category-preview-container">
      <h2>
        <span className='title' onClick={() => navigate(title)}>{title.toUpperCase()}</span>
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