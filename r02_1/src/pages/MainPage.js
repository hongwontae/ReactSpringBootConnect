import TodoList from "../components/todo/TodoList";
import BasicLayout from "../layouts/BasicLayout";



const MainPage = () => {

  console.log("main go")
  return (
    <div className="text-center font-serif text-2xl text-white">
      <BasicLayout>
        <TodoList></TodoList>
      </BasicLayout>

    </div>
  );
}

export default MainPage;
