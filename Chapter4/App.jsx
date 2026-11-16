import Products from './Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroCard from './HeroCard';

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
      <Products/>
      <HeroCard/>
      <HeroCard>
        A long sentance will be here
      </HeroCard>
    </div>
  )
}

export default App
