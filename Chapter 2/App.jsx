import Products from "./Products";


function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}



function App() {
  const user = {
    firstName: 'Greg',
    lastName: 'Tan',
    imageUrl: 'https://picsum.photos/200/150'
  }

  return (
    <div>
      <h1>Hello, {formatName(user)}</h1>
      <img src={user.imageUrl} />
      <Products />
    </div>
  )
}

export default App
