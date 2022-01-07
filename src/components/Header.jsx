import logoHeader from "../assets/logoHeader.svg"
import styled from "styled-components"
import Loader from "react-loader-spinner"

export default function Header({ userData }) {

    return (

        <HeaderContainer>
            <img src={logoHeader} alt="TrackIt logo header" />
            {userData === null ?
                (<Loader
                    type="ThreeDots"
                    color="#FFFFFF"
                    height={40}
                    width={40}
                />)
                :
                (<ProfilePic src={userData.image} alt="Profile picture" />)}
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
    width: 52px;
    height:52px;
    border-radius:50%;
`
