
import React, { useContext } from "react";
import { Container, Message, Name, Newlink, NewText, Logoutbutton, LougoutText } from './styles'
import Header from "../../components/Header";

import { AuthContext } from '../../contexts/auth'

export default function Profile() {

    const { user, signOut } = useContext(AuthContext)

    return (
        <Container>
            <Header title="meu perfil" />

            <Message>Hey, bem vindo de volta!</Message>

            <Name numberOfLines={1}>
                {user && user.name}
            </Name>

            <Newlink>
                <NewText> Fazer registro</NewText>
            </Newlink>

            <Logoutbutton onPress={ () => signOut()} >
                <LougoutText>Sair</LougoutText>
            </Logoutbutton>
        </Container>
    )
}