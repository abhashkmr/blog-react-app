import { Link } from "react-router-dom"

const NotFound = () => {
    return (  
        <div className="not-found">
            <h2>Sorry!</h2>
            <p>The page you are looking for is unavailable</p>
            <Link to="/">Back to HomePage</Link>
        </div>
    );
}
 
export default NotFound;
