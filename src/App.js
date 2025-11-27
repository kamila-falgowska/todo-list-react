import { Switch, Route, HashRouter, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import Navigation from "./Navigation";
import { toTasks, toAuthor, toTask } from "./routes";
import { GlobalStyle } from "./GlobalStyle";

const App = () => (
  <HashRouter>
    <GlobalStyle />
    <Navigation />

    <Switch>
      <Route path={toTask(":id")}>
        <TaskPage />
      </Route>

      <Route path={toAuthor()}>
        <AuthorPage />
      </Route>

      <Route path={toTasks()}>
        <TasksPage />
      </Route>

      <Redirect to={toTasks()} />
    </Switch>
  </HashRouter>
);

export default App;
