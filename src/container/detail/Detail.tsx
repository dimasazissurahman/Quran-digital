import { FC, useEffect, useState, IArrVerses, IObjSurah } from "react";
import { useParams } from "react-router";
import { GetSurah } from "../../api/GetSurah";
import { HeaderDesktop } from "../../component/header/Header";
import { CardSection } from "../../component/card/CardSection";

const DetailPage: FC = () => {
    const params = useParams();
    const [arrVerses, setArrVerses] = useState<IArrVerses[]>([]);
    const [objSurah, setObjSurah] = useState({} as IObjSurah);

    useEffect(() => {
        const getData = async () => {
            const { data } = await GetSurah(`/${params.surat}`);
            if (data.code === 200) {
                setArrVerses(data.data.verses);
                setObjSurah(data.data);
            }
        }
        getData();
    }, [params.surat]);

    return (
        <>
            <HeaderDesktop title={"Quran Digital"} />
            <div className={'container'}>
                {objSurah.name &&
                    <>
                        <h1>{objSurah.name.transliteration.id} ({objSurah.number}:{objSurah.numberOfVerses})</h1>
                        <h3 style={{ marginTop: 0 }}>{objSurah.name.translation.id}</h3>
                    </>
                }
                <div style={{ textAlign: "center" }}>
                    <h3 style={{ fontSize: "30px" }}>بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</h3>
                    {arrVerses.length > 0 && arrVerses.map((data, i) => {
                        return (
                            <CardSection key={i} data={data} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default DetailPage;