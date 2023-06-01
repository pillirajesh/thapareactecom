import { useEffect, useState } from "react";
import "./SingleProduct";
import { Link, useParams } from "react-router-dom";
import { useProductContext } from "../context/productcontext";
import { ThreeDots } from "react-loader-spinner";
import PriceFormat from "../PriceFormat";
import "./SingleProduct.css";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { GiCheckedShield } from "react-icons/gi";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import MyImages from "../MyImage/MyImages";
import Stars from "../Stars/Stars";
import { FaCheck } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";

const url = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();

  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();

  const {
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    image,
    reviews,
    colors,
  } = singleProduct;

  //const [color, setCurColor] = useState(colors[0]);

  useEffect(() => {
    getSingleProduct(`${url}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return (
      <div className="loader">
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="blue"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    );
  }

  return (
    <div className="single-product-parent-container">
      <Link
        to="/"
        style={{
          textDecoration: "none",
          marginLeft: "20px",
        }}
      >
        Home{" "}
      </Link>
      <span>/{category}</span>
      <div className="single-product-container">
        <div className="images-container">
          <MyImages images={image} />
        </div>

        <div className="single-product-specifications-container">
          <h3>{name}</h3>
          <Stars reviews={reviews} stars={stars} />
          <h6>MRP {<PriceFormat price={price + 150000} />}</h6>
          <span
            style={{
              color: "green",
              fontFamily: "cursive",
              fontWeight: "bold",
            }}
          >
            Deal of the Day: {<PriceFormat price={price} />}
          </span>
          <p className="description">{description}</p>
          <div className="react-icons-container">
            <div className="each-icon-container">
              <TbTruckDelivery className="icon" />
              <p>Free Delivery</p>
            </div>
            <div className="each-icon-container">
              <GiCheckedShield className="icon" />
              <p>2 Years Warrenty</p>
            </div>
            <div className="each-icon-container">
              <TbReplace className="icon" />
              <p>7 Days Replacement</p>
            </div>
            <div className="each-icon-container">
              <CgArrowsExchangeAlt className="icon" />
              <p>Easy Exchange</p>
            </div>
          </div>
          <hr />
          <p style={{ fontFamily: "cursive", color: "grey" }}>
            Available :{" "}
            <span>{stock > 0 ? `${stock} In Stock` : "Out of Stock"}</span>
          </p>
          <p className="brand">Brand : {company}</p>
          <hr style={{ height: "3px", color: "red" }} />
          {/* 
          <p style={{ fontFamily: "cursive", marginBottom: "20px" }}>
            Colors :{" "}
            {colors.map((curColor, index) => {
              return (
                <button
                  type="button"
                  key={index}
                  style={{ backgroundColor: curColor }}
                  className={
                    color === curColor ? "color-button active" : "color-button"
                  }
                  onClick={() => setCurColor(curColor)}
                >
                  {color === curColor ? <FaCheck className="check" /> : null}
                </button>
              );
            })}
          </p>
          
           */}
          <div>
            <AiOutlineMinus
              className="symbol"
              onClick={() => {
                if (quantity > 1) {
                  setQuantity(quantity - 1);
                } else {
                  setQuantity(quantity);
                }
              }}
            />
            <span className="quantity">{quantity}</span>
            <AiOutlinePlus
              className="symbol"
              onClick={() => {
                if (quantity < stock) {
                  setQuantity(quantity + 1);
                } else {
                  setQuantity(stock);
                }
              }}
            />
          </div>
          {stock > 0 && (
            <button type="buton" className="cart-button">
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/cart"
              >
                Add to Cart
              </Link>
            </button>
          )}
          <br />
          <Link to="/products" className="back-icon">
            <IoIosArrowBack />
          </Link>
        </div>
      </div>
    </div>
  );
};

/* 
const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
/*  border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
  */

export default SingleProduct;
