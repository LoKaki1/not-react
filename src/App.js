import './App.css';
import Table from './Components/DataGridShahar';
import Draggable from 'react-draggable'

const styles = {
  watchlist:{
    width:'200px',
    height:'300px',
    boxShadow: '1px 5px 8px black',
    backgroundColor:'white',
  },
  watchlistText:{
    
    color:'Black',
    fontFamily:'Fantasy',
    fontSize:'30px'
  }
}

function App() {
  return (
    <div className="App">
      <Draggable>
        <div style={styles.watchlist}>
          <a style={styles.watchlistText}>Watchlist</a>
        </div>
      </Draggable>
    </div>
  );
}

export default App;
