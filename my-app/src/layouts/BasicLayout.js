import SampleNav from "./nav/SampleNav";

const BasicLayout = ({children}) => {
  return ( 
    <div className="bg-blue-200">
    <div className="container mx-auto min-w-[1280px] bg-blue-300">
    <div className="flex justify-center items-center text-4xl font-serif italic font-medium">
        Title
      </div>
      <div>
        <SampleNav></SampleNav>
      </div>
      <div> 
        {children}
      </div>
    </div>
    </div>
  );
}
 
export default BasicLayout;