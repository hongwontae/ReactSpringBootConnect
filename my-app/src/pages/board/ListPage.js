import { useSearchParams } from "react-router-dom";

const ListPage = () => {

  const [search, useSearch]= useSearchParams;

  console.log(search)

  const page = search.get("page")

  console.log(page)

  return ( 
    <div>
      Board List Page
    </div>
   );
}
 
export default ListPage;