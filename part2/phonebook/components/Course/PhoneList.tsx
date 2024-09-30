import { Ipersons } from "../../types/types";
interface Props {
    personList: Ipersons[],
    searchValue: string,
    handleDelete: (id: Ipersons) => void
  }
  
  const PhoneList: React.FC<Props> = ({ personList, searchValue, handleDelete }) => {
    return (
      <ul>
      {
        personList
        .filter(p => p.name.toLowerCase().includes(searchValue))
        .map(p=> {
          return <li key={p.id}>{p.id} | {p.name} | {p.number} <button onClick={() => handleDelete(p)}> DELETE </button></li>
        })
      }
      </ul>
    );
  };
  
  export default PhoneList;