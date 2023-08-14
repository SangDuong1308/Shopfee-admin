import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DeletePrroductPage(){
    const router = useRouter();
    const [productInfo,setProductInfo] = useState();
    const {id} = router.query;
    useEffect(() => {
        if (!id){
            return;
        }
        axios.get('/api/products?id='+id).then(response => {setProductInfo(response.data)});
    },[id]);
    function goBack(){
        router.push('/products');
    }
    async function deleteProduct(){
        await axios.delete('/api/products?id='+id);
        goBack();
    }
    return (
      // <Layout>
      //     <h1>Do you rerally want to delete {productInfo?.title}?</h1>
      //     <div className="flex gap-2">
      //         <button className="btn-red" onClick={deleteProduct}>Yes</button>
      //         <button className="btn-default" onClick={goBack}>No</button>
      //     </div>
      // </Layout>
      <Layout>
        <h1 className="text-center">
          Do you really want to delete &nbsp;&quot;{productInfo?.title}&quot;?
        </h1>
        <div className="flex gap-2 justify-center">
          <button onClick={deleteProduct} className="btn-red">
            Yes
          </button>
          <button className="btn-primary" onClick={goBack}>
            NO
          </button>
        </div>
      </Layout>
    );
}