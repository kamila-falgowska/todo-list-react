import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
     tasks.length > 0 && (
        <div className="section__buttonArea">
            <button class="section__buttons">
                {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                className="section__buttons"
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
        </div>
    )
);




export default Buttons;