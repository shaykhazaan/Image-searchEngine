import searchImages from "./api";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";

function App() {

  const handleSubmit = async (term) => {
    const result = await searchImages(term);

    console.log(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={} />
    </div>
  );
}


export default App;