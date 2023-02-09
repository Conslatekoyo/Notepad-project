import { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  // const fetchData = async () => {
  //   const request = await axios.get('http://localhost:5000')
  //   const response = request.data
  //   return response
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();    
  }

  return (
    <div className="App">
      <nav style={{ marginBottom: '10px', padding: '20px' }}>Navbar</nav>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />

        <button type='submit'>Send</button>
      </form>

      <div>
        <h2>Title: This is a title</h2>
        <p>Description: This is a description</p>
        <button>Delete</button>
        <button>Update</button>
      </div>      
    </div>
  );
}

export default App;
