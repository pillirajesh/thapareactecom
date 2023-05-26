import "./Services.css";

import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentFill } from "react-icons/ri";

const Services = () => {
  return (
    <div className="service-container">
      <div className="services">
        <div className="first">
          <TbTruckDelivery
            style={{
              color: "blueviolet",
              background: "white",
              borderRadius: "20px",
              height: "30px",
              width: "30px",
              padding: "5px",
            }}
          />
          <p style={{ marginTop: "15px" }}>Super Fast and Free Delivery</p>
        </div>
        <div className="middle ">
          <div className="align">
            <MdOutlineSecurity
              style={{
                color: "blueviolet",
                background: "white",
                borderRadius: "20px",
                height: "20px",
                width: "20px",
                padding: "5px",
              }}
            />
            <span style={{ marginLeft: "10px", fontSize: "15px" }}>
              Non Contact Shipping
            </span>
          </div>
          <div className="align">
            <GiReceiveMoney
              style={{
                color: "blueviolet",
                background: "white",
                borderRadius: "20px",
                height: "20px",
                width: "20px",
                padding: "5px",
              }}
            />
            <span style={{ marginLeft: "10px", fontSize: "15px" }}>
              Money-back Guarantee
            </span>
          </div>
        </div>
        <div className="last">
          <RiSecurePaymentFill
            style={{
              color: "blueviolet",
              background: "white",
              borderRadius: "20px",
              height: "30px",
              width: "30px",
              padding: "5px",
            }}
          />
          <p style={{ marginTop: "15px" }}>Super Secure Payment System</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
