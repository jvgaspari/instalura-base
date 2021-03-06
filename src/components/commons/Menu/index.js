import React from "react";
import Logo from "../../../theme/Logo/index";
import Text from "../../foundation/Text";
import { Button } from "../Button";
import { MenuWrapper } from "./styles/MenuWrapper";

const links = [
    {
        texto: 'Home',
        url: '/'
    },
    {
        texto: 'Perguntas frequentes',
        url: '/faq'
    },
    {
        texto: 'Sobre',
        url: '/sobre'
    },
]

export default function Menu() {
    return(
    <MenuWrapper>
        <MenuWrapper.LeftSide>
            <Logo/>
        </MenuWrapper.LeftSide>
        <MenuWrapper.CentralSide>
            {links.map(function (link) {
                return (
                    <li key={link.url}>
                        <Text variant="smallestException" tag="a" href={link.url}>
                            {link.texto}
                        </Text>
                    </li>
                )
            })}
        </MenuWrapper.CentralSide>
        <MenuWrapper.RightSide>
            <Button ghost variant="secondary.main">
                Entrar
            </Button>
            <Button variant="primary.main">
                Cadastrar
            </Button>
        </MenuWrapper.RightSide>
    </MenuWrapper>
    )
}