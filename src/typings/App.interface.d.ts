import "react";

declare module "react" {
    interface IArrVerses {
        audio: {
            primary: string;
        }
        number: {
            inQuran: number;
            inSurah: number;
        }
        tafsir: {
            id: {
                long: string;
                short: string;
            }
        }
        text: {
            arab: string;
            transliteration: {
                en: string;
            }
        }
        translation: {
            en: string;
            id: string;
        }
    }

    interface IObjSurah {
        name: {
            short: string;
            translation: {
                id: string;
            };
            transliteration: {
                id: string;
            }
        }
        number: string;
        numberOfVerses: string;
        preBismillah: {
            text: {
                arab: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
                transliteration: {
                    en: "Bismillaahir Rahmaanir Raheem"
                }
            },
            translation: {
                en: string;
                id: string;
            },
            audio: {
                primary: string;
            }
        };
        verses: IArrVerses;
    }

    interface IUseAudio {
        playing:boolean;
        handlePlay: () => void;
    }

}