// import { revalidatePath } from "next/cache";

const onFetchPosts = async () => {
  try {
    let res = await fetch("http://localhost:5000/product", {
      method: "GET",
      cache: "force-cache",
      next: {
        revalidate: 10,
      },
    });
    res = await res.json();
    return res;
  } catch (error) {
    console.log(error);
  }
};

const FetchingPage = async () => {
  const product = await onFetchPosts();
  console.log(product);

  return (
    <>
      <div>
        <h1>Fetching Page is NextJS</h1>
        {product?.map((item, index) => {
          return <h3 key={index}>{item.name}</h3>;
        })}
      </div>
    </>
  );
};

export default FetchingPage;
