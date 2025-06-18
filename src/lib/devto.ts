 const BASE_URL = "https://dev.to/api";

export const fetchPosts = async (limit =450) => {
  const res = await fetch(`${BASE_URL}/articles?per_page=${limit}`);
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};


// export const fetchrecentPosts = async ( limit= 5) =>{
//  const res = await fetch (`${BASE_URL}/articles?per_page=${limit}`);
//    if (!res.ok) throw new Error("Failed to fetch posts");
//    return res.json();
// }


 export const fetchMostViewedPosts = async (limit = 10) => {
  const res = await fetch(`${BASE_URL}/articles?per_page=${limit}&top=65`);
  if (!res.ok) throw new Error("Failed to fetch most viewed posts");
  return res.json();
};