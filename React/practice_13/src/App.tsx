import { Navbar } from "./components/Navbar";
import { SubMenu } from "./components/SubMenu";
import { Sidebar } from "./components/Sidebar";
function App() {
  return (
    <main>
      <Navbar></Navbar>
      <div className="hero-container">
        <div className="hero-center">
          <h1>
            Manage Any Content <br /> Anywhere
          </h1>
          <p>
            Strapi is the leading open-source headless CMS. It’s 100% JavaScript
            and fully customizable.
          </p>
        </div>
      </div>
      <Sidebar></Sidebar>
      <SubMenu></SubMenu>
    </main>
  );
}

export default App;
