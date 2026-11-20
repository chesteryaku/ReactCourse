import { Link } from "react-router";

function BlogList({
    blogs, title, setSearchTitle, setSearchAuthor, handleSearch, author }) {

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            <div className="search-form">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleSearch();
                }}>
                    <input
                        type="text"
                        onChange={event => setSearchTitle(event.target.value)}
                    />

                    <select
                        value={author}
                        onChange={(e) => setSearchAuthor(e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="mario">mario</option>
                        <option value="yoshi">yoshi</option>
                    </select>
                    <button type="submit">Search</button>
                </form>
            </div>
            {blogs.length > 0 ? blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>
                </div>
            )) : (<h4>
                No Blog found
            </h4>)}
        </div>
    )
}

export default BlogList;