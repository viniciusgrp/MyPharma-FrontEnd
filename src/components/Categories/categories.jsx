import { useContext, useState } from "react";
import { CategoriesStyle } from "./style";
import { api } from "../../services/api";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ProductsContext } from "../../context/productsContext";

export const Categories = () => {
  const { categories, setSelectedCategory, setPage } = useContext(ProductsContext);

  return (
    <CategoriesStyle>
      <h3>Categorias</h3>
      <div className="categoriesList">
        {categories.length &&
          categories.map((category) => (
            <li onClick={() => {
                setSelectedCategory(category.name)
                setPage(0)
            }}>
              <div className="categoryImg">
                {category.img ? (
                  <img src={category.img} />
                ) : (
                  <Skeleton className="categoryImg" />
                )}
              </div>
              <p>{category.name || <Skeleton />}</p>
            </li>
          ))}
      </div>
    </CategoriesStyle>
  );
};
