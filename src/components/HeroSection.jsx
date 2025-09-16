/*
* - Generate a sitemap for this React web application
- Generate a detailed list of custom components for this React web application
- For each of the custom component detail the description and purpose of the custom component and include a list of HTML elements required inside the custom components
* */
export default function HeroSection(){
    return(
        <section className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            <div
                className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                aria-hidden="true"
            >
                <div
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Showcase of LMG</h1>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        An LMG, or Light Machine Gun, is a lightweight, single-soldier operated automatic weapon designed as an infantry support weapon. Key characteristics include a longer barrel and heavier construction than a standard rifle, allowing for extended sustained fire. LMGs use either belt-fed or magazine-fed ammunition, often share the same caliber as squad rifles (making them "squad automatic weapons"), and are frequently equipped with a bipod for stability.
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                        <a href="#" className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">
                            Primary CTA
                        </a>
                        <a href="#" className="text-sm font-semibold leading-6 text-white">
                            Secondary CTA <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
                <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
                    <img src="https://w0.peakpx.com/wallpaper/815/143/HD-wallpaper-light-machine-gun-fn-m249s-lmg-m249-saw-gun.jpg" alt="App screenshot" width={2432} height={1442} className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10" />
                </div>
            </div>
        </section>
    )
}