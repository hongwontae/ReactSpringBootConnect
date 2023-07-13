import BasicLayout from "../layouts/BasicLayout";


const AboutPage = () => {

    console.log("about go")
    return ( 
        <div  className="bg-backImg bg-cover bg-no-repeat">
        <BasicLayout></BasicLayout>
        <div className="text-white text-center text-3xl font-bold ">
          <p>This is main Page</p>
          <p>It is combined by React.js and Spring Boot program.</p>
          <p>Back-End Side is used to Spring boot and JPA with MySQL.</p>
          <p>Front-End Side is used to React.</p>
          <p>Especially, React is used Router library for making React as web program. </p>
          <p>It is made During 2 months</p>
          <div className="flex justify-center items-center">
          <img  src={require('../image/backimage.jpg')} ></img>
          </div>
         </div>
      </div>
     );
}
 
export default AboutPage;