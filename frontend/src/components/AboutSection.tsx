
export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gray-50 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-base text-primary font-semibold tracking-wide uppercase">About</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What is Mente WebMind?
        </p>
        <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
          Mente WebMind is a personal knowledge management tool that helps users save, organize, and retrieve web urls with additional information at ease. Rather than simply bookmarking pages, Mente WebMind scrapes and summarizes each page, storing a concise overview that allows users to search and find exactly what they need, whenever they need it.
        </p>
      </div>
    </section>
  );
}
