import * as React from "react";
import useSWR from 'swr'

export default function App() {
  const [times, setTimes] = React.useState(0);

  const fetcher = (url) => fetch(url).then((r) => r.json());

  const { data: products, error } = useSWR("/products", fetcher);

  if (!products) {
    return (<div>loading...</div>)};

  return (
    <>
    <header>
      <h1>Hello {times}</h1>
      <button onClick={() => setTimes((times) => times + 1)}>ADD</button>
    </header>
    <main>
      {products && products.data.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price} CLP</p>
        </div>
      ))}
    </main>
    </>
  );
}