import { BoltIcon, EyeIcon, LockClosedIcon, CircleStackIcon } from '@heroicons/react/24/outline'

/*
* Description:
Explains what the feature does and lists its main benefits.

Purpose:
Help users understand the value clearly with text + visuals.
* */

const features = [
    {
        name: 'Sustained Firepower',
        description:
            'Deliver continuous, high-volume fire to suppress enemy positions and provide crucial covering fire for your squad.',
        icon: BoltIcon,
    },
    {
        name: 'Bipod Stability',
        description:
            'Deploy the integrated bipod for a stable firing platform, drastically increasing accuracy for long-range engagements.',
        icon: LockClosedIcon,
    },
    {
        name: 'Ammunition Capacity',
        description:
            'Utilize high-capacity magazines or belt-fed systems to maintain fire superiority without frequent reloads.',
        icon: CircleStackIcon,
    },
    {
        name: 'Advanced Optics',
        description:
            'Mount a variety of optics on the Picatinny rail system for enhanced target acquisition in all combat scenarios.',
        icon: EyeIcon,
    },
]

export default function FeatureSection(){
    return(
        <div className="bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-400">Dominate the Battlefield</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Key Advantages of the LMG Platform
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Understand the core benefits that make the Light Machine Gun an indispensable asset for any infantry squad seeking fire superiority.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-white">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-400">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}