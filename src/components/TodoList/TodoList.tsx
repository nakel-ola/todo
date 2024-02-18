import { Todo } from "../../type";
import styles from "./styles.module.css";

export type TodoListProps = {
  todos: Todo[];
  onSelect: (value: Todo) => void;
  onChecked: (id: string) => void;
  onAdd: () => void;
  onClose: () => void;
};
export const TodoList = (props: TodoListProps) => {
  const { todos, onSelect, onChecked, onAdd, onClose } = props;

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        {/* navbar */}
        <div className={styles.header}>
          <img src="/images/user.png" alt="" className="" />

          <div className="">
            <p className={styles.user_name}>Hello, John</p>

            <p className={styles.user_desc}>What are your plans for today?</p>
          </div>

          <button type="button" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        {/* banner */}

        <div className={styles.banner}>
          <img src="/images/cup.png" alt="" className="" />

          <p className="">Go Pro Upgrade Now</p>

          <div className={styles.price_card}>
            <p className="">$1</p>
          </div>
        </div>

        {/* list */}

        <ul className={styles.todo_list}>
          {todos.map((item, index) => (
            <li key={index} className={styles.todo_list_item}>
              <div className="">
                <button
                  onClick={() => onChecked(item.id)}
                  className={item.checked ? styles.checked : ""}
                >
                  {item.checked ? (
                    <svg
                      width="14"
                      height="11"
                      viewBox="0 0 14 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.7177 1L4.66177 9.05589L1 5.39412"
                        stroke="#399649"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : null}
                </button>
                <p className={item.checked ? styles.checked_text : ""}>
                  {item.name}
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  onSelect(item);
                  onClose();
                }}
              >
                Edit
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* add icon */}
      <button
        type="button"
        onClick={() => {
          onAdd();
          onClose();
        }}
        className={styles.add_btn}
      >
        <img src="/images/add.svg" alt="Add Icon" />
      </button>
    </div>
  );
};
