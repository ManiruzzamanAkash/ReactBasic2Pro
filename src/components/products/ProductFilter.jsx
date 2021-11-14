import React from "react";
import { useSearchParams } from "react-router-dom";

const ProductFilter = () => {
    const [searchParams] = useSearchParams();
    const min_price = searchParams.get('min_price') === null ? '' : searchParams.get('min_price');
    const max_price = searchParams.get('max_price') === null ? '' : searchParams.get('max_price');
    const search = searchParams.get('search') === null ? '' : searchParams.get('search');

  return (
    <form method="GET">
      <input
        defaultValue={min_price}
        name="min_price"
        placeholder="Min Price"
        type="number"
        style={{ width: 100 }}
      />
      &nbsp;&nbsp;
      <input
        defaultValue={max_price}
        name="max_price"
        placeholder="Max Price"
        type="number"
        style={{ width: 100 }}
      />
      &nbsp;&nbsp;
      <input
        defaultValue={search}
        name="search"
        placeholder="Search"
        type="text"
      />
      &nbsp;&nbsp;
      <button type="submit">Search</button>
    </form>
  );
};

export default ProductFilter;
