import { FC, IObjSurah, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GetSurah } from '../../api/GetSurah';
import { Card } from '../../component/card/Card';
import { HeaderDesktop } from '../../component/header/Header';
import Styles from './Home.module.css';
const HomePage: FC = () => {
    const [arrSurah, setArrSurah] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const { data } = await GetSurah();
            setArrSurah(data.data);
        }
        getData();
    }, [])

    return (
        <>
            <HeaderDesktop title={"Quran Digital"} />
            <div className={Styles['container']}>
                <h3>Semua Surat</h3>
                <div className={Styles['container-list']}>
                    {arrSurah.map((data: IObjSurah, i: number) => {
                        return (
                            <NavLink key={i} to={`/surat=${data.number}`} style={{ textDecoration: "none", color: "black" }}>
                                <Card totalAyat={data.numberOfVerses} number={data.number} nameArab={data.name.short} textMeaning={data.name.translation.id} nameId={data.name.transliteration.id} />
                            </NavLink>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default HomePage;