import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";
const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/3905874/pexels-photo-3905874.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              SALE
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              WOMEN
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/2897529/pexels-photo-2897529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              MEN
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-L">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/12042825/pexels-photo-12042825.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <button>
                <Link className="link" to="/products/1">
                  KIDS
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/5480649/pexels-photo-5480649.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />
              <button>
                <Link className="link" to="/products/1">
                  ACCESSORIES
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              SHOES
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
