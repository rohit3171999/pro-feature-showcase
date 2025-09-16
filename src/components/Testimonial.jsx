/*
* Description:
Contains customer quotes and real-world use cases.

Purpose:
Build credibility and social proof.
* */

const testimonials = [
    {
        body: 'The sustained fire from the LMG was the deciding factor. It kept their heads down while we maneuvered. Wouldn\'t go on patrol without it.',
        author: {
            name: 'Sgt. "Rex" Johnson',
            handle: '1st Infantry Division',
            imageUrl:
                'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        body: 'In urban combat, laying down a base of fire is everything. This platform is reliable, accurate, and gives my squad the confidence to push forward.',
        author: {
            name: 'Cpl. "Viper" Mendez',
            handle: '75th Ranger Regiment',
            imageUrl:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        body: 'Reliability is non-negotiable. Through sand, mud, and rain, this weapon has never failed me. It just runs, and that peace of mind is priceless.',
        author: {
            name: 'Master Sgt. "Ice" Williams',
            handle: 'Special Forces Group',
            imageUrl:
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
]

export default function Testimonial(){
    return (
        <div className="relative isolate bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-400">Testimonials</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Field-Tested, Operator-Approved
                    </p>
                </div>
                <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {testimonials.map((testimonial) => (
                            <figure key={testimonial.author.handle} className="rounded-2xl bg-gray-800/60 p-8 text-sm leading-6 shadow-lg ring-1 ring-white/10">
                                <blockquote className="text-white">
                                    <p>{`“${testimonial.body}”`}</p>
                                </blockquote>
                                <figcaption className="mt-6 flex items-center gap-x-4">
                                    <img className="h-10 w-10 rounded-full bg-gray-700" src={testimonial.author.imageUrl} alt="" />
                                    <div>
                                        <div className="font-semibold text-white">{testimonial.author.name}</div>
                                        <div className="text-gray-400">{testimonial.author.handle}</div>
                                    </div>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}