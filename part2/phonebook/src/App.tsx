import { useState } from "react";
import { Ipersons, IformValue } from "../types/types";
import SearchInput from "../components/Course/SearchInput";
import ContactForm from "../components/Course/ContactForm";
import PhoneList from "../components/Course/PhoneList";


function App() {
  const [persons, setPersons] = useState<Ipersons[]>([
    { name: 'Arto Hellas', id: 1, number: '12345678' },
    { name: 'Ada Lovelace', number: '393-4445679', id: 2 },
    { name: 'Dan Abramov', number: '123-673920', id: 3 },
    { name: 'Mary Poppendieck', number: '392-8956724', id: 4 }
  ]) ;
  const [formValues, setFormValues] = useState<IformValue>({name: '', number: ''});
  const [formAlert, setFormAlert] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>('')
  function handleFormSubmit(e: React.SyntheticEvent){

    e.preventDefault();
    if(checkEmptyObject(formValues)) {
      setFormAlert(true);
      return
    }
    if(persons.some(el => el.name === formValues.name)){return alert(formValues.name + " already exists in phonebook!")}    
    const person = {...formValues, id: persons.length + 1}
    
    setPersons(persons.concat(person));
    setFormValues({name: '', number: ''});  
  }

  function checkEmptyObject(e: object) {
    return Object.values(e).some(x => x === '');
  }
  function handleFormInput(e: React.ChangeEvent<HTMLInputElement>){
    const {name, value} = e.target
    if(checkEmptyObject(formValues)) {
      setFormAlert(true);
    }
    setFormValues((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setFormAlert(false)
  }

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>){
    setSearchValue(e.target.value.toLowerCase())
  }
  return (
    <div>
      <SearchInput handleSearch={handleSearch}></SearchInput>
      <h2>Phonebook</h2>
      <ContactForm handleFormInput={handleFormInput} handleFormSubmit={handleFormSubmit} showAlert= {formAlert} formValues={formValues}></ContactForm>
      <h2>Numbers</h2>
      <PhoneList personList={persons} searchValue={searchValue}></PhoneList>
    </div>
  )

}


export default App
