import ArrowDown from "../assets/arrow-down.svg";
import * as S from "./styles"

export default function MenuItem({name}) {

    return (
        <>
            <S.ButtonItemMenu>
                <span>{name}</span>
                <img src={ArrowDown} alt="seta" />
            </S.ButtonItemMenu>
        </>
    )
}