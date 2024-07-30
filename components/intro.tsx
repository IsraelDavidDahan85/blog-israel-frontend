import { CMS_NAME, CMS_URL } from "../lib/constants";

export default function Intro({title, description}) {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-12 md:mb-16">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        <a href="/">{title}.</a>
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        {description}
      </h4>
    </section>
  );
}
