import React from "react";
import Icons from "../assets";

function LocationDetailsProduct(theproduct) {
  console.log(theproduct);
  return (
    <>
      <div className="locationdetails-bottom__bodyMobile">
        {theproduct.theproduct.map((p) => (
          <div className="locationdetails-bottom__wrapperMobile" key={p.id}>
            <div className="locationdetails-bottom__container">
              <div className="locationdetails-bottom__container--item">
                <h3 className="locationdetails-bottom__title">ITEM</h3>
                <h2 className="locationdetails-bottom__product">
                  {p.productName}
                </h2>
                <p className="locationdetails-bottom__text">
                  {p.briefDescription}
                </p>
              </div>
              <div className="locationdetails-bottom__container--order">
                <h3 className="locationdetails-bottom__title">LAST ORDERED</h3>
                <p className="locationdetails-bottom__text">{p.lastOrder}</p>
              </div>
              <div className="locationdetails-bottom__container--location">
                <h3 className="locationdetails-bottom__title">LOCATION</h3>
                <p className="locationdetails-bottom__text">{`${p.city}, ${p.country}`}</p>
              </div>
              <div className="locationdetails-bottom__container--quantity">
                <h3 className="locationdetails-bottom__title">QUANTITY</h3>
                <p className="locationdetails-bottom__text">{p.quantity}</p>
              </div>
              <div className="locationdetails-bottom__container--status">
                <h3 className="locationdetails-bottom__title">STATUS</h3>
                {p.inStock === true ? (
                  <p className="locationdetails-bottom__text">In Stock</p>
                ) : (
                  <p className="locationdetails-bottom__text">Out of Stock</p>
                )}
              </div>
            </div>
            <div className="locationdetails-bottom__iconWrapper">
              <img
                className="locationdetails-bottom__kebabIcon"
                src={Icons.kebabDefault}
                alt="locationdetails-bottom kebab icon"
              />
              <img
                className="locationdetails-bottom__kebabIcon--hover"
                src={Icons.kebabActive}
                alt="locationdetails-bottom kebab active icon"
              />
              <button className="locationdetails-bottom__remove">Remove</button>
            </div>
          </div>
        ))}
      </div>

      <div className="locationdetails-bottom__bodyTablet">
        <div className="locationdetails-bottom__titleWrapper">
          <h3 className="locationdetails-bottom__title locationdetails-bottom__item">
            ITEM
          </h3>
          <h3 className="locationdetails-bottom__title locationdetails-bottom__order">
            LAST ORDERED
          </h3>
          <h3 className="locationdetails-bottom__title  locationdetails-bottom__location">
            LOCATION
          </h3>
          <h3 className="locationdetails-bottom__title locationdetails-bottom__quantity">
            QUANTITY
          </h3>
          <h3 className="locationdetails-bottom__title locationdetails-bottom__status">
            STATUS
          </h3>
        </div>
        {theproduct.theproduct.map((p) => (
          <div className="locationdetails-bottom__contentWrapper" key={p.id}>
            <div className="locationdetails-bottom__item">
              <h2 className="locationdetails-bottom__product">
                {p.productName}
              </h2>
              <p className="locationdetails-bottom__text">
                {p.briefDescription}
              </p>
            </div>

            <p className="locationdetails-bottom__text locationdetails-bottom__order">
              {p.lastOrder}
            </p>
            <p className="locationdetails-bottom__text locationdetails-bottom__location">
              {`${p.city}, ${p.country}`}
            </p>
            <p className="locationdetails-bottom__text locationdetails-bottom__quantity">
              {p.quantity}
            </p>
            {p.inStock === true ? (
              <p className="locationdetails-bottom__text">In Stock</p>
            ) : (
              <p className="locationdetails-bottom__text">Out of Stock</p>
            )}

            <div className="locationdetails-bottom__iconWrapper">
              <img
                className="locationdetails-bottom__kebabIcon"
                src={Icons.kebabDefault}
                alt="locationdetails-bottom kebab default icon"
              />
              <img
                className="locationdetails-bottom__kebabIcon--hover"
                src={Icons.kebabActive}
                alt="locationdetails-bottom kebab active icon"
              />
              <button className="locationdetails-bottom__remove">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default LocationDetailsProduct;
