import { Wrapper, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleHideDone,
  setAllDone,
  selectHideDone,
  selectIsTaskListEmpty,
  selectTasks,
} from "../tasksSlice";

const Buttons = () => {
  const hideDone = useSelector(selectHideDone);
  const isEmpty = useSelector(selectIsTaskListEmpty);
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();

  if (isEmpty) return null;

  return (
    <Wrapper>
      <Button onClick={() => dispatch(toggleHideDone())}>
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </Button>

      <Button
        onClick={() => dispatch(setAllDone())}
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </Button>
    </Wrapper>
  );
};

export default Buttons;
