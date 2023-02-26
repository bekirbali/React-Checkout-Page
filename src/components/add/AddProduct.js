import styles from "./AddProduct.module.scss";
// import { data } from "../../utils/data";

export const AddProduct = ({ show, setShow }) => {
  const submitHandler = () => {};
  const addHandler = (e) => {
    e.preventDefault();
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
          <form onSubmit={submitHandler}>
            <label htmlFor="title">Title</label>
            <input
              className="form-control"
              type="text"
              name="title"
              id="title"
              placeholder="Title..."
            />
            <label htmlFor="price">Price</label>
            <input
              className="form-control"
              type="number"
              name="price"
              id="price"
              placeholder="Price..."
            />
            <label htmlFor="image">Image</label>
            <input
              className="form-control"
              type="text"
              name="image"
              id="image"
              placeholder="Image URL..."
            />
            <div className={styles.button}>
              <button className="btn btn-danger mx-2" onClick={cancelHandler}>
                Cancel
              </button>
              <button className="btn btn-success" onClick={addHandler}>
                Add Item
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
