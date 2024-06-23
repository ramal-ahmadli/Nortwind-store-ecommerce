import React, { useEffect } from "react";
import { Button, Table } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, selectAllProducts } from "./productSlice";

function ProductList() {
  const products = useSelector(selectAllProducts);
  const status = useSelector((state) => state.products.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);
  return (
    <div>
      <h1>
        <Button disabled>Product List</Button> 
      </h1>
      <Table> 
      <thead>
        <tr>
          <th>Id</th>
          <th>Product Name</th>
          <th>Quantity Per Unit</th>
          <th>Unit Price</th>
          <th>Units In Stock</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
          {products.map(product =>{
              return(
                <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td><Button color="success">Add</Button></td>
              </tr>
              )
          })}  
      </tbody>
    </Table>
    </div>
  );
}

export default ProductList;
