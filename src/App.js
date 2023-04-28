import './App.css';
import TaskAdd from './components/TaskAdd';
import TaskList from './components/TaskList'
import { Provider } from 'react-redux'
import { store } from './redux'
import TaskLenght from './components/TaskLenght';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div className="App">
        <Provider store = {store}>
          <TaskAdd />
          <div className="bloc">
            <TaskLenght className="mb-4"/>
            <TaskList />
          </div>
        </Provider>
      </div>
  );
}

export default App;
