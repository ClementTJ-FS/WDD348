import { React } from "react";
import Dropdown from "./formElements/Dropdown";

const FilterBar = (props) => {
  const handlePlatChange = (e) => {
      e.target.value === "all"
        ? props.setPlatSelected("all")
        : props.setPlatSelected(e.target.value);
    },
    handleTypeChange = (e) => {
      e.target.value === "all"
        ? props.setTypeSelected("all")
        : props.setTypeSelected(e.target.value);
    },
    handleSortChange = (e) => {
      props.setSortSelected(e.target.value);
    };

  return (
    <section style={styles.container}>
      <Dropdown
        label="Platform: "
        options={props.sortOptions.platform}
        onChange={handlePlatChange}
      />

      <Dropdown
        label="Type: "
        options={props.sortOptions.type}
        onChange={handleTypeChange}
      />

      <Dropdown
        label="Sort By: "
        options={props.sortOptions.sortBy}
        onChange={handleSortChange}
      />
    </section>
  );
};

export default FilterBar;

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    maxWidth: "30rem",
    margin: "1rem auto",
    background: "#1E2429",
    boxShadow: "5px 5px 10px rgba(0,0,0,1)",
    borderRadius: "5px",
    padding: "1rem",
  },
};
