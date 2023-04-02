import { useContext, useEffect, useState } from "react"
import { Footer } from "../../components/Footer/footer"
import { Header } from "../../components/Header/header"
import { ProductStyle } from "./style"
import { ProductsContext } from "../../context/productsContext"
import { SingleProduct } from "../../components/SingleProduct/singleProduct"
import { api } from "../../services/api"
import { Cart } from "../../components/Cart/cart"
import {IoIosArrowBack} from 'react-icons/io'
import { useNavigate } from "react-router-dom"

export const Product = () => {
    const [product, setProduct] = useState()
    const { productId, showCart } = useContext(ProductsContext)
    const navigate = useNavigate()
    const getProducts = async () => {
        try {
          const { data } = await api.get(`/products`, {
            params: {
              _id: productId
            },
          });
          setProduct(data[0]);
        } catch (error) {
          console.error(error);
        }
    };
    useEffect(() => {
        getProducts()
    },[productId])
    return (
        <ProductStyle>
            {showCart && <Cart />}
            <Header />
            <IoIosArrowBack onClick={() => navigate('/')} className="backButton"/>
            <SingleProduct product={product} />
            <Footer/>
        </ProductStyle>
    )
}