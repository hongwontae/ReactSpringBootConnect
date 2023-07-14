import TodoInput from "../components/todo/TodoInput";
import CounterButton from "../counter/CounterButton";
import CounterDisplay from "../counter/CounterDisplye";
import BasicLayout from "../layouts/BasicLayout";


const AboutPage = () => {

  console.log("about go")
  return (
    <div className="text-center font-serif text-2xl text-white">
    <BasicLayout>
      <TodoInput></TodoInput>
      <CounterDisplay></CounterDisplay>
      <CounterButton></CounterButton>
    </BasicLayout>

    </div>
  );
}

export default AboutPage;