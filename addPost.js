let content = document.getElementById("content");
let title = document.getElementById("title");
let editBtn = document.getElementById("edit");
let addBtn = document.getElementById("add");
let topText = document.getElementById("text");
const param = new URLSearchParams(window.location.search);
const postId = parseInt(param.get("id"));
const allPost = JSON.parse(localStorage.getItem("posts"));
// alert(JSON.stringify(allPost));
if (postId) {
  addBtn.style.display = "none";
  editBtn.style.display = "block";
  editBtn.style.cursor = "pointer";

  content.value = allPost[postId].content;
  title.value = allPost[postId].title;
  topText.innerText = "Edit Post";

  function editPost() {
    const updatedPost = {
      id: postId,
      title: title.value,
      content: content.value,
      date: allPost[postId].date,
    };

    // alert(JSON.stringify(updatedPost));
    const posts = allPost.map((p) => (p.id == postId ? updatedPost : p));
    // alert(posts);
    alert("post Edited!");

    localStorage.setItem("posts", JSON.stringify(posts));
    location.href = "dashboard.html";
  }
}

function addPost() {
  if (title.value != "" && content.value != "") {
    let newDate = new Date();
    let month = newDate.getMonth();
    let mdate = newDate.getDate();
    let year = newDate.getFullYear();

    let date = `${month}, ${mdate}, ${year}`;
    let newPost = {
      id: allPost.length + 2,
      title: title.value,
      content: content.value,
      date: date,
    };

    allPost.push(newPost);
    localStorage.setItem("posts", JSON.stringify(allPost));

    location.href = "dashboard.html";
  }
  alert("Empty inputs");
}
