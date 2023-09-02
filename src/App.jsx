import "./App.css";

function App() {
  return (
    <>
      <b>API_KEY:</b>
      <code>{import.meta.env.VITE_API_KEY}</code>
      <br />
      <b>SPREADSHEET_ID:</b>
      <code>{import.meta.env.VITE_SPREADSHEET_ID}</code>
      <br />
    </>
  );
}

export default App;
