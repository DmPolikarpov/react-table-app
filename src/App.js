import React, {useState, useEffect} from 'react';
import './App.css';
import Table from './components/TableContent/TableContent';
import Paginator from './components/Paginator/Paginator';
import Searchbox from './components/Searchbox/Searchbox';

function App() {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [notesPerPage, setNotesPerPage] = useState(50);
  const [searchField, setSearchField] = useState('');
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setComments(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  let onSearchChange = (e) => {
    setSearchField(e.target.value);
  }
  let filteredComments = comments.filter(comment => {
    let filteredComment;
    let name = comment.name.toLowerCase().includes(searchField.toLowerCase());
    let email = comment.email.toLowerCase().includes(searchField.toLowerCase());
    let body = comment.body.toLowerCase().includes(searchField.toLowerCase());
    if (comment.id === searchField | name | email | body) {
      filteredComment = comment;
    }
    return filteredComment;
  })
  const lastNoteInPage = currentPage * notesPerPage;
  const firstNoteInPage = lastNoteInPage - notesPerPage;
  let notesInCurrentPage = filteredComments.slice(firstNoteInPage, lastNoteInPage); 

  let paginatorButton = currentPage => {setCurrentPage(currentPage)};

  return (
    <div className="App">
      <div style={{textAlign : "center"}}><h1>Comments</h1></div>
      <Searchbox searchChange={onSearchChange} />
      <Table allComments={notesInCurrentPage} />
      <Paginator 
        comments={filteredComments} 
        notesPerPage={notesPerPage} 
        paginatorButton={paginatorButton}
      />
    </div>
  );
}

export default App;
