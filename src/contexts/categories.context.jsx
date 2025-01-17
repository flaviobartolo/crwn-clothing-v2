import { createContext, useEffect, useState } from "react"

import { addCollectionAndDocuments, getCategoriesAndDocuments } from '../utils/firebase/firebase.utils'

import SHOP_DATA from '../shop-data.js'

export const CategoriesContext = createContext({
  categoriesMap: {},
  setCategoriesMap: () => null
})

export const CategoriesProvider = ({children}) => {
  const [categoriesMap, setCategoriesMap] = useState({})

/*   useEffect(() => {
    addCollectionAndDocuments('categories', SHOP_DATA, 'title')
  }, []) */

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments()
      console.log(categoryMap)
      setCategoriesMap(categoryMap)
    }
    getCategoriesMap()
  }, [])

  const value = {categoriesMap, setCategoriesMap}
  console.log(value)

  return <CategoriesContext.Provider value={value}>
    {children}
  </CategoriesContext.Provider>
}