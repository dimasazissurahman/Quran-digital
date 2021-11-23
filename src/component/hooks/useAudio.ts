import { IUseAudio, useEffect, useState } from "react";

export const useAudio = (url: string | undefined) => {
    const [audio] = useState<HTMLAudioElement>(new Audio(url));
    // const [isAudioError, setIsAudioError] = useState()
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, [audio]);

    const handlePlay = () => {
        if (!playing) {
            setPlaying(true);
            audio.play();
        }
        else {
            audio.pause();
            setPlaying(false);
        }
    }
    const useAudioValue: IUseAudio = {
        playing,
        handlePlay,
    }
    return useAudioValue;
};