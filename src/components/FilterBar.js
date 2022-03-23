import {React} from 'react'
import Dropdown from './formElements/Dropdown'

const FilterBar = ({sortOptions, setValue}) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <section style={styles.container}>
      <div>
        <Dropdown label="Platform: " options={sortOptions.platform} onChange={handleChange} />
      </div>
      <div>
        <Dropdown label="Type: " options={sortOptions.type} onChange={handleChange}/>
      </div>
      <div>
        <Dropdown label="Sort By: " options={sortOptions.sortBy} onChange={handleChange}/>
      </div>
    </section>
  )
}

export default FilterBar;

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "35rem",
    margin: "1rem auto",
    background: "#1E2429",
    boxShadow: "5px 5px 10px rgba(0,0,0,1)",
    borderRadius: "5px",
    padding: "1rem"
  }
}