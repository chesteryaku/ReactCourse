import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router'
import useFetch from "./useFetch";




function Edit() {

    const { id } = useParams();
    const { data: blog, isLoading:isPending } = useFetch('http://localhost:8000/blogs/' + id);

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(()=>{
        if(blog){
            setTitle(blog.title);
            setBody(blog.body);
            setAuthor(blog.author);
        }
    },[blog])

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const blog = { title, body, author };

        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("Blog Updated");
            setIsLoading(false);
            navigate('/')
        })
    }

    return (
        <div className="edit">
            <h2>Edit Blog</h2>
            {isPending && <div>Loading</div>}
            {!isPending && <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Blog body</label>
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                />
                <label>Blog Title</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isLoading && <button>Update Blog</button>}
                {isLoading && <button disabled>Updating blog..</button>}
            </form>}
            
        </div>
    );
}

export default Edit;