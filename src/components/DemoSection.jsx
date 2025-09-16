import { PlayCircleIcon } from '@heroicons/react/20/solid'

/*
* Description:
Showcases a live demo video/GIF of the feature and example output.

Purpose:
Visually demonstrate the feature in action to build trust and excitement.
* */
export default function DemoSection(){
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <div className="lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-400">Live Demonstration</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">See It In Action</p>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Watch the LMG deliver unmatched suppressive fire and tactical dominance in a live-fire exercise.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <div className="relative aspect-[16/9] rounded-2xl shadow-2xl ring-1 ring-white/10 overflow-hidden">
                        <video
                            controls
                            className="w-full h-full object-cover rounded-2xl"
                        >
                            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        {/* Overlay play icon (optional) */}
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-900/40">
                            <PlayCircleIcon
                                className="h-24 w-24 text-white/70 transition-colors hover:text-white"
                                aria-hidden="true"
                            />
                        </div>
                    </div>

                    <figure className="mt-16">
                        <blockquote className="text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                            <p>“The target area was effectively suppressed, allowing the assault team to advance and secure the objective with zero casualties. The LMG's performance was textbook.”</p>
                        </blockquote>
                        <figcaption className="mt-10">
                            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                                <div className="font-semibold text-white">Squad Leader</div>
                                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-300">
                                    <circle cx={1} cy={1} r={1} />
                                </svg>
                                <div className="text-gray-400">After-Action Report</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    );
}