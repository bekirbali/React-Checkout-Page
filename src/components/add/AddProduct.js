import styles from "./AddProduct.module.scss";

export const AddProduct = () => {
  const submitHandler = () => {};

  return (
    <div className={styles.main}>
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
          <button className="btn btn-success">Add Item</button>
        </div>
      </form>
    </div>
  );
};
