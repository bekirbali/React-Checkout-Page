import { Header } from "../components/Header";
import { AddProduct } from "../components/AddProduct";
import { ProductList } from "../components/list/ProductList";
import styles from "./Home.module.scss";
export const Home = () => {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <AddProduct />
        <ProductList />
      </div>
    </>
  );
};
