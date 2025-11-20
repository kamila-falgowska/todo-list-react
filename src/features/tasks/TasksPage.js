import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { Container } from "../../common/Container/styled";
import { useTasks } from "./useTasks";
import { GlobalStyle } from "../../GlobalStyle";


function TasksPage() {
  const {
    tasks,
    addTask,
    removeTask,
    toggleTaskDone,
    setAllDone,
    hideDone,
    toggleHideDone
  } = useTasks();

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header title="Lista zadań" />

        <Section
          title="Dodaj nowe zadanie"
          body={<Form addNewTask={addTask} />}
        />

        <Section
          title="Lista zadań"
          body={
            <TaskList
              tasks={tasks}
              hideDone={hideDone}
              removeTask={removeTask}
              toggleTaskDone={toggleTaskDone}
            />
          }
          extraHeaderContent={
            <Buttons
              tasks={tasks}
              hideDone={hideDone}
              toggleHideDone={toggleHideDone}
              setAllDone={setAllDone}
            />
          }
        />
      </Container>
    </>
  );
}

export default TasksPage;
