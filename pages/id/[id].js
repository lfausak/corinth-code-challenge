import CharacterCard from "../../components/CharacterCard";
import styled from "styled-components";


function Character({ character }) {
    return (
        <CharacterContainer>
            <StarfieldLeft />
            <CharacterCard character={character} />
            <StarfieldRight />
        </CharacterContainer>
    );
}

export default Character;

//EXECUTED ON SERVER
export async function getStaticProps(context) {
    const characterGet = await fetch(`https://akabab.github.io/starwars-api/api/id/${context.params.id}`
        //"https://swapi.dev/api/people"
    ).then((res) => res.json());
    //console.log(characterGet);
    const character = characterGet;
    return {
        props: {
            character,
        },
    };
}

export async function getStaticPaths(context) {
    const characterGet = await fetch("https://akabab.github.io/starwars-api/api/all.json"
        //"https://swapi.dev/api/people"
    ).then((res) => res.json());
    //console.log(characterGet);
    const paths = characterGet.map((character) => `/id/${character.id}.json`);

    return {
        paths,
        fallback: false,
    };
}

const CharacterContainer = styled.div`
    padding: 40px;
    margin-top: 200px;
`;
const StarfieldLeft = styled.div`
    position: fixed;
    width: 200px;
    top: 0;
    background-repeat: repeat-y;
    left: 0;
    height: 1700px;
    background-position: left center;
    background-size: 100% auto;
    background-image: url("https://static-mh.content.disney.io/starwars/assets/background/bg_starsL-fd4661a3ccea.jpg");
`;
const StarfieldRight = styled.div`
    position: fixed;
    width: 200px;
    top: 0;
    background-repeat: repeat-y;
    right: 0;
    height: 1700px;
    background-position: right center;
    background-size: auto 100%;
    background-image: url("https://static-mh.content.disney.io/starwars/assets/background/bg_starsR-655c85e404d4.jpg");
`;

