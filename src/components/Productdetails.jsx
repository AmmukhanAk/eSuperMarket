import React, { useEffect, useState } from "react"
import { Col, Row, Button, } from "react-bootstrap"
import { useSelector } from "react-redux"
export const.ProductDetails = () => {
    const [selectedProduct, setSelectProduct] = useState([])
    const myProducts = useSelector((state) => state.productSelector.product)
    const selectedId = useSelector((state) => state.productSelector.selectedId