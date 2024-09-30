import {  useEffect, useState } from "react";
import { Ipersons, IformValue } from "../types/types";
import SearchInput from "../components/Course/SearchInput";
import ContactForm from "../components/Course/ContactForm";
import PhoneList from "../components/Course/PhoneList";
import personsService from "./services/persons"
import "./style.css"
function App() {
  const [persons, setPersons] = useState<Ipersons[] | null>(null) ;
  const [formValues, setFormValues] = useState<IformValue>({name: '', number: ''});
  const [formAlert, setFormAlert] = useState<{value: string | null, type: "notice" | "warning" | "success"} | false>(false)
  const [searchValue, setSearchValue] = useState<string>('')
  

useEffect(() => {
  personsService
  .getAll()
  .then((initialData => {
  setPersons(initialData)
}))
}, []);

const setAlert = (message: string, type: "notice" | "warning" | "success", timeout = 5000) => {
  setFormAlert({ value: message, type });
  setTimeout(() => setFormAlert(false), timeout);
};

function checkEmptyObject(e: object) {
  return Object.values(e).some(x => x === '');
}
function handleFormSubmit(e: React.SyntheticEvent){

    e.preventDefault();
    if(checkEmptyObject(formValues)) {
      setFormAlert({value: "Form Inputs cannot be empty", type: "warning"});
      return
    }
    const existingPerson = persons!.find(person => person.name === formValues.name);

    if(existingPerson){
      if(confirm(formValues.name + " already exists in phonebook, do you want to update its number?")){

        const changedPerson = { ...existingPerson, number: formValues.number};
        personsService.update(changedPerson.id!, changedPerson).then(
          response => {
            setPersons(persons!.map(
              person => {
                return person.id !== response.id ? person : changedPerson
              }
            ));
            setFormValues({name: '', number: ''}); 
            setAlert( `${changedPerson.name} old number: ${existingPerson?.number} modified with: ${changedPerson.number}`, "notice", 5000)
          }
        ).catch(() => {
          setAlert(`Element is not in the server anymore, phonelist updated`, "warning", 5000)
        })
        setPersons(persons!.filter(
          person => person.id !== existingPerson?.id
        ));
        setFormValues({name: '', number: ''}); 
      }
      return;
    }    
    const person = {...formValues}
    
    
    personsService.create(person)
    .then(newPerson => {
      setPersons(persons!.concat(newPerson))
        setAlert(`'${person.name}' created`, "success", 5000)
    })
    setFormValues({name: '', number: ''});  
  }

  
  function handleFormInput(e: React.ChangeEvent<HTMLInputElement>){
    const {name, value} = e.target
    if(checkEmptyObject(formValues)) {      
      setFormAlert({
        value: `Form inputs cannot be empty`,
        type: "warning"
    });
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
        setPersons(persons!.filter(p => p.id !== person.id));
        setAlert(`${person.name} removed`, "warning", 5000)        
      } 
      );
    };   
  }
  if (!persons) { 
    return <><p>No data to be displayed</p></>
  }
  return (
    <div>
      <SearchInput handleSearch={handleSearch}></SearchInput>
      <h2>Phonebook</h2>
      <ContactForm handleFormInput={handleFormInput} handleFormSubmit={handleFormSubmit} showAlert = {formAlert} formValues={formValues}></ContactForm>
      <h2>Numbers</h2>
      <PhoneList handleDelete={handleDelete} personList={persons} searchValue={searchValue}></PhoneList>
    </div>
  )
}

export default App
