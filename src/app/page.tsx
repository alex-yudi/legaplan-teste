import TodoList from "./components/TodoList";
import { TaskProvider } from "./context/TaskContext";

export default function Home() {
  return (
    <TaskProvider>
      <main>
        <TodoList />
      </main>
    </TaskProvider>
  );
}
