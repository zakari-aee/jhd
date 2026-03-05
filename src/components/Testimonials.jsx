import { testimonials } from "../lib/data";

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-[#EEF3F8] border-y border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-20 opacity-0 animate-[fade-in-up_0.8s_ease-out_forwards]">
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#111827] mb-6 tracking-tight">
                        Paroles de <span className="text-[#5B8DB8]">Clients</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        L'excellence de notre service se mesure à la satisfaction de ceux qui nous ont fait confiance.
                        Découvrez leurs témoignages.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative group opacity-0 animate-[fade-in-up_0.8s_ease-out_forwards]"
                            style={{ animationDelay: `${index * 200 + 100}ms` }}
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-8 right-8 text-[#EEF3F8] opacity-50 group-hover:text-[#5B8DB8]/10 transition-colors duration-300">
                                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 32 32">
                                    <path d="M10.041 12.392c-1.396 0-2.528 1.111-2.528 2.483 0 1.371 1.132 2.482 2.528 2.482 1.396 0 2.528-1.111 2.528-2.482 0-3.328-1.921-6.703-5.064-8.15l-1.42 1.37c2.378 1.115 3.956 3.12 3.956 4.3zM22.041 12.392c-1.396 0-2.528 1.111-2.528 2.483 0 1.371 1.132 2.482 2.528 2.482 1.396 0 2.528-1.111 2.528-2.482 0-3.328-1.921-6.703-5.064-8.15l-1.42 1.37c2.378 1.115 3.956 3.12 3.956 4.3z" />
                                </svg>
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-[#yello-400] text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <p className="text-gray-700 text-lg italic leading-relaxed mb-8 relative z-10">
                                "{testimonial.quote}"
                            </p>

                            <div className="flex justify-between items-end border-t border-slate-100 pt-6">
                                <div>
                                    <h4 className="font-bold text-[#111827] text-xl group-hover:text-[#5B8DB8] transition-colors">{testimonial.name}</h4>
                                    <p className="text-sm font-medium text-gray-500">{testimonial.role}</p>
                                </div>
                                {/* Initial circle avatar */}
                                <div className="w-12 h-12 rounded-full bg-[#111827] text-white flex items-center justify-center font-bold text-lg shadow-md">
                                    {testimonial.name.charAt(0)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
