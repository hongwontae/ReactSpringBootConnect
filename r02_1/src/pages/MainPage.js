import TodoList from "../components/todo/TodoList";
import BasicLayout from "../layouts/BasicLayout";



const MainPage = () => {

    console.log("main go")
    return (
        <div  className="bg-backImg bg-cover bg-no-repeat">
          <BasicLayout></BasicLayout>
          <div className="text-white text-center text-3xl font-bold ">

            <TodoList></TodoList>
            <div className="flex justify-center items-center">
            <img  src={require('../image/backimage.jpg')} ></img>
            </div>
           </div>
        </div>
      );
}
 
export default MainPage;
