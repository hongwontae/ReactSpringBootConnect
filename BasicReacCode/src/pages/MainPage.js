import TodoList from "../components/todo/TodoList";
import BasicLayout from "../layouts/BasicLayout";



const MainPage = () => {

  console.log("main go")
  return (
    <div className="text-center font-serif text-2xl text-white">
      <BasicLayout></BasicLayout>
        <TodoList></TodoList>

    </div>
  );
}

export default MainPage;
