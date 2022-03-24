//General react imports
import React from "react";
import { Link } from "react-router-dom";
//filter items
import { filterItems } from "./items";
//Styles
import UseStyles from "./styles";

const FilterBar = ({ filterProducts }) => {
  const classes = UseStyles();
  return (
    <div className={classes.filterBar}>
      <ul className={classes.filterItemsWrapper}>
        {filterItems.map((item, i) => (
          <li
            onClick={() => filterProducts(item.name)}
            className={classes.item}
            key={i}
            to={`${item.name}`}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterBar;
