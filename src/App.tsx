import AddTodoForm from "./components/AddTodoForm"
import TodoList from "./components/TodoList"
import TodoSummary from "./components/TodoSummary"
import usetodos from "./hooks/usetodos"



function App() {
  const { todos, addTodo, setTodoCompleted, deleteTodo, deleteAllCompleted } = usetodos()

  return (
    <main className="py-10 h-screen space-y-5">
      <h1 className="font-bold text-3xl text-center">Your Todos</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-5">
        <AddTodoForm
          onSubmit={addTodo}
        />
        <TodoList todos={todos} onCompletedChange={setTodoCompleted} onDelete={deleteTodo} />
      </div>
      <TodoSummary todos={todos} deleteAllCompleted={deleteAllCompleted} />
    </main>
  )
}

export default App
