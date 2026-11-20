import { useNavigate, useParams } from "react-router";
import useFetch from "./useFetch";

function BlogDetails() {

    const { id } = useParams();
    const { data: blog, isLoading, error } = useFetch('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate()
    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: "DELETE"
        }).then(() => {
            navigate('/')
        })
    }



    return (
        <div className="blog-details">
            {isLoading && <div>Loading.....</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <div className="button-group">
                    <button onClick={handleDelete}>Delete</button>
                    <button onClick={()=> navigate(`/edit/${blog.id}`)}>Edit</button>
                    </div>
                </article>
            )}
        </div>
    )
}

export default BlogDetails;