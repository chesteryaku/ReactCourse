import React, { useEffect, useState } from 'react';
import axios from 'axios'; // npm install axios
//import ReactLoading from 'react-loading';
import { Col, Container, Row, Spinner } from 'react-bootstrap';

function GitHub() {

    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("greg");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("")
    // useEffect(() => {
    //     axios.get(`https://api.github.com/search/users?q=${searchTerm}`)
    //         .then(res => {
    //             //console.log(res.data.items);
    //             setData(res.data.items);
    //             setIsLoading(false);
    //         });
    // }, [searchTerm])

    const getData = async () => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 3000)); // temporary: 3-second delay
            const res = await axios.get(
                `https://api.github.com/search/users?q=${searchTerm}`,
            );
            setData(res.data.items);
            setError("");
        } catch (err) {
            setError("Could not get users from GitHub. ...");
        }
        setIsLoading(false);
    };

    useEffect(() => {
        getData()
    }, [])   // [] = run once, after the first render

    const listUsers = data.map((user) =>
        <Container key={user.id}>
            <Row className="mb-2">
                <Col xs="auto">
                    <a href={user.html_url}>
                        <img width={64} height={64} src={user.avatar_url} alt={user.login} />
                    </a>
                </Col>
                <Col>
                    <h5>Login: {user.login}</h5>
                    <p>Id: {user.id}</p>
                </Col>
            </Row>
        </Container>
    )
    const handleSubmit = event => {
        event.preventDefault();
        setIsLoading(true);
        getData();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={event => setSearchTerm(event.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <h3>GitHub Users Results</h3>
            {isLoading &&
                //<ReactLoading type="spinningBubbles" color="#444" />
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            }
            {error.length > 0 && <p>{error}</p>}
            {listUsers}
        </div>
    );
}
export default GitHub;