import Link from "next/link";
import styled from "styled-components";
import NavbarLink from "./NavbarLink";

function Navbar() {
    return (
        <NavbarContainer>
            <NavbarLinks>
                <Link href="https://www.starwarsnewsnet.com/">
                <NavbarLink title="NEWS + BLOG" />
                </Link>
                <Link href="https://www.movienewsnet.com/">
                <NavbarLink title="VIDEO" />
                </Link>
                <Link href="https://en.wikipedia.org/wiki/List_of_Star_Wars_films">
                <NavbarLink title="FILMS" />
                </Link>
                <Link href="https://www.starwars.com/series/">
                <NavbarLink title="SERIES" />
                </Link>
                <Link href="https://www.starwars.com/games-apps">
                <NavbarLink title="INTERACTIVE" />
                </Link>
                <Link href="https://www.starwars.com/community">
                <NavbarLink title="COMMUNITY" />
                </Link>
                <Link href="https://akabab.github.io/starwars-api/api/all.json">
                <NavbarLink title="DATABANK" />
                </Link>

            </NavbarLinks>
        </NavbarContainer>
    );
}

export default Navbar;


const NavbarContainer = styled.div`
    border-top: 1px solid #343434;
    background-color: black;
    width: 100%;
    box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 47px;
    position: fixed;
    top: 110px;
    right: 0;
    left: 0;
    z-index: 998;
`;
const NavbarLinks = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;