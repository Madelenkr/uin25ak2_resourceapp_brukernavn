import Nav from "./nav";
export default function Layout({children}) {

    return (
      <div id="content">
         <header>
            <Nav/>
         </header>
         <main>
            {children}
         </main>
      </div>
   );

}