import './App.css'
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'

import { personalLibrary } from './data/data'

function App() {

  return (
    <>
      <Header />

      {personalLibrary.map(book => (
        <Content 
          key={book.isbn}
          title={book.title}
          author={book.author}
          description={book.description}
          genre={book.genre}
          publicationYear={book.publicationYear}
        />
      ))}

      <Footer />
    </>
  )
}

export default App
