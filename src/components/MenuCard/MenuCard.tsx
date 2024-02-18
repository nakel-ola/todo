import { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import { useWindowSize } from "usehooks-ts";
import { TodoList, type TodoListProps } from "../TodoList/TodoList";

type Props = TodoListProps & {
  onClose: () => void;
};
export const MenuCard = (props: Props) => {
  const { onClose, ...rest } = props;
  const ref = useRef<HTMLDivElement>(null);

  const screen = useWindowSize();

  useEffect(() => {
    if (screen && screen?.width > 1024) {
      onClose();
    }
  }, [onClose, screen]);

  return (
    <div onClick={() => onClose()} className={styles.container}>
      <div
        ref={ref}
        onClick={(e) => e.stopPropagation()}
        className={styles.body}
      >
        <TodoList {...rest} onClose={onClose} />
      </div>
    </div>
  );
};
