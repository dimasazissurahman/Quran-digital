import { FC, IArrVerses, useState } from "react"
import { Button } from "../button/Button";
import { useAudio } from "../hooks/useAudio";
import Styles from './Card.module.css';

type TCardSection = {
    data?: IArrVerses;
}

export const CardSection: FC<TCardSection> = (props) => {
    const { data, ...rest } = props;
    const [index, setIndex] = useState<number>(0);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const { handlePlay, playing } = useAudio(data?.audio.primary);

    const handleClick = (index: number) => {
        if (!isOpen) {
            setIndex(index);
            setIsOpen(true);
        }
        else {
            setIndex(0);
            setIsOpen(false);
        }
    }

    if (data) {
        return (
            <section className={Styles['section-box']} {...rest}>
                <div className={Styles['font-25']}>{data.text.arab} <span style={{ fontWeight: "bolder" }}>•</span>  ({data.number.inSurah.toLocaleString('ar-EG')}</div>
                <div className={Styles['text-left']}>
                    <p style={{ fontWeight: "bold" }}>{data.text.transliteration.en}</p>
                    <p style={{ fontStyle: "italic" }}>{data.translation.id}</p>
                    <Button style={{ marginRight: "15px" }} onClick={() => handleClick(data.number.inSurah)} text={!isOpen ? "Tafsir" : "Tutup"} />
                    <Button onClick={() => handlePlay()} mode={"secondary"} text={!playing ? "Play" : "Pause"} />

                </div>
                {index === data.number.inSurah ?
                    <section className={Styles['section-inside']}>
                        <article style={{ textAlign: "center" }}>{data.tafsir.id.long}</article>
                    </section>
                    : ""
                }
            </section>
        )
    }
    else return null;
}