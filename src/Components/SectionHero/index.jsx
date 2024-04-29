import React from "react";

import * as S from "./style"

import DownloadIos from "../../assets/btn-apple-store.svg"
import DownloadGooglePlay from "../../assets/btn-google-play.svg"
import Seta from "../../assets/arrow-explorer.svg"
import Womam from "../../assets/woman.png"

export default function SectionHero() {

    return(
        <S.Section>
            <S.Container>
                <S.DivLeft>
                    <S.H1>
                        Tenha o seu Banco na palma da mão
                    </S.H1>

                    <S.P>
                        Todas as operações que você precisa em um só lugar. Simples, completo e feito para você.
                    </S.P>

                    <S.DivButtons>
                        <S.Button>
                            <img src={DownloadIos} alt="Logo Ios" />
                        </S.Button>

                        <S.Button>
                            <img src={DownloadGooglePlay} alt="Logo Google Play" />
                        </S.Button>
                    </S.DivButtons>

                    <S.ButtonExplorer>
                        <img src={Seta} alt="seta" />
                        <S.Span>Continue explorando</S.Span>
                    </S.ButtonExplorer>
                </S.DivLeft>  

                <S.ImgWoman src={Womam} alt="Woman" />            
            </S.Container>
        </S.Section>
    )
}