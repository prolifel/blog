import { CMS_NAME, CMS_URL } from "../lib/constants";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-4xl md:text-6xl tracking-tighter leading-tight md:pr-8">
        hello, <i>warganet!</i>
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">👋</h4>
    </section>
  );
}
