import React from "react";
import * as S from "./styles"


import LogoItau from "../assets/logo.svg"
import MenuItem from "./MenuItem";
import IconUser from "../assets/icon-user.svg"





export default function Header() {

    return (
        <S.Header>
            <S.Container>
                <S.ContainerItens>
                    <div>
                        <S.Img src={LogoItau} alt="logo iatú" />
                    </div>

                    <S.Ul>
                        <S.Li>
                            <MenuItem name="Para Você " />
                        </S.Li>

                        <S.Li>
                            <MenuItem name="Para Empresas " />
                        </S.Li>

                        <S.Li>
                            <MenuItem name="Serviços " />
                        </S.Li>

                        <S.Li>
                            <MenuItem name="Ajuda " />
                        </S.Li>
                    </S.Ul>

                    <S.DivButtonAccess>
                        <S.ButtonAccess>
                            <img src={IconUser} alt="icon user" />
                            <span>Acessar Conta</span>
                        </S.ButtonAccess>
                    </S.DivButtonAccess>                 
                </S.ContainerItens>
            </S.Container>
        </S.Header>
    )
}