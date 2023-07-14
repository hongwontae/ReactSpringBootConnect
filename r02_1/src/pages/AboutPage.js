import CountButtons from "../components/counter/CountButtons";
import CountDisplay from "../components/counter/CountDisplay";
import TodoInput from "../components/todo/TodoInput";
import BasicLayout from "../layouts/BasicLayout";


const AboutPage = () => {

    console.log("about go")
    return ( 
        <div  className="bg-backImg bg-cover bg-no-repeat">
        <BasicLayout></BasicLayout>
        <div className="text-white text-center text-3xl font-bold ">
        

          <CountDisplay></CountDisplay>
          <CountButtons></CountButtons>

          <TodoInput></TodoInput>

          <div className="flex justify-center items-center">
          <img  src={require('../image/backimage.jpg')} ></img>
          </div>
         </div>
      </div>
     );
}
 
export default AboutPage;