import React, {useState, useCallback, useEffect} from "react";
import Item from "./Item.js";
import "./index.css";
import useFetch from "./useFetch";


export default function Shop() {
  const [items, setItems] = useState([]);
  const { get, loader } = useFetch()

  const memoizedGet = useCallback(get, [get])

    useEffect(()=>{
      memoizedGet(' https://covid-shop-mcs.herokuapp.com')
            .then(data => setItems(data))
            .catch(err => console.error(err))
    }, [memoizedGet])



  return (
    <div className="shop">
      {loader&&<h3>Идет загрузка товаров...</h3>}
      {!loader&&items.map((item) => (
        <Item key={item.id} info={item} />
      ))}
    </div>
  );
}
