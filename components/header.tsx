import Link from "next/link";

export default function Header({ title, description }) {
  return (
    <section className="flex-col md:flex-cols flex md:justify-between mt-16 mb-12 md:mb-16">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 text-center md:text-left">
        <a href="/">{title}.</a>
      </h1>
      <h4 className="pl-0 ml-0 text-lg mt-5 mt-0 text-center md:text-left">
        {description}
      </h4>
    </section>
  );
}
