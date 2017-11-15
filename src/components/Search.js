import React from 'react';

import { FormGroup, InputGroup, FormControl, Glyphicon, Button, DropdownButton, MenuItem } from 'react-bootstrap';

import { googleLogo, naverLogo } from '../images';

class Search extends React.Component {

    render() {
        console.log("render()");

        const makeSearchForm = ()=>{

            const searchSite = [
                {
                    title : "Google",
                    imgSrc : googleLogo,
                    url : "#"
                },
                {
                    title : "NAVER",
                    imgSrc : naverLogo,
                    url : "#"
                }
            ];

            const searchSiteInstance = searchSite.map((v, index) => {
                return (
                    <MenuItem key={index}>
                        <img id={v.title + "Image"} className={"logo"} src={v.imgSrc} alt={"["+v.title + " image]"}/>
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
                                    <img src={googleLogo} alt=""/>
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
            <div className="Search">
                <div className={"Search-wrap"}>
                    {searchFormInstance}
                </div>
            </div>
        );
    }
}

export default Search;