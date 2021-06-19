import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} =useParams()
    const {data:blog,isPending,error} =useFetch('https://my-json-server.typicode.com/abhashkmr/blog-project-db/blogs/'+ id)
    const history=useHistory();

    const handleDelete=()=>{
        fetch('https://my-json-server.typicode.com/abhashkmr/blog-project-db/blogs/'+id,{
            method:'DELETE'
        }).then(()=>{
            history.go(-1);
        })
    }

    return ( 
        <div className="blog-details">
            
            {isPending && <div>Loading</div>}
            
            {blog && (
            <article>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handleDelete}>Delete Blog!</button>
            </article>
            )}
           
        </div>
     );
}
 
export default BlogDetails;