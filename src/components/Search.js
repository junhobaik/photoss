import React from 'react';

import { FormGroup, InputGroup, FormControl, Glyphicon, Button, DropdownButton, MenuItem } from 'react-bootstrap';

class Search extends React.Component {

    render() {
        console.log("render()");

        const makeSearchForm = ()=>{

            const searchSite = [
                {
                    title : "Google",
                    imgSrc : null,
                    url : "#"
                },
                {
                    title : "NAVER",
                    imgSrc : null,
                    url : "#"
                }
            ];

            const searchSiteInstance = searchSite.map((v, index) => {
                return (
                    <MenuItem key={index}>
                        <img id={v.title + "Image"} src={v.imgSrc} alt={"["+v.title + " image]"}/>
                        <span>{v.title}</span>
                    </MenuItem>
                );
            });

            return (
                <form>
                    <FormGroup>
                        <InputGroup>
                            <DropdownButton
                                componentClass={InputGroup.Button}
                                id="input-dropdown-addon"
                                title={
                                    <img src="#" alt="[image]"/>
                                }
                            >
                                {searchSiteInstance}
                            </DropdownButton>
                            <FormControl type="text" />

                            <InputGroup.Button>
                                <Button>
                                    <Glyphicon glyph="search" />
                                </Button>
                            </InputGroup.Button>

                        </InputGroup>
                    </FormGroup>
                </form>
            );
        };
        const searchFormInstance = makeSearchForm();

        return(
            <div className="search">
                {searchFormInstance}
            </div>
        );
    }
}

export default Search;