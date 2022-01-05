import logoHeader from "../assets/logoHeader.svg"
import styled from "styled-components"

export default function Header() {

    return (
        <HeaderContainer>
            <img src={logoHeader} alt="TrackIt logo header" />
            <ProfilePic src="https://picsum.photos/seed/picsum/50/50" alt="Profile picture" />
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    position: fixed;
    top:0px;

    width: 100%;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;

    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

`

const ProfilePic = styled.img`
    border-radius:50%;
`
