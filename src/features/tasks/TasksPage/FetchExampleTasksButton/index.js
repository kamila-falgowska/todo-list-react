import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks } from "../../tasksSlice";
import { selectLoading } from "../../selectors";
import { Button } from "./styled";

const FetchExampleTasksButton = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    return (
        <Button
            onClick={() => dispatch(fetchExampleTasks())}
            disabled={loading}
        >
            {loading ? "Ładowanie…" : "Pobierz przykładowe zadania"}
        </Button>
    );
};

export default FetchExampleTasksButton;
