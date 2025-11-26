import { useSelector, useDispatch } from "react-redux";
import {
  removeTask,
  toggleTaskDone,
} from "../../tasksSlice";

import { selectTasksByQuery } from "../../selectors";

import { List, Item, Content, Button } from "./styled";
import { Link, useLocation } from "react-router-dom";
import searchQueryParamName from "../searchQueryParamName";
import { toTask } from "../../../../routes";

const TaskList = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const query =
    new URLSearchParams(location.search).get(searchQueryParamName) || "";

  const tasks = useSelector(state => selectTasksByQuery(state, query));
  const hideDone = useSelector(state => state.tasks.hideDone);

  return (
    <List>
      {tasks.map(task => (
        <Item key={task.id} $hidden={task.done && hideDone}>
          <Button
            $toggleDone
            onClick={() => dispatch(toggleTaskDone(task.id))}
          >
            {task.done ? "✓" : ""}
          </Button>

          <Content $done={task.done}>
            <Link to={toTask(task.id)}>{task.content}</Link>
          </Content>

          <Button
            $remove
            onClick={() => dispatch(removeTask(task.id))}
          >
            🗑
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
