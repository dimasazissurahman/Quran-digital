import React, { FC } from "react";
import Styles from './Header.module.css';
import { useNavigate } from "react-router-dom";

interface IHeader {
    title?: string;

}
export const HeaderDesktop: FC<IHeader> = (props) => {
    const navigate = useNavigate();
    const { title } = props;
    return (
        <header className={Styles['header']}>
            <div className={Styles['box-left']}>
                <h1 onClick={()=> {navigate('/')}}>{title}</h1>
            </div>
        </header>
    )
}