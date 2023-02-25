import "./App.scss";
import { Header } from "./components/Header";
import { ProductList } from "./components/list/ProductList";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductList />
    </div>
  );
}

export default App;
