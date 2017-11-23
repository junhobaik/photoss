import React from 'react';

import { FormGroup, InputGroup, FormControl, Glyphicon, Button, DropdownButton, MenuItem } from 'react-bootstrap';

import { googleLogo, naverLogo } from '../images';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            formTarget : "_blank",

            currentSite : {},

            searchSite : [
                {
                    title : "Google",
                    imgSrc : googleLogo,
                    url : "https://www.google.com/search?&",
                    queryName : "q"
                },
                {
                    title : "NAVER",
                    imgSrc : naverLogo,
                    url : "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&",
                    queryName: "query"
                }
            ]
        }
    }

    componentDidMount() {

        const lsSearchSite = localStorage.getItem('pss_searchSite');
        if(lsSearchSite !== null){
            this.setState({
                currentSite: this.state.searchSite[lsSearchSite]
            });
        }else{
            this.setState({
                currentSite: this.state.searchSite[0]
            });
        }

        const searchSites = document.querySelectorAll('.search-site');

        for(let site of searchSites){
            site.addEventListener("click", (e)=>{
                for(let index in e.path){
                    if(toString.call(e.path[index]) === '[object HTMLLIElement]') {
                        const siteNum = e.path[index].className.split(" ")[1].substr(4,2);

                        this.setState({
                            currentSite : this.state.searchSite[siteNum]
                        });
                        localStorage.setItem('pss_searchSite', siteNum);

                        break;
                    }
                }
            });
        }
    }



    render() {
        console.log("render Search");

        const makeSearchForm = ()=>{

            const searchSite = this.state.searchSite;

            const searchSiteInstance = searchSite.map((v, index) => {
                return (
                    <MenuItem className={"search-site site"+index} key={index}>
                        <img id={v.title + "Image"} className={"logo"} src={v.imgSrc} alt={"["+v.title + " image]"}/>
                        <span>{v.title}</span>
                    </MenuItem>
                );
            });

            const searchForm = this.state.currentSite;
            return (
                <form action={searchForm.url} target={this.state.formTarget}>
                    <FormGroup>
                        <InputGroup>
                            <DropdownButton
                                componentClass={InputGroup.Button}
                                id="input-dropdown-addon"
                                title={
                                    <img src={searchForm.imgSrc} alt=""/>
                                }
                            >
                                {searchSiteInstance}
                            </DropdownButton>
                            <FormControl
                                autoFocus
                                name={searchForm.queryName}
                                type="text"
                            />

                            <InputGroup.Button>
                                <Button type="submit">
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