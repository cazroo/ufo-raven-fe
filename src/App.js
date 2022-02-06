import "./App.css";
import BasicTable from "./components/BasicTable";

import { Link } from "react-router-dom";

function App() {
    const columns = React.useMemo(
        () => [
          {
            Header: "Company",
            accessor: "company" // accessor is the "key" in the data
          },
          {
            Header: "Contact",
            accessor: "contact"
          },
          {
            Header: "Country",
            accessor: "country"
          }
        ],
        []
      );
    const data = React.useMemo(
        () => [
          {
            company: "Alfred",
            contact: "Maria Anders",
            country: "Germany"
          },
          {
            company: "Centro comercial Moctezuma",
            contact: "Francisco Chang",
            country: "Mexico"
          },
          {
            company: "Ernst Handel",
            contact: "Roland Mendel	",
            country: "Austria"
          }
        ],
        []
      );
    

}

return (
 <BasicTable columns={columns} data={data}/>
)

export default App;