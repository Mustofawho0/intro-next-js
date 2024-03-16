const onFetchUsers = async () => {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
      cache: "no-store",
    });
    await new Promise((r) => setTimeout(r, 10000));
    res = await res.json();
    return res;
  } catch (error) {
    console.log(error);
  }
};
export default async function UserComponent() {
  // const posts = await onFetchPosts();
  const users = await onFetchUsers();
  return (
    <div>
      {/* <h1>Fetching Pattern Page</h1> */}
      {/* <h5 className="text-red-400">{JSON.stringify(posts).slice(0, 100)}</h5> */}
      <h5 className="text-blue-400">{JSON.stringify(users).slice(0, 100)}</h5>
    </div>
  );
}
