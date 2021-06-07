import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState('All');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Filter Tasks</FormLabel>
      <RadioGroup aria-label="gender" name="filter" value={value} onChange={handleChange}>
        <FormControlLabel value="All" control={<Radio />} label="All" />
        <FormControlLabel value="Code" control={<Radio />} label="Code" />
        <FormControlLabel value="Design" control={<Radio />} label="Design" />
        <FormControlLabel value="Explore"  control={<Radio />} label="Explore" />
      </RadioGroup>
    </FormControl>
  );
}