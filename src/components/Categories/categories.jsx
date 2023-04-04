import { useContext, useState } from "react";
import { CategoriesStyle } from "./style";
import { api } from "../../services/api";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ProductsContext } from "../../context/productsContext";

export const Categories = () => {
  const { categories, setSelectedCategory, setPage, setNameSearch } =
    useContext(ProductsContext);

  return (
    <CategoriesStyle>
      <h3>Categorias</h3>
      <div className="categoriesList">
        <li
          onClick={() => {
            setSelectedCategory("");
            setNameSearch("");
            setPage(0);
          }}
        >
          <div className="categoryImg">
            <img
              src="https://img.freepik.com/vetores-gratis/os-vegetais-que-compram-o-conceito-realistico-com-carrinho-de-compras-e-bens-vector-a-ilustracao_1284-16246.jpg?w=2000"
              alt=""
            />
          </div>
          <p>TODOS</p>
        </li>
        {categories.length &&
          categories.map((category) => (
            <li
              onClick={() => {
                setSelectedCategory(category.name);
                setNameSearch("");
                setPage(0);
              }}
            >
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
