import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const ProductsContext = createContext({});

export const JobProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(undefined);
  const [cartProducts, setCartProducts] = useState([])
  const [page, setPage] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  useEffect(() => {
    const cart = localStorage.getItem("@CART")
    if (cart) {
      setCartProducts(JSON.parse(cart))
    }
  },[])

  const getCategories = async () => {
    try {
      const { data } = await api.get("/categories");
      setCategories(data);
    } catch (error) {
      console.error(error);
    }
  };
  const getProducts = async () => {
    try {
      const category = selectedCategory;
      const limit = Number(itemsPerPage)
      const skip = +page * +limit
      console.log(page, limit, skip)
      const { data } = await api.get(`/products`, {
        params: {
          category,
          limit,
          skip
        },
      });
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    getProducts();
  }, [selectedCategory, itemsPerPage, page]);

  return (
    <ProductsContext.Provider
      value={{ categories, setSelectedCategory, products, cartProducts, setCartProducts, selectedCategory, page, setPage, itemsPerPage, setItemsPerPage }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
