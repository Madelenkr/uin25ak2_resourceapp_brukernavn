import { Link } from "react-router-dom";
import resources from "../assets/Ressursarkiv/ressurser.js";
import PageTitle from "./PageTitle.jsx"

export default function ResourceCard ({category}) {

  const selectedCategory1 = resources.filter((info) => info.category === category)
  console.log("resourcecard:", selectedCategory1)

  return ( 
  <>
  <h1>Ressurskort</h1>
  <PageTitle tittel={selectedCategory1[0].category} />
    {selectedCategory1.map ((resource) => (
      <article>
        <h3>
          {resource.title}
        </h3>
        <ul>
          <li> 
            <Link to={resource.url}>Klikk her
            </Link>
          </li>
        </ul>
      </article>
 
))}
</>
  );
}