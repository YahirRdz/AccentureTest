const fetchItem = async ({ queryKey }) => {
  const id = queryKey[1];
  const apiRes = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);

  if (!apiRes.pk) {
    throw new Error(" fetch not ok");
  }
  return apiRes.json();
};

export default fetchItem;
