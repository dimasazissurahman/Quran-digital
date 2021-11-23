import React, { FC } from "react";
import Styles from './Card.module.css';

interface ICard {
    number?: string;
    nameId?: string;
    textMeaning?: string;
    nameArab?: string;
    disabled?: boolean | false;
    totalAyat?: string;
}

export const Card: FC<ICard> = (props) => {
    const { number, nameId, textMeaning, nameArab, disabled, totalAyat, ...rest } = props;
    return (
        <div className={Styles['box']} {...rest}>
            <div>{number}</div>
            <div className={Styles['box-mid']}>
                <span className={Styles['bold']}>{nameId} ({totalAyat})</span>
                <span>{textMeaning}</span>
            </div>
            <div className={Styles['box-end']}>
                <span className={Styles['bold']}>{nameArab}</span>
            </div>
        </div>
    );
}