import React from 'react'
import Data from "../products.json"

const SearchCategory = ({filterItem, setItem, menuItems, setproducts, selectedCategory}) => {
  return (
    <>
        <div className="widget-header">
            <h5 className="ms-2">All Categories</h5>
        </div>
        <div>
            <button onClick={() => setproducts(Data)} className={`m-2 ${selectedCategory === "All" ? "bg-warning" : ""}`} >All</button>
            {
                menuItems.map((Val, id) => {
                    return(
                        <button 
                        className={`m-2 ${selectedCategory === "All" ? "bg-warning" : ""}`} 
                        key={id}
                        onClick={() => filterItem(Val)}
                        >{Val}
                        </button>
                    )
                })
            }
        </div>
    </>
  )
}

export default SearchCategory
