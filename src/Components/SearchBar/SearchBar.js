import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const SearchBar = (props) => {
  return (
    <>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Enter a city"
          aria-label="Search a location"
          onChange={props.onChange}
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" onClick={props.onSubmit}>
            Search
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </>
  );
};

export default SearchBar;
