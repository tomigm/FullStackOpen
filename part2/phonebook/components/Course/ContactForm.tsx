import { IformValue } from "../../types/types";
// Define the props interface
interface Props {
    handleFormInput: (e:  React.ChangeEvent<HTMLInputElement>) => void;
    handleFormSubmit: (e: React.SyntheticEvent) => void,
    formValues: IformValue,
    showAlert: {value: string | null, type: "notice" | "warning" | "success"} | false
  }
  
  // Functional component with typed props
  const ContactForm: React.FC<Props> = ({ handleFormInput, handleFormSubmit, formValues, showAlert }) => {
    return (
      <>
      <form onSubmit={handleFormSubmit}>
        <div>
          name: <input placeholder="John Doe" name="name" value={formValues.name} onChange={handleFormInput}/>
        </div>
        <div>
          number: <input placeholder="123-456789" type="tel" pattern="[0-9]{3}-[0-9]{6}" name="number" value={formValues.number} onChange={handleFormInput}/>
        </div>
        <div>
          <input type="submit" value="submit"></input>
        </div>
      </form>
      {showAlert ? <div className={showAlert.type !== "notice" ? `notice ${showAlert.type}`  : "notice"}>{showAlert.value}</div> : null}
      </>
    );
  };
  
  export default ContactForm;