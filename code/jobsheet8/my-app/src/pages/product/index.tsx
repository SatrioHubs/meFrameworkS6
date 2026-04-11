import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TampilanProduk from "../views/products";
import useSWR from "swr";
import fetcher from "../utils/swr/fetcher";

type ProductType = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

const kategori = () => {
  // const [isLogin, setIsLogin] = useState(false);
  // const { push } = useRouter();
  const [products, setProducts] = useState<ProductType[]>([]);
  // console.log("products:", products);

  // useEffect(() => {
  //   if (!isLogin) {
  //     push("/auth/login");
  //   }
  // }, []);
  const { data, error,isLoading } = useSWR("/api/produk", fetcher);
  useEffect(() => {
    fetch("/api/produk")
      .then((response) => response.json())
      .then((responsedata) => {
        setProducts(responsedata.data);
      })
      .catch((error) => {
        console.error("Error fetching produk:", error);
      });
  }, []);

  return (
    <div>
      <TampilanProduk products={isLoading ? [] : data?.data || []} />
    </div>
  );
};

export default kategori;
