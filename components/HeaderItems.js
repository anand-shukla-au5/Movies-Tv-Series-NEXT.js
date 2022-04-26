import {
    HomeIcon,
    BadgeCheckIcon,
    CollectionIcon,
    SearchIcon,
    UserIcon,
    LightningBoltIcon
} from '@heroicons/react/solid'

const tittleIcons = [
    { title: 'Home', icon: <HomeIcon className='h-8 mb-1 group-hover:animate-bounce' /> },
    { title: 'Trending', icon: <LightningBoltIcon className='h-8 mb-1 group-hover:animate-bounce' /> },
    { title: 'Verified', icon: <BadgeCheckIcon className='h-8 mb-1 group-hover:animate-bounce' /> },
    { title: 'Collection', icon: <CollectionIcon className='h-8 mb-1 group-hover:animate-bounce' /> },
    { title: 'Search', icon: <SearchIcon className='h-8 mb-1 group-hover:animate-bounce' /> },
    { title: 'Account', icon: <UserIcon className='h-8 mb-1 group-hover:animate-bounce' /> }
]
const HeaderDeatil = ({ title, icon }) =>
    <div className="flex flex-col items-center cursor-pointer group hover:text-white w-12 sm:w-20">
        {icon}
        <span className="tracking-widest group-hover:opacity-100 opacity-0">{title}</span>
    </div>

function HeaderItems() {
    return (
        <div className="flex flex-grow justify-evenly sm:max-w-3xl">
            {tittleIcons.map((el, id) => <HeaderDeatil key={id} title={el.title} icon={el.icon} />)}
        </div>
    )
} 7

export default HeaderItems