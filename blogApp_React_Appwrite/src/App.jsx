import "./App.css";

function App() {

  console.log(import.meta.env.VITE_APPWRITE_URL);
  console.log(import.meta.env.DB_PASSWORD);

  return (
    <>
      <h1>blog with appwrite</h1>
    </>
  );
}

export default App;
