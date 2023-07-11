import BasicLayout from "../layouts/BasicLayout";


const AboutPage = () => {

    console.log("about go")
    return ( 
        <div>
        <div className="text-center font-serif text-2xl text-white">
        <BasicLayout> About Page</BasicLayout>
        </div>
        <div className="p-">
            <div className="text-4xl text-center">About</div>
        </div>
        </div>
     );
}
 
export default AboutPage;