import { useEffect, useState } from "react";
import { Todo } from "../../type";
import styles from "./styles.module.css";
import { v4 } from "uuid";

type Props = {
  selectedTodo?: Todo | null;
  onSave: (args: Omit<Todo, "checked">) => void;
  onDelete: () => void;
  onToggle: () => void;
  onAdd: () => void;
};
export const TodoContent = (props: Props) => {
  const { selectedTodo, onDelete, onSave, onToggle, onAdd } = props;

  const [input, setInput] = useState("");

  useEffect(() => {
    if (selectedTodo) {
      setInput(selectedTodo.name);
    }
  }, [selectedTodo]);
  return (
    <div className={styles.container}>
      {/* header  */}

      <div className={styles.header}>
        <button onClick={onToggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-Width="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
        <p className="">{selectedTodo ? "Edit Task" : "Add New Task"}</p>

        <button onClick={onAdd}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        </button>
      </div>

      {/* input */}

      <div className={styles.input_card}>
        <label htmlFor="name">Task Name</label>
        <input
          name="name"
          type="text"
          className={styles.input}
          placeholder=""
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      {/* buttons */}

      <div className={styles.btns}>
        {selectedTodo && (
          <button
            type="button"
            onClick={() => {
              onDelete();
              setInput("");
            }}
            className={styles.delete_btn}
          >
            Delete
          </button>
        )}
        <button
          type="button"
          disabled={input.length === 0}
          onClick={() => {
            onSave({ name: input, id: selectedTodo ? selectedTodo.id : v4() });
            setInput("");
          }}
          className={styles.save_btn}
        >
          Save
        </button>
      </div>
    </div>
  );
};
