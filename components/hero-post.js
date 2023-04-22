import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "../components/cover-image";
import Link from "next/link";

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section className="mx-auto lg:w-2/3 w-full">
      <div className="xl:flex justify-center mb-8 md:mb-16">
        <CoverImage slug={slug} title={title} image={coverImage} priority />
      </div>
      <div className="mb-20 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 md:mb-28">
        <div>
          <h3 className="mb-4 text-3xl leading-tight lg:text-5xl">
            <Link href={`/posts/${slug}`}>{title}</Link>
          </h3>
          <div className="mb-4 text-lg md:mb-0">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <p className="mb-4 text-lg leading-relaxed indent-8 text-justify">
            {excerpt}
          </p>
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
      </div>
    </section>
  );
}
