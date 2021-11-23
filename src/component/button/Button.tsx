import { ButtonHTMLAttributes, FC } from "react";
import Styles from './Button.module.css';

type Mode = "primary" | "secondary" | "tertiary" | undefined;

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    mode?: Mode;
}

export const Button: FC<IButtonProps> = (props) => {
    const { text, mode, ...rest } = props;

    const resolveType = (mode: Mode) => {
        let current = "";

        switch (mode) {
            case "primary":
                current = Styles.buttonPrimary;
                break;
            case "secondary":
                current = Styles.buttonSecondary;
                break;
            case "tertiary":
                current = Styles.buttonTertiary;
                break;
            default:
                current = Styles.buttonPrimary;
        }

        return current;
    }
    return (
        <button className={resolveType(mode)} {...rest}>
            {text}
        </button>
    );
}