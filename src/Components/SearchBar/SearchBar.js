import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const SearchBar = (props) => {
  return (
    <Container>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Enter a city"
          aria-label="Search a location"
          onChange={props.onChange}
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" onClick={props.onSubmit}>
            Search For A City
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Container>
  );
};

export default SearchBar;
