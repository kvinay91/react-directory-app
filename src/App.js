import "./App.css";
import Directory from "./components/directory";
import FootballMatches from "./components/footbalMatches";
import SelectAllCheckbox from "./components/select-all-checkbox";
import useResizeHook from "./hooks/resizehooks";

const folderStructure = [
  {
    name: "src",
    children: [
      {
        name: "components",
        children: [
          { name: "Folder.js", children: [] },
          { name: "App.js", children: [] },
        ],
      },
      {
        name: "index.js",
        children: [],
      },
    ],
  },
  {
    name: "public",
    children: [
      { name: "index.html", children: [] },
      { name: "favicon.ico", children: [] },
    ],
  },
];

function App() {
  const { height, width } = useResizeHook();
  return (
    <>
      <div>
        {folderStructure.map((folder) => (
          <Directory key={folder.name} folder={folder} />
        ))}
      </div>

      <div className="App">
        <h1> Window Resize</h1>
        <p>Width: {width}</p>
        <p>Height:{height}</p>
      </div>

      <FootballMatches />
      <SelectAllCheckbox />
    </>
  );
}

export default App;
