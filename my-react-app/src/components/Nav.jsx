import { Link } from "react-router-dom";

export default function Nav() {  // Setter en default tom array

  return (
    <nav>
        <ul>
            <li>
               <Link to="/html">Html</Link>
            </li>
            <li>
                <Link to={"/css"}>CSS</Link>
             </li>
             <li>
                <Link to={"/javascript"}>JavaScript</Link>
            </li>
            <li>
                <Link to={"/react"}>React</Link>
            </li>
            <li>
                <Link to={"/headless-cms"}>Sanity</Link>
             </li>
        </ul>
        
    </nav>
  );
}