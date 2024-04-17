const App = require("./App");

const app = new App

app.createAuthor('J.R.R. Tolkien', 'British', '...')
app.createAuthor('Rick Riordan', 'American', '...')

const authors = app.getAuthors()

//app.createBook('A Sociedade do Anel', '...', 'fantasy', 400, authors[0], '...', 24.99, 100)
app.createBook('O ladrão de raios', '...', 'fantasy', 500, authors[1], '...', 24.99, 100)
app.createBook('A pirâmide vermelha', '...', 'fantasy', 600, authors[1], '...', 24.99, 100)

const books = app.getBooks()

app.createUser('Romão', 'romaoguilherme1@hotmail.com', '123456')

const users = app.getUsers()

const items = [
  {
    product: books[0],
    quantity: 2
  },

  {
    product: books[1],
    quantity: 1
  },

  {
    product: books[3],
    quantity: 1
  }
]

app.createOrder(items, users[0])

app.showDatabase()