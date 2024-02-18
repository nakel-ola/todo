import { useLocalStorage } from "usehooks-ts";
import { MenuCard, TodoContent, TodoList } from "./components";
import { Todo } from "./type";
import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);

  const [selected, setSelected] = useState<Todo | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = () => {
    if (!selected) return;

    const newTodos = [...todos];

    const index = newTodos.findIndex((todo) => todo.id === selected.id);

    newTodos.splice(index, 1);

    setTodos(newTodos);

    setSelected(null);
  };

  const handleChecked = (id: string) => {
    const newTodos = [...todos];

    const todoExistIndex = newTodos.findIndex((todo) => todo.id === id);

    if (todoExistIndex === -1) return;

    newTodos[todoExistIndex].checked = !newTodos[todoExistIndex].checked;

    setTodos(newTodos);
  };

  const handleSave = (args: Omit<Todo, "checked">) => {
    const { id, name } = args;

    const newTodos = [...todos];

    const todoExistIndex = newTodos.findIndex((todo) => todo.id === id);

    if (todoExistIndex !== -1) {
      newTodos[todoExistIndex].name = name;
    } else {
      newTodos.unshift({ checked: false, name, id });
    }

    setTodos(newTodos);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.todo_list}>
        <TodoList
          todos={todos}
          onSelect={(index) => {
            setSelected(index);
            setIsOpen(false);
          }}
          onChecked={(id) => handleChecked(id)}
          onAdd={() => {
            setSelected(null);
            setIsOpen(false);
          }}
          onClose={() => setIsOpen(false)}
        />
      </div>
      <TodoContent
        selectedTodo={selected}
        onDelete={handleDelete}
        onSave={handleSave}
        onAdd={() => {
          setSelected(null);
        }}
        onToggle={() => setIsOpen(!isOpen)}
      />

      {isOpen ? (
        <MenuCard
          onClose={() => setIsOpen(false)}
          todos={todos}
          onSelect={(index) => setSelected(index)}
          onChecked={(id) => handleChecked(id)}
          onAdd={() => setSelected(null)}
        />
      ) : null}
    </div>
  );
}

export default App;
