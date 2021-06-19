
import BlogList from "./BlogList"
import useFetch from "./useFetch";

const Home = () => {
    const {data:blogs,isPending,error}= useFetch('https://my-json-server.typicode.com/abhashkmr/blog-project-db/blogs')
    return ( 
        <div className="home">
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs!" />}
        </div>
     );
}
 
export default Home;