import {  useEffect, useState } from "react";
import { Ipersons, IformValue } from "../types/types";
import SearchInput from "../components/Course/SearchInput";
import ContactForm from "../components/Course/ContactForm";
import PhoneList from "../components/Course/PhoneList";
import personsService from "./services/persons"
function App() {
  const [persons, setPersons] = useState<Ipersons[]>([]) ;
  const [formValues, setFormValues] = useState<IformValue>({name: '', number: ''});
  const [formAlert, setFormAlert] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>('')
  

useEffect(() => {
  personsService
  .getAll()
  .then((initialData => {
  setPersons(initialData)
}))
}, []);
function handleFormSubmit(e: React.SyntheticEvent){

    e.preventDefault();
    if(checkEmptyObject(formValues)) {
      setFormAlert(true);
      return
    }
    if(persons.some(el => el.name === formValues.name)){
 
      if(confirm(formValues.name + " already exists in phonebook, do you want to update its number?")){
        const  filteredPerson = persons.find(person => {return person.name === formValues.name});
        const changedPerson = { ...filteredPerson, number: formValues.number};
        

        console.log(`to change ${formValues.name} with ${formValues.number} || newdata is  `, filteredPerson);
        console.log(filteredPerson, " new object would be ", changedPerson);
        personsService.update(changedPerson.id!, changedPerson).then(
          response => {
            setPersons(persons.map(
              person => {
                return person.id !== response.id ? person : changedPerson
              }
            ));
            setFormValues({name: '', number: ''}); 

          }
        )

      }
      return;
    }    
    const person = {...formValues}
    
    
    personsService.create(person)
    .then(newPerson => {setPersons(persons.concat(newPerson))})
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

  function handleDelete(person: Ipersons){
    if(confirm("do you really want to delete " + person.name + "?")){
      personsService.deleteSingle(person.id!).then( deletedPerson => {
        console.log(deletedPerson);
        setPersons(persons.filter(p => p.id !== person.id));
      } 
      );
    };   
  }
  return (
    <div>
      <SearchInput handleSearch={handleSearch}></SearchInput>
      <h2>Phonebook</h2>
      <ContactForm handleFormInput={handleFormInput} handleFormSubmit={handleFormSubmit} showAlert= {formAlert} formValues={formValues}></ContactForm>
      <h2>Numbers</h2>
      <PhoneList handleDelete={handleDelete} personList={persons} searchValue={searchValue}></PhoneList>
    </div>
  )

}


export default App
