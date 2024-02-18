import { useEffect, useState } from "react";
import { Todo } from "../../type";
import styles from "./styles.module.css";
import { v4 } from "uuid";

type Props = {
  selectedTodo?: Todo | null;
  onSave: (args: Omit<Todo, "checked">) => void;
  onDelete: () => void;
};
export const TodoContent = (props: Props) => {
  const { selectedTodo, onDelete, onSave } = props;

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
        <p className="">{selectedTodo ? "Edit Task" : "Add New Task"}</p>
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
