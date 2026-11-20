import { useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

function Home() {

    const [searchTitle, setSearchTitle] = useState('');
    const [searchAuthor, setSearchAuthor] = useState('');
    const params = new URLSearchParams();
    if (searchTitle.trim()) {
        params.set("title:contains", searchTitle.trim());
    }
    if (searchAuthor.trim()) {
        params.set("author:contains", searchAuthor.trim());
    }
    const [url, setURL] = useState(`http://localhost:8000/blogs?${params}`);

    const { data: blogs, isLoading, error } = useFetch(url);

    const handleSearch = () => {
        if (searchTitle.trim()) {
            params.set("title:contains", searchTitle.trim());
        }
        if (searchAuthor.trim()) {
            params.set("author:contains", searchAuthor.trim());
        }

        setURL(`http://localhost:8000/blogs?${params}`);
    }
    return (

        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading</div>}
            {blogs && <BlogList blogs={blogs} title='Blogs'
                setSearchAuthor={setSearchAuthor}
                setSearchTitle={setSearchTitle}
                author={searchAuthor}
                handleSearch={handleSearch} />}
            <p>{name}</p>
        </div>
    )
}

export default Home;