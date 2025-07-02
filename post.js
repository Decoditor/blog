import { posts } from "./dummy.js";

const postContainer = document.getElementById("container");

let param = new URLSearchParams(window.location.search);
let postId = parseInt(param.get("id"));
let post = posts.find((p) => p.id === postId);

if (post) {
  const h2 = document.createElement("h2");
  h2.innerText = post.title;
  h2.className = "title";

  const p = document.createElement("p");
  p.innerText = post.content;
  p.className = "content";

  const date = document.createElement("p");
  date.innerText = post.date;
  date.className = "date";

  postContainer.appendChild(h2);
  postContainer.appendChild(date);
  postContainer.appendChild(p);
}
ß;
