import * as React from "react";
import useSWR from "swr";
import { Navigation } from "./components/Navigation";
import { ProductGrid } from "./components/products/ProductGrid";
import { SectionCarousel, SectionFooter, SectionFull } from "./components/Section";

export default function App(props) {
  const [productData, setData] = React.useState(props.productData);

  const fetcher = (url) =>
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        setData(data.data);
        return data.data;
      });
  const { data, error } = useSWR("/products", fetcher);

  // if (error) return <div>failed to load</div>
  // if (!data) return <div>loading...</div>

  return (
    <main>
      <Navigation />
      {/* <SectionCarousel /> */}
      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
        <ProductGrid products={productData} />
      </div>
      {/* <SectionFull /> */}

      <SectionFooter />
    </main>
  );
}
