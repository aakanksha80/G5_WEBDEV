let blogs = [
  {
    id: 1,
    title: "My First Blog",
    content: "This is my first blog post.",
    author: "Aakanksha Sharma",
    date: "2025-07-20",
  },
  {
    id: 2,
    title: "Another Post",
    content: "Learning frontend with JavaScript.",
    author: "Shanaya",
    date: "2025-07-18",
  },
];

let blogIdCounter = blogs.length + 1;

function displayBlogs() {
  const blogList = document.getElementById("blogList");
  blogList.innerHTML = "";

  if (blogs.length === 0) {
    blogList.innerHTML = "<li>No blogs available.</li>";
    return;
  }

  blogs.forEach((blog) => {
    const li = document.createElement("li");
    li.className = "blog-item";

    li.innerHTML = `
      <h3>${blog.title}</h3>
      <p>${blog.content}</p>
      <div class="meta"><strong>${blog.author}</strong> | ${blog.date}</div>
      <button class="delete-btn" onclick="deleteBlog(${blog.id})">Delete</button>
    `;

    blogList.appendChild(li);
  });
}

function addBlog() {
  const title = document.getElementById("title").value.trim();
  const content = document.getElementById("content").value.trim();
  const author = document.getElementById("author").value.trim();

  if (!title || !content || !author) {
    alert("All fields are required.");
    return;
  }

  const date = new Date().toISOString().split("T")[0];

  const newBlog = {
    id: blogIdCounter++,
    title,
    content,
    author,
    date,
  };

  blogs.push(newBlog);

  // Clear form
  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
  document.getElementById("author").value = "";

  displayBlogs();
}

function deleteBlog(id) {
  blogs = blogs.filter((blog) => blog.id !== id);
  displayBlogs();
}

document.addEventListener("DOMContentLoaded", () => {
  displayBlogs();
  document.getElementById("addBlogBtn").addEventListener("click", addBlog);
});