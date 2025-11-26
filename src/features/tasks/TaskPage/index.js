import { Container } from "../../../common/Container/styled";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTaskById } from "../selectors";

function TaskPage() {
  const { id } = useParams();
  const task = useSelector(state => selectTaskById(state, id));

  return (
    <Container>
      <Header title="Szczegóły zadania" />

      <Section
        title={task ? task.content : "Nie znaleziono zadania"}
        body={
          task && (
            <p>
              <strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}
            </p>
          )
        }
      />
    </Container>
  );
}

export default TaskPage;
