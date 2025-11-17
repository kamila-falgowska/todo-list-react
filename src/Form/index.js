import { useState } from "react";
import { StyledForm, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedContent = newTaskContent.trim();
    if (!trimmedContent) return;

    addNewTask(trimmedContent);
    setNewTaskContent("");
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        className="form__input"
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)} />
      <Button className="form__button">Dodaj zadanie</Button>
    </StyledForm>
  )
};

export default Form;