import { Ipersons } from "../../types/types";
interface Props {
    personList: Ipersons[],
    searchValue: string
  }
  
  const PhoneList: React.FC<Props> = ({ personList, searchValue }) => {
    return (
      <ul>
      {
        personList
        .filter(p => p.name.toLowerCase().includes(searchValue))
        .map(p=> {
          return <li key={p.id}>{p.id} | {p.name} | {p.number}</li>
        })
      }
      </ul>
    );
  };
  
  export default PhoneList;