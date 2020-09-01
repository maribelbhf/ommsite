import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"

const CarouselCategory = ({ current, linkUpdate }) => {
  const categories = []

  const data = useStaticQuery(graphql`
    {
      allWpCategory {
        edges {
          node {
            name
            slug
          }
        }
      }
    }
  `)

  data.allWpCategory.edges.map(category => {
    const CategoryWithoutBlankSpace = category.node.name.replace(/\s/g, "-")
    if (category.node.name !== "Uncategorized") {
      if (CategoryWithoutBlankSpace == current.toUpperCase()) {
        categories.push([
          category.node.name,
          "category active",
          "/" + category.node.slug,
        ])
      } else {
        categories.push([
          category.node.name,
          "category",
          "/" + category.node.slug,
        ])
      }
    }
  })

  const CategoryList = styled.div`
    position: absolute;
    left: 2em;
    bottom: 2em;
    z-index: 10;
    ul {
      list-style: none;

      li {
        color: white;
        font-weight: 300;
        display: inline;
        padding-right: 1em;
        @media only screen and (max-width: 559px) {
          font-size: 0.8em;
        }
      }
    }
    @media only screen and (max-width: 559px) {
      left: 0;
      width: 100vw;
      text-align: center;
      bottom: 3em;
    }
  `

  return (
    <CategoryList>
      <ul>
        {categories.map(item => (
          <li className={item[1]}>
            <Link to={item[2]}>{item[0]}</Link>
          </li>
        ))}
      </ul>
    </CategoryList>
  )
}
export default CarouselCategory
