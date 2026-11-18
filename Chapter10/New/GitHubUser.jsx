import { useParams, useNavigate } from 'react-router'
import { Button } from 'react-bootstrap'

function GitHubUser() {
  const { login, id } = useParams()   // the :login and :id from the URL
  const navigate = useNavigate()

  return (
    <div>
      <h1>User Login: {login}</h1>
      <h2>User Id: {id}</h2>
      <Button variant="primary" onClick={() => navigate('/github')}>
        Go to GitHub Users
      </Button>
    </div>
  )
}

export default GitHubUser;