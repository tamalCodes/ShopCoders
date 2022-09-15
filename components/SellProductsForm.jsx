import React, { useContext } from "react";
import ShopContext from "../context/ShopContext";

const SellProductsForm = () => {
    const context = useContext(ShopContext);
    const { productdetails, setproductdetails } = context;

    const handleChange = (e) => {
        setproductdetails({ ...productdetails, [e.target.name]: e.target.value });
    };

    return (
        <>
            <form>
                <div className="mb-3 mt-6">
                    <label htmlFor="product_name" className="form-label">
                        Product name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="product_name"
                        aria-describedby="name of the product"
                        name="name"
                        value={productdetails.name}
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                </div>

                <div className="mb-3 mt-6">
                    <label htmlFor="product_qty" className="form-label">
                        Product quantity available
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="product_qty"
                        aria-describedby="quantity of the product"
                        name="qty"
                        value={productdetails.qty}
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                </div>

                <div className="mb-3 mt-6">
                    <label htmlFor="product_size" className="form-label">
                        Product size
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="product_size"
                        aria-describedby="size of the product"
                        placeholder="Size is needed only for wearables"
                        name="size"
                        value={productdetails.size}
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                </div>

                <div className="mb-3 mt-6">
                    <label htmlFor="product_size" className="form-label">
                        Product slug
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="product_slug"
                        aria-describedby="slug of the product"
                        placeholder="Add a unique slug for your product"
                        name="slug"
                        value={productdetails.slug}
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                </div>

                <div className="mb-3 mt-6">
                    <label htmlFor="product_price" className="form-label">
                        Product price
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="product_price"
                        aria-describedby="quantity of the product"
                        name="price"
                        value={productdetails.price}
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                </div>

                <div className="mb-3 mt-6">
                    <label htmlFor="product_category" className="form-label">
                        Product category
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="product_category"
                        aria-describedby="quantity of the product"
                        placeholder="Enter any one : hoodies mugs stickers tshirt"
                        name="category"
                        value={productdetails.category}
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                </div>

                <div className="mb-3 mt-6">
                    <label htmlFor="product_description" className="form-label">
                        Product description
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="product_description"
                        aria-describedby="description of the product"
                        name="desc"
                        value={productdetails.desc}
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                </div>

                <div className="mb-3 mt-6">
                    <label htmlFor="product_image" className="form-label">
                        Product image
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="product_image"
                        aria-describedby="image of the product"
                        placeholder="Please upload the direct image link of the product"
                        name="img"
                        value={productdetails.img}
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={(e) => {
                        e.preventDefault();
                        console.log(productdetails);
                    }}
                >
                    Submit
                </button>
            </form>
        </>
    );
};

export default SellProductsForm;
