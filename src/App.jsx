import * as React from "react";
import useSWR from "swr";

export default function App(props) {
  const [productData, setData] = React.useState(props.productData);

  const fetcher = (url) => fetch(url).then((r) => r.json()).then((data) => {
    setData(data.data);
    return data.data
  });
  const { data, error } = useSWR("/products", fetcher)

  // if (error) return <div>failed to load</div>
  // if (!data) return <div>loading...</div>

  return (
    <main>
    <header>
        <h1>Hello</h1>
      </header>
        {productData &&
          productData.map((product) => (
            <div key={product.id}>
              <h2>{product.name}</h2>
              <p>{`${product.price} CLP`}</p>
            </div>
          ))}
      </main>
  );
}
