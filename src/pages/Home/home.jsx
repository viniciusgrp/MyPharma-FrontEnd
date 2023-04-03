import { useContext } from "react"
import { Categories } from "../../components/Categories/categories"
import { Header } from "../../components/Header/header"
import { HomeStyle } from "./style"
import { ProductsContext } from "../../context/productsContext"
import { ProductsList } from "../../components/ProductsList/productList"
import { Pagination } from "../../components/Pagination/pagination"
import { Footer } from "../../components/Footer/footer"
import { Cart } from "../../components/Cart/cart"

export const Home = () => {
    const { showCart } = useContext(ProductsContext)
    
    return (
        <HomeStyle>
            {showCart && <Cart/>}
            <Header />
            <Categories />
            <ProductsList />
            <Pagination />
            <Footer/>
        </HomeStyle>
    )
}