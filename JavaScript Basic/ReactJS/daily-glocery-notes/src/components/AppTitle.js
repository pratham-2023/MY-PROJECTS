import "./AppTitle.css";
// to add dynamic content/data use pair of Curly bracket {} i.e JSX [JavaScript & XML]
// To add CSS need to be specify as a Object ie. {JS->CSS rules}

/**
 *
 * How to render dynamic values in a component.
 * JSX provide us a way to do this.
 * Use {} inside you need to mention the value dynamically.
 * i.e you can write your JS code within this.
 */
function AppTitle() {
  // let siteName = "RTSoft";
  function getFullName() {
    return "John Doe";
  }

  return <h1 className="App-Title"> {getFullName()} Website</h1>;
}
/**
   style={{
        color: "white",
        textAlign: "center",
        borderBottom: "2px solid yellow",
        boxShadow: "5px 5px 10px white",
      }}
 */
export default AppTitle;
