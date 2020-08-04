import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const SearchBar = () => {
    return (
        <>
            <InputGroup className="mb-3">
                <FormControl
                placeholder="Enter a location"
                aria-label="Search a location"
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary">Search</Button>
                </InputGroup.Append>
            </InputGroup>
        </>
    )
};

export default SearchBar;