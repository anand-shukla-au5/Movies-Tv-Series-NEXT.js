import Image from 'next/image'
import HeaderItems from './HeaderItems'
function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between h-auto">
            <HeaderItems />
            <Image fill={'white'} className="object-contain" src="/imdb_logo.png" width={200} height={100} />
        </header>
    )
}

export default Header