import ArticleList from "./components/ArticleList";
import ArticleDetails from "./components/ArticleDetails";
import {
  Switch,
  Route
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route path="/articles/:id"  component={ArticleDetails} />
          <Route path="/"  component={ArticleList} />
      </Switch>
    </div>
  );
}



export default App;
