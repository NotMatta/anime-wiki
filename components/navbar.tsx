const NavBar = () => {
    return (
        <div className="p-2 box-border w-full border-b flex justify-between h-18 sticky top-0">
            <div className="flex gap-1 items-center overflow-hidden w-16 h-16 hover:w-1/2 duration-500 relative cursor-pointer">
                <img src="https://64.media.tumblr.com/413ff3b0ab8b079647fa26aa7e8615f6/ae96eb8637906ae0-d7/s100x200/f4c19883ce4b6d21ff8752de496c0688a702d302.gifv"
                    className="w-14 h-14 object-cover rounded border-2 border-foreground absolute"/>
                <img src="https://cdn.pfps.gg/pfps/7707-.gif" className="w-14 h-14 z-10 object-cover hover:opacity-0 duration-500 rounded border-2 border-foreground"/>
                <p className="text-4xl font-bold text-nowrap">アニメ</p>
            </div>
            <div className="w-1/4 flex items-center justify-around">
                <a className="underline">Home</a>
                <a className="underline">Anime</a>
                <a className="underline">Manga</a>
            </div>
        </div>
    )
}

export default NavBar
