import { useEffect, useState } from "react";
import { data } from "../../utils/data";
import { Card } from "./Card";
export const ProductList = () => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      data.reduce((sum, item) => sum + item.price * item.dampingRate, 0)
    );
  }, []);
  return (
    <div>
      {data.map((item) => {
        return (
          <Card key={item.id} {...item} setTotal={setTotal} total={total} />
        );
      })}
      {total.toFixed(2)}
    </div>
  );
};
