import { Wrapper, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleHideDone,
  setAllDone,
  selectHideDone,
  selectIsTaskListEmpty,
  selectTasks,
} from "../tasksSlice";
import { fetchExampleTasks } from "../tasksSlice";


const Buttons = () => {
  const hideDone = useSelector(selectHideDone);
  const isEmpty = useSelector(selectIsTaskListEmpty);
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Button onClick={() => dispatch(fetchExampleTasks())}>
        Pobierz przykładowe zadania
      </Button>

      {!isEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>

          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={tasks.every(({ done }) => done)}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </Wrapper>
  );
};

export default Buttons;
