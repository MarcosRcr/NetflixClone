import React from "react";
import { FaPlay } from 'react-icons/fa'
import { useRouter } from "next/router";

import useMovie from "@/hooks/useMovie";

interface PlayBtnProps {
    movieId: string;
}

const PlayBtn: React.FC<PlayBtnProps> = ({ movieId }) => {
    const router = useRouter();

    return(
        <button
        
        onClick={() => router.push(`/watch/${movieId}`)}
        className="
            bg-white
            rounded-md
            px-2 md:px-4
            py-1 md:py-2
            w-auto
            text-xs lg:text-lg
            font-semibold
            flex
            flex-row
            items-center
            hover:bg-neutral-300
            transition
        "
        >
            <FaPlay size={12} className="mr-1"/> 
             Play
        </button>
    )
}
export default PlayBtn;