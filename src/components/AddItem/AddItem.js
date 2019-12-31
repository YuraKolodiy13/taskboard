import React, {useState, useEffect} from 'react'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';
import './AddItem.scss'

const AddItem = props => {

  const [itemName, setItemName] = useState('');
  const [flag, setFlag] = useState(0);

  useEffect(() => {
    props.getTodoList();
  }, [flag]);

  const onBlur = e => {
    e.target.closest('.MuiFormControl-root').classList.remove('trigger')
  };

  const onSubmit = e => {
    e.preventDefault();
    props.addItem(itemName)
      .then(() => {
        setFlag((item) => item + 1);
        setItemName('');
        console.log(e.target)
      });
  };

  return(
    <ValidatorForm onSubmit={onSubmit} className='addItem trigger__wrap'>
      <TextValidator
        id="outlined-basic"
        className='trigger'
        label="Title"
        variant="outlined"
        name='title'
        type='text'
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        onBlur={onBlur}
        validators={['required', 'minStringLength:2', 'trim']}
        errorMessages={['This field is required', 'Need at least 2 characters', 'Your title is empty']}
      />
      <Button
        variant="contained"
        color="secondary"
        type='submit'
        className='button'
        onClick={e => e.target.closest('.addItem').classList.remove('trigger__wrap')}
      >Add</Button>
    </ValidatorForm>
  )
};

export default AddItem;