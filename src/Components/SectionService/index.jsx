import React from "react";
import * as S from "./style"

import ItemList from "./ItemList";

import IconPhone from "../../assets/icon-phone.svg"
import IconSolutions from "../../assets/icon-solutions.svg"
import IconOptions from "../../assets/icon-options.svg"
import IconCard from "../../assets/icon-card.svg"
import Phone from "../../assets/phone.png"

export default function SectionService() {

    return (
        <S.Section>
            <S.Container>
                <S.DivLeft>
                    <S.Span>Serviços exclusivos</S.Span>

                    <S.H2>Gerencie suas finanças sem sair de casa</S.H2>

                    <S.P>Veja como você pode cuidar das suas finanças pelo app Itaú de forma segura, rápida e o melhor, no conforto da sua casa.</S.P>

                    <S.Ul>
                        <S.Li>
                            <ItemList 
                            img={IconPhone}
                            alt="icon phone"
                            p="Acompanhar sua conta, fazer transferências e pagamentos de onde estiver."
                            />
                        </S.Li>

                        <S.Li>
                            <ItemList
                                img={IconSolutions}
                                alt="icon solution"
                                p="Soluções de empréstimos e negociação para organizar suas finanças."
                            />
                        </S.Li>

                        <S.Li>
                            <ItemList
                                img={IconOptions}
                                alt="icon options"
                                p="Diversas opções de investimento de acordo com o seu perfil de  investidor."
                            />
                        </S.Li>

                        <S.Li>
                            <ItemList
                                img={IconCard}
                                alt="icon card"
                                p="Acompanhe a fatura do seu cartão de crédito e faça compras online com seu cartão virtual."
                            />
                        </S.Li>
                    </S.Ul>
                </S.DivLeft>

                <img src={Phone} alt="Phone" />
            </S.Container>
        </S.Section>
    )
}