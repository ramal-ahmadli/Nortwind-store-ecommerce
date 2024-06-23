import React, { useEffect } from "react";
import { Button, ListGroupItem, ListGroup } from "reactstrap";
import { fetchCategories, selectAllCategories } from "./categorySlice";
import { useSelector, useDispatch } from "react-redux";

function CategoryList() {
  const categories = useSelector(selectAllCategories);
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories.status); 

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategories());
    }
  }, [dispatch, status]);

  

  return (
    <div>
      <h1>
        <Button disabled color="warning">
          Category List
        </Button>
      </h1>
      <ListGroup>
        {categories.map((category) => {
          return (
            <ListGroupItem key={category.id}>
              {category.categoryName}
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </div>
  );
}

export default CategoryList;
