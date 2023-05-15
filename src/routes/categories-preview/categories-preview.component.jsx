import { useContext } from "react"

import { CategoriesContext } from "../../contexts/categories.context"
import CategoryPreview from "../../components/category-preview/category-preview.components"

import './categories-preview.styles.scss'

const CategoriesPreview = () => {

  const { categoriesMap } = useContext(CategoriesContext)
  console.log(categoriesMap)
  
  return (
    <>
      {Object.keys(categoriesMap).map((title, index) => (
        <CategoryPreview key={index} title={title} products={categoriesMap[title]} />
      ))}
    </>
  )
}

export default CategoriesPreview
