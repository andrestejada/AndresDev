import React from 'react'
import AboutMe from './aboutMe/AboutMe'
import styled from 'styled-components'
import Info from './Info/Info'


const ProfileContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    @media(max-width:768px){
        flex-flow: column;
    }
`

const ProfileCard = () => {
    return (
        <ProfileContainer>
            <Info/>
            <AboutMe/>            
        </ProfileContainer>
    )
}

export default ProfileCard
