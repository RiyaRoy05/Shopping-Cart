import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'

const showResults = "Showing 01- 12 of 139 Results"
import Data from "../products.json"
import ProductCards from './ProductCards'
import Pagination from './Pagination'
import Search from './Search'
import SearchCategory from './SearchCategory'

const Shop = () => {
  const [GridList, setGridList] = useState(true);
  const [products, setproducts] = useState(Data);
  console.log(products);

  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 12;

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  };

  const [selectedCategory, setSelectedCategory] = useState("All");
  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    })
    setSelectedCategory(curcat);
    setproducts(newItem);
  }

  return (
    <div>
      <PageHeader title="Our Shop Page" curPage="Shop" />
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="shop-title d-flex flex-wrap justify-content-between">
                  <p>{showResults}</p>
                  <div className={`product-view-mode ${GridList ? "gridActive" : "listActive"}`}>
                    <a className="grid" onClick={() => setGridList(!GridList)}>
                      <i className="icofont-ghost"></i>
                    </a>
                    <a className="list" onClick={() => setGridList(!GridList)}>
                      <i className="icofont-listine-dots"></i>
                    </a>
                  </div>
                </div>
                <div>
                  <ProductCards GridList={GridList} products={currentProducts} />
                </div>
                <Pagination
                productPerPage = {productPerPage}
                totalProducts = {products.length}
                paginate = {paginate}
                activePage = {currentPage}
                />
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Search products={products} GridList={GridList}/>
                <SearchCategory
                filterItem={filterItem}
                setItem={setproducts}
                menuItems={menuItems}
                setproducts={setproducts}
                selectedCategory={selectedCategory}
                />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
