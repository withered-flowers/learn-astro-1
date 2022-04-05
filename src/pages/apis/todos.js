export async function get() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  if (!posts) {
    return new Response(null, {
      status: 404,
      statusText: "Not Found",
    });
  }

  return new Response(
    JSON.stringify({
      statusCode: 200,
      posts,
    }),
    {
      status: 200,
      statusText: "OK",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
