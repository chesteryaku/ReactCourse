import Products from './Products';
import Rating from './Rating';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function formatName(user) {
  return user.firstName + ' ' + user.lastName
}

function App() {
  const user = {
    firstName: 'Greg',
    lastName: 'Tan',
    imageUrl: 'https://picsum.photos/200/150'
  }

  const isValid = false;

  return (
    <div>
      <h1>Hello, {formatName(user)}</h1>
      <img src={user.imageUrl}></img>
      <Products />
      <Button variant='danger' disabled={!isValid}>Default</Button>
      <Rating rating='1' />
      <Rating rating='2' />
      <Rating rating='3' />
      <Rating rating='4' />
      <Rating rating='5' />
    </div>
  )
}

export default App
