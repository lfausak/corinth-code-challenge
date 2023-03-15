import Link from "next/link";
import { useState, useEffect } from "react";
import styled from "styled-components";
import SocialLinks from "./SocialLinks";
import Character from "./Character";




function Header() {

    const [showPersons, setShowPersons] = useState([]);
    useEffect(() => {
        fetch("https://akabab.github.io/starwars-api/api/all.json")
            .then((response) => response.json())
            .then((responseData) => setShowPersons(responseData));
    }, [])

    const [value, setValue] = useState('');
    const onChange = (event) => {
        setValue(event.target.value);
    }
    const onSearch = (searchTerm) => {
        //api to fetch results
        setValue(searchTerm);
        console.log('search ', searchTerm);
    }

    const info =
        showPersons.filter((person) =>
            (value && person.name.toLowerCase().includes(value.toLowerCase()) && person.name.toLowerCase() !== value.toLowerCase()))
            .map(function (person) {
                return (
                    <Link href={`/id/${person.id}.json`}>
                        <DropdownRow onClick={() => onSearch(person.name)} key={person.id}>{person.name}</DropdownRow>
                    </Link>
                )
            }).slice(0, 15);



    return (
        <HeaderContainer>
            <HeaderLeft>
                <SocialLinks />
            </HeaderLeft>
            <Link href="/">
                <div>
                    <img src="https://download.logo.wine/logo/Star_Wars/Star_Wars-Logo.wine.png"
                        alt=""
                    />
                </div>
            </Link>
            <HeaderRight>
                <HeaderSearch>
                    <input placeholder="Search Star Wars"
                        value={value} onChange={onChange}
                    />
                    <HeaderActions1>
                        <button onClick={() => onSearch(value)}>SEARCH</button>
                    </HeaderActions1>
                </HeaderSearch>
                <Dropdown>
                    {info}
                </Dropdown>

            </HeaderRight>
        </HeaderContainer>
    );
}

export default Header;


const HeaderContainer = styled.div`
    padding: 20px;
    padding-bottom: 0;
    background-image: url("https://static-mh.content.disney.io/starwars/assets/navigation/navigation_stars@2x-815223a7aade.jpg");
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 999;

    img {
        object-fit: contain;
        margin-top: -40px;
        margin-bottom: -20px;
        height: 100px;
        filter: brightness(0) invert(1);
    }

`;
const HeaderLeft = styled.div``;
const HeaderRight = styled.div``;
const HeaderSearch = styled.div`
    width: 26px;
    min-width: 26px;
    border-radius: 4px;
    background-color: #343434;
    box-shadow: none;
    border: 0;
    position: relative;
    width: 348px;
    opacity: 0.7;
    height: 40px;
    transition: opacity 350ms;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    opacity: 0.7;

    :focus-within{
        opacity: 1;
    }

    input {
        background: transparent;
        outline: none;
        border: none;
        font-weight: 400;
        font-family: inherit;
        font-size: 15px;
        color: white;
    }
    input::placeholder {
        opacity: 1;
        color: gray;
    }

    img {
        object-fit: contain;
        height: 20px;
        object-position: 50%;
    }
`;
const HeaderActions1 = styled.div`
    width: 100%;
    margin-top: 0px;
    margin-left: 8px;
    color: #999;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    button {
        background: transparent;
        font-family: sans-serif;
        color: #999;
        font-weight: 650;
        border: none;
        font-size: 14px;
        cursor: pointer;
        transition: color 200ms;
        letter-spacing: 2px;

        :hover{
            color: #ccc;
        }
    }

    span{
        color: #343434;
        font-size: 1.125em;
        font-weight: 500;
    }
`;
const HeaderActions = styled.div`
    width: 100%;
    margin-top: 10px;
    color: #999;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    button {
        background: transparent;
        font-family: inherit;
        color: #999;
        font-weight: 600;
        border: none;
        font-size: 14px;
        cursor: pointer;
        transition: color 200ms;
        letter-spacing: 2px;

        :hover{
            color: #ccc;
        }
    }

    span{
        color: #343434;
        font-size: 1.125em;
        font-weight: 500;
    }
`;
const Dropdown = styled.div`
    width: 26px;
    min-width: 26px;
    border-radius: 4px;
    background-color: none;
    box-shadow: none;
    border: 0;
    position: relative;
    width: 348px;
    opacity: 0.7;
    height: 40px;
    transition: opacity 350ms;
    display: vertical;
    align-items: center;
    justify-content: flex-start;
    padding: 0 10px;
    opacity: 0.96;
    z-index: 999;
`;
const DropdownRow = styled.div`
        background: black;
        font-family: inherit;

        font-weight: 650;
        border: none;
        font-size: 14px;
        cursor: pointer;
        transition: color 200ms;
        letter-spacing: 2px;
        z-index: 999;

        color: #999;
        font-size: 17px;
        text-transform: uppercase;

        :hover {
            color: #9e4f60;
        }
    `;