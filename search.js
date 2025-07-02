import { posts } from "./dummy.js";

const container = document.getElementById("container");

let param = new URLSearchParams(window.location.search);
let query = param.get("query")?.toLowerCase() || "";

const filteredPosts = posts.filter(
  (post) =>
    post.title.toLowerCase().includes(query) ||
    post.content.toLowerCase().includes(query)
);
// alert(JSON.stringify(filteredPosts));
if (filteredPosts.length > 0) {
  filteredPosts.forEach((post) => {
    const contLink = document.createElement("a");
    contLink.href = "post.html?id=" + post.id;

    const postContainer = document.createElement("div");
    postContainer.className = "post";

    const title = document.createElement("h3");
    title.innerText = post.title;
    const date = document.createElement("p");
    date.innerText = post.date;
    const content = document.createElement("p");
    content.innerText = post.content.slice(0, 400);

    postContainer.appendChild(title);
    postContainer.appendChild(date);
    postContainer.appendChild(content);
    container.appendChild(contLink);
    contLink.appendChild(postContainer);
  });
} else {
  container.innerText = "No Result Found";
}
