
import React from 'react'
import { useSelector } from 'react-redux'

const Categories = ({ setFilteredCategory }) => {
    const categoryOption = useSelector(state => state.category.all)
    return (
        <div className="category-box">
            <h3 className="title">Product Categories</h3>

            <ul className="category-list">
                {categoryOption.map(cat => (
                    <li key={cat.id}>
                        <label className="category-item">
                            <input
                                type="checkbox"
                                onChange={() => setFilteredCategory(cat.value)}
                            />
                            <span className="custom-checkbox"></span>
                            <span className="text">{cat.title}</span>
                        </label>
                    </li>
                ))}



                {/* <li>
                    <label className="category-item">
                        <input
                            type="checkbox"
                            onChange={() => setFilteredCategory("beverages")}
                        />
                        <span className="custom-checkbox"></span>
                        <span className="text">Beverages</span>
                    </label>
                </li>

                <li>
                    <label className="category-item">
                        <input
                            type="checkbox"
                            onChange={() => setFilteredCategory("dairy")}
                        />
                        <span className="custom-checkbox"></span>
                        <span class="text">Dairy & Eggs</span>
                    </label>
                </li>
                <li>
                    <label class="category-item">
                        <input type="checkbox" 
                         onChange={() => setFilteredCategory("frozen")}
                        />
                        <span class="custom-checkbox"></span>
                        <span class="text">Frozen Foods</span>
                    </label>
                </li>
                 <li>
                 <label class="category-item">
                     <input type="checkbox" 
                       onChange={() => setFilteredCategory("healthcare")}
                     />
                     <span class="custom-checkbox"></span>
                     <span class="text">Healthcare</span>
                 </label>
             </li>

                <li>
                    <label className="category-item">
                        <input
                            type="checkbox"
                            onChange={() => setFilteredCategory("snacks")}
                        />
                        <span className="custom-checkbox"></span>
                        <span className="text">Snacks</span>
                    </label>
                </li>

                <li>
                    <label className="category-item">
                        <input
                            type="checkbox"
                            onChange={() => setFilteredCategory("meat")}
                        />
                        <span className="custom-checkbox"></span>
                        <span className="text">Meat & Seafood</span>
                    </label>
                </li> */}
            </ul>
        </div>
    )
}

export default Categories
