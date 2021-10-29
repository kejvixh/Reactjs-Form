import React, {useState} from 'react';
import map from 'lodash/map';
import startCase from 'lodash/startCase';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FormControl} from 'react-bootstrap';
import CreatableSelect from 'react-select/creatable';

const Input = ({label, id, handleChange, name, type}) => (
  <>
    <label htmlFor={id}>{label}</label>
    <FormControl type={type || 'text'} id={id} name={name || id} onChange={handleChange} />
    <br />
    
  </>
);

function App() {
  const [form, setFormValue] = useState({name: '', lastname: '', email: '', });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValue((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };
  const hoobies=[
    { value: 'Movies', label : 'Movies' },
    { value: 'Fitness', label : 'Fitness' },
    { value: 'Picnics', label : 'Picnics' },
    { value: 'Singing', label : 'Singing' }
 ];
 const [selectedOption, setSelectedOption] = useState(null);
 const handleChange1 = e => {
  setSelectedOption(e);
}

  return (
    <>
      {map(form, (val, key) => (
        <p key={key}>
          {`${startCase(key)}: `}
          {val}
        </p>
      ))}
      
      <Input label="Name: " id="name" handleChange={handleChange} />
      <Input label="Last Name: " id="lastname" handleChange={handleChange} />
      <Input label="Email: " id="email" handleChange={handleChange} />
      <CreatableSelect
      isMulti
      id="options"
      options={hoobies}
      value={selectedOption}
      onChange={handleChange1} />
      <b>Selected Options</b><br />
        <pre>{JSON.stringify(selectedOption, null, 2)}</pre>
    </>
  );
}

export default App;
