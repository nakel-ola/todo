import { Todo } from "../../type";
import styles from "./styles.module.css";

type Props = {
  todos: Todo[];
  onSelect: (value: Todo) => void;
  onChecked: (id: string) => void;
  onAdd: () => void;
};
export const TodoList = (props: Props) => {
  const { todos, onSelect, onChecked, onAdd } = props;

  return (
    <div className={styles.container}>
      {/* navbar */}

      <div className={styles.header}>
        <img src="/images/user.png" alt="" className="" />

        <div className="">
          <p className={styles.user_name}>Hello, John</p>

          <p className={styles.user_desc}>What are your plans for today?</p>
        </div>
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

            <button type="button" onClick={() => onSelect(item)}>
              Edit
            </button>
          </li>
        ))}
      </ul>

      {/* add icon */}
      <button type="button" onClick={onAdd} className={styles.add_btn}>
        <img src="/images/add.svg" alt="Add Icon" />
      </button>
    </div>
  );
};
