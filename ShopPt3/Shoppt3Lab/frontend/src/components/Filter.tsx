import React, { useState } from "react";

interface FilterProps {
  onFilterSubmit: (filters: Filters) => void;
}

interface Filters {
  maxPrice: string;
  includes: string;
  limit: string;
}

const Filter: React.FC<FilterProps> = ({ onFilterSubmit }) => {
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [includes, setIncludes] = useState<string>("");
  const [limit, setLimit] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const filters: Filters = {
      maxPrice,
      includes,
      limit,
    };
    onFilterSubmit(filters);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Max Price:
        <input
          type="text"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </label>
      <label>
        Includes:
        <input
          type="text"
          value={includes}
          onChange={(e) => setIncludes(e.target.value)}
        />
      </label>
      <label>
        Limit:
        <input
          type="text"
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
        />
      </label>
      <button type="submit">Apply Filters</button>
    </form>
  );
};

export default Filter;
