import styles from "./AddProduct.module.scss";
import { data } from "../../utils/data";
import { useEffect, useState } from "react";
// imgUrl = https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80
export const AddProduct = ({ show, setShow, setNewData, newData }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    setNewData(data);
  }, [setNewData]);

  const addHandler = (e) => {
    e.preventDefault();
    const newItem = {
      id: data.length + 1,
      name: title,
      price: price,
      image: image,
      dampingRate: 0.8,
    };
    setNewData((item) => [...item, newItem]);
    console.log(newData);
    setTitle("");
    setPrice("");
    setImage("");
  };
  const cancelHandler = (e) => {
    e.preventDefault();
    setShow(false);
  };

  return (
    <>
      {show && (
        <div className={styles.main}>
          <h2>Add Item</h2>
          <form>
            <label htmlFor="title">Title</label>
            <input
              className="form-control"
              type="text"
              required
              name="title"
              id="title"
              placeholder="Title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="price">Price</label>
            <input
              className="form-control"
              type="number"
              required
              name="price"
              id="price"
              placeholder="Price..."
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <label htmlFor="image">Image</label>
            <input
              className="form-control"
              type="text"
              required
              name="image"
              id="image"
              placeholder="Image URL..."
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <div className={styles.button}>
              <button
                type="submit"
                className="btn btn-success"
                onClick={addHandler}
              >
                Add Item
              </button>
              <button className="btn btn-danger mx-2" onClick={cancelHandler}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
