import React from "react";
import PropTypes from "prop-types";
import { FormFeedback, FormGroup, Label } from "reactstrap";
import Select from "react-select";
import { ErrorMessage } from "formik";

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.array,
  disabled: PropTypes.bool,
};

SelectField.defaultProps = {
  label: "",
  placeholder: "",
  options: [],
  disabled: false,
};

function SelectField(props) {
  const { field, form, label, options, placeholder, disabled } = props;
  const { name, value } = field;
  const selectedOptions = options.find((option) => option.value === value);
  const { errors, touched } = form;
  const showErrors = errors[name] && touched[name];

  const handleSelectedOptionChange = (selectedOptions) => {
    const selectedValue = selectedOptions
      ? selectedOptions.value
      : selectedOptions;

    const changeEvent = {
      target: {
        name: name,
        value: selectedValue,
      },
    };
    field.onChange(changeEvent);
  };

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}

      <Select
        id={name}
        {...field}
        value={selectedOptions}
        onChange={handleSelectedOptionChange}
        disabled={disabled}
        options={options}
        placeholder={placeholder}
        className={showErrors ? "is-invalid" : ""}
      ></Select>

      <ErrorMessage component={FormFeedback} name={name} />
    </FormGroup>
  );
}

export default SelectField;
