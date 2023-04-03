import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const ProductsContext = createContext({});

export const JobProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(undefined);
  const [cartProducts, setCartProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [showCart, setShowCart] = useState(false);
  const [sort, setSort] = useState("");
  const [nameSearch, setNameSearch] = useState("");
  const [productId, setProductId] = useState("");

  useEffect(() => {
    const cart = localStorage.getItem("@CART");
    if (cart) {
      setCartProducts(JSON.parse(cart));
    }
  }, []);

  const resetFilters = () => {
    setSelectedCategory("");
    setPage(0);
    setItemsPerPage(10);
    setShowCart(false);
    setSort("");
    setNameSearch("");
  };

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
      const limit = Number(itemsPerPage);
      const skip = +page * +limit;
      const name = nameSearch;
      const { data } = await api.get(`/products`, {
        params: {
          category,
          limit,
          skip,
          sort,
          name: `/${name}/i`,
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
  }, [selectedCategory, itemsPerPage, page, sort, nameSearch]);

  return (
    <ProductsContext.Provider
      value={{
        categories,
        setSelectedCategory,
        products,
        cartProducts,
        setCartProducts,
        selectedCategory,
        page,
        setPage,
        itemsPerPage,
        setItemsPerPage,
        showCart,
        setShowCart,
        sort,
        setSort,
        nameSearch,
        setNameSearch,
        productId,
        setProductId,
        resetFilters,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
