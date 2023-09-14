import { products } from "../constants";
import { useState } from "react";
import ShoeCard from "../components/ShoeCard";
const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(products[0].imgURL);
  const [selectedName, setName] = useState(products[0].name);
  const [selectedPrice, setPrice] = useState(products[0].price);

  return (
    <section className="flex flex-col gap-4">
      {/* text part */}
      <div className="text-center">
        <h1 className="title">
          <span className=" text-violet-600">Our </span>Collection
        </h1>
        <p className="font-roboto text-slate-500 leading-normal mt-4">
          Experience the fusion of style, performance, and innovation with our
          exclusive collection of Nike shoes
        </p>
      </div>
      {/* big card part */}
      <div
        className="bg-productsBg bg-cover
       padding flex justify-between
        items-center max-md:flex-col"
      >
        <div className="text-[50px] max-md:text-3xl font-montserrat font-bold">
          <h1 className="min-w-fit">{selectedName}</h1>
          <p className=" text-violet-600">{selectedPrice}</p>
        </div>
        <div className="max-md:w-[400px]">
          <img src={selectedProduct} width={700} height={200} />
        </div>
      </div>
      {/* other collection */}
      <div
        className="flex flex-row-reverse justify-center items-center sm:gap-6 gap-4
        max-sm:px-6 px-5"
      >
        {products.map((product) => (
          <div key={product.thumbnail}>
            <ShoeCard
              imgURL={product}
              changBigShoeImage={(product) => setSelectedProduct(product)}
              bigShoeImg={selectedProduct}
              changeName={(product) => setName(product)}
              changePrice={(product) => setPrice(product)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
