export default function Home() {
    return (
        <div className="w-full flex flex-col items-center box-border p-8">
            <div className="w-5/6 flex flex-col items-center p-4">
                <p className="w-full text-center p-4 text-5xl font-extrabold mb-5">Weeb&#39;s all in one library</p>
                <div className="w-2/3 grid grid-cols-2 grid-rows-3 gap-4">
                    <div className="border bg-accent w-full aspect-video rounded-xl p-2">
                        <p className="font-bold text-2xl">Find Sauce</p>
                        <p className="w-full">paste the sauce provided by the sauce hero in the comment section and find what you are looking for.</p>
                    </div>
                    <div className="border bg-accent w-full aspect-video rounded-xl p-2">
                        <p className="font-bold text-2xl">Look up your waifu</p>
                        <p className="w-full">Fell in love with an anime girl but can&#39;t find her sauce? use this king.</p>
                    </div>
                    <div className="border bg-accent w-full aspect-video rounded-xl p-2">
                        <p className="font-bold text-2xl">Satisfy your virginity</p>
                        <p className="w-full">Feeling lonely and left all alone? here you can find the best 12 episode one searson highschol romcom slice of life anime you are looking for.</p>
                    </div>
                    <div className="border bg-accent w-full aspect-video rounded-xl p-2">
                        <p className="font-bold text-2xl">Keep up with your lists</p>
                        <p className="w-full">are you sick of waiting until the next episode of your anime drops? here you can find a schedule of everything you are watching.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
