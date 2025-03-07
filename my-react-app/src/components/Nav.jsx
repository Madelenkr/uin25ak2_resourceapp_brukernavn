
import { Link } from "react-router";
export default function Nav (){
    return(
        <>
        <Link to={"html"}>Html</Link>
        <Link to={"css"}>CSS</Link>
        <Link to={"javascript"}>JavaScript</Link>
        <Link to={"react"}>React</Link>
        <Link to={"sanity"}>Sanity</Link>

        </>
    );
}