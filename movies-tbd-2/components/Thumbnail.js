import Image from 'next/image'
import {
    ThumbUpIcon
} from '@heroicons/react/solid'
function Thumbnail({ results }) {
    const img_url = 'https://image.tmdb.org/t/p/original'
    return (
        <div className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
            <Image layout='responsive' src={
                `${img_url}${results.backdrop_path || results.poster_path}` ||
                `${img_url}${results.backdrop_path}`
            } height={1080} width={1920} />
            <div className='p-2'>
                <h2 className="m-1 text-2xl group-hover:font-bold transition-all duration-200 ease-in-out">{results.title || results.orignal_name}</h2>
                <p className="truncate max-w-lg">{results.overview}</p>
                <p className='flex item-center opacity-0 group-hover:opacity-100'>
                    {results.media_type && `${results.media_type.toUpperCase()}`}{" "}
                    {results.release_date || results.first_air_date} -{" "}
                    <ThumbUpIcon className='h-5 mx-2' />
                    {results.vote_count}
                </p>
            </div>
        </div>
    )
}

export default Thumbnail