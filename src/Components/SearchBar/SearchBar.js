import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";

const SearchBar = (props) => {
  return (
    <Container>
      {props.loading ? (
        <Button variant="outline-secondary" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      ) : (
        <Button variant="outline-secondary" onClick={props.onClick}>
          Use My Current Location
        </Button>
      )}
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
