/*
* Create new testimonials for LMG Showcase page.
* Create a testimonials like containing userImage, userReview, username
* */
export default function NewTestimonials({userName, userReview, imageURL}) {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">
                    <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
                        <p className="leading-loose text-gray-500 dark:text-gray-300">
                            {userReview}
                        </p>

                        <div className="flex items-center mt-6">
                            <img className="object-cover rounded-full w-14 h-14"
                                 src={imageURL}
                                 alt=""/>

                            <div className="mx-4">
                                <h1 className="font-semibold text-blue-500">Robbert</h1>
                                <span className="text-sm text-gray-500 dark:text-gray-300">{userName}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}