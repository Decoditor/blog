// import { posts } from "./dummy.js";

const allPosts = document.getElementById("posts");
// localStorage.setItem("posts", JSON.stringify(posts));
let newPosts = JSON.parse(localStorage.getItem("posts"));
// alert(poster);
newPosts.forEach((post) => {
  const div = document.createElement("div");
  div.className = "post";

  const texts = document.createElement("div");
  texts.className = "texts";

  const h4 = document.createElement("h4");
  h4.innerHTML = post.title;

  const p = document.createElement("p");
  p.innerHTML = post.date;

  texts.appendChild(h4);
  texts.appendChild(p);
  div.appendChild(texts);

  allPosts.appendChild(div);

  //   ICONS
  let imgs = document.createElement("div");
  imgs.className = "icons";

  const edit = document.createElement("img");
  edit.src = "images/edit.png";
  const del = document.createElement("img");
  del.src = "images/delete.png";
  const view = document.createElement("img");
  view.src = "images/view.png";

  const viewLink = document.createElement("a");
  viewLink.href = "post.html?id=" + post.id;
  viewLink.appendChild(view);

  const editLink = document.createElement("a");
  editLink.href = "addPost.html?id=" + post.id;
  editLink.appendChild(edit);

  const delLink = document.createElement("a");
  delLink.href = "dashboard.html?id=" + post.id;
  delLink.appendChild(del);

  imgs.appendChild(editLink);
  imgs.appendChild(delLink);
  imgs.appendChild(viewLink);

  div.appendChild(imgs);
});
const user = document.getElementById("user");
let loggedIn = localStorage.getItem("isLoggedIn");

if (loggedIn) {
  user.innerHTML = loggedIn;
} else {
  location.href = "/";
}

let param = new URLSearchParams(location.search);
const postId = param.get("id");

if (postId) {
  let conf = confirm("Are you sure you want to delete it?");
  if (conf) {
    const delet = newPosts.filter((po) => po.id != postId);
    localStorage.setItem("posts", JSON.stringify(delet));
    location.href = "dashboard.html";
  }
  location.href = "dashboard.html";
}
