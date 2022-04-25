import Image from 'next/image'
import HeaderItems from './HeaderItems'
function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between h-auto">
            <HeaderItems />
            <Image fill={'white'} className="object-contain" src="/imdb.svg" width={120} height={60} />
        </header>
    )
}

export default Header