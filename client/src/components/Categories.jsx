import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const categories_container = {
  display: `flex`,
  padding: `20px`,
  justifyContent: `space-between`,
  flexWrap: `wrap`,
};
const categories_container_title = {
  margin: `10px`,
  paddingLeft: `30px`,
  fontSize: `25px`,
  fontWeight: 700,
  color: `#2C4152`,
  letterSpacing: `0.8px`,
};

const Categories = () => {
  return (
    <>
      <h1 style={categories_container_title}>categories</h1>
      <div style={categories_container}>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default Categories;
