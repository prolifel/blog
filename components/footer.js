import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-5 flex flex-col lg:flex-row items-center">
          <h3 className="text-xl lg:text-2xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-3 lg:mb-0 lg:pr-4 lg:w-1/2">
            blog.prolifel.dev
          </h3>
          <div className="lg:pl-4 lg:w-1/2 lg:text-end">
            powered by{" "}
            <a href="https://vercel.com/" target="_blank">
              {" "}
              vercel{" "}
            </a>{" "}
            and
            <a href="https://sanity.io/" target="_blank">
              {" "}
              sanity
            </a>
            .
            {/* <a
              href="https://nextjs.org/docs/basic-features/pages"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Read Documentation
            </a>
            <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a> */}
          </div>
        </div>
      </Container>
    </footer>
  );
}
