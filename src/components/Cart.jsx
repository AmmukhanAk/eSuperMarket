import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector } from "react-redux";
import { Nav } from "react-bootstrap";
export const Cart = () => {
    const products = useSelector((state) => state.productReducer.product);
    console.log(products);
    return (
        <div>
            <Nav.Link>
                Cart<ShoppingCartIcon /> <sup>{products.length}</sup> {" "}
            </Nav.Link>
            <Nav.Link>
                {/* Login<LoginIcon /> <sup>{product.length}</sup>{" "} */}
            </Nav.Link>
        </div>
    );
};