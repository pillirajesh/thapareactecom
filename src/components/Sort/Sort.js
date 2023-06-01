import React from "react";
import "./Sort.css";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../../context/filtered_context";
//import { useProductContext } from "../../context/productcontext";

const Sort = ({ productsCount, setList }) => {
  const { sortingProducts } = useFilterContext();
  // const { products } = useProductContext();
  //const [value, setValue] = useState("");
  //const [sortedProducts, setSortedProducts] = useState([]);

  /* const getSelectedValue = (e) => {
    setValue(e.target.value);

    //console.log(products);
  }; */

  /*const getSortedProducts = () => {
    
  }; 


  useEffect(() => {
    getSortedProducts();
  }, [value]);

  */

  return (
    <div className="sort-header-container">
      <div>
        <BsFillGridFill className="grid-view" onClick={() => setList(false)} />
        <BsList className="list-view" onClick={() => setList(true)} />
      </div>
      <p style={{ fontFamily: "cursive", color: "blue" }}>
        {productsCount} total products
      </p>
      <select
        style={{ fontFamily: "bree serif" }}
        id="sortButton"
        onChange={sortingProducts}
      >
        <option value="higest" selected>
          Price(highest)
        </option>

        <option value="lowest">Price(lowest)</option>
        <option value="a-z">Price(a-z)</option>
        <option value="z-a">Price(z-a)</option>
      </select>
    </div>
  );
};

export default Sort;
