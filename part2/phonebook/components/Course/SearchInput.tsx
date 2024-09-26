// Define the props interface
interface Props {
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  // Functional component with typed props
  const SearchInput: React.FC<Props> = ({ handleSearch }) => {
    return (
      <form>
        <div>
          SEARCH <input placeholder="Enter name" onChange={handleSearch}></input>
        </div>
      </form>
    );
  };
  
  export default SearchInput;