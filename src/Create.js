import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("Abhash");
  const [body, setBody] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    const blog = { title, author, body };
    console.log(blog);

    fetch("https://my-json-server.typicode.com/abhashkmr/blog-project-db/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      history.push("/");
    });
  };
  return (
    <div className="create">
      <h2>Add a new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <label>Blog Body</label>
        <textarea
          required
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>
        <label>Select author:</label>
        <select
          required
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        >
          <option value="Abhash">Abhash</option>
          <option value="Mahtab">Mahtab</option>
          <option value="Rajat">Rajat</option>
          <option value="Sudhanshu">Sudhanhshu</option>
          <option value="Armaan">Armaan</option>
          <option value="Akash">Akash</option>
        </select>

        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog</button>}
      </form>
    </div>
  );
};

export default Create;
