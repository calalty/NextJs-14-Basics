import Image from "next/image";
import ShowcaseLink from "./ShowcaseLink";

export default function Home() {
  const showcaseLinks: ShowcaseLink[] = [
    {
      description:
        "Showcasing nested layouts, a custom 'not found' page, and the use of the generateStaticParams function for dynamic content generation",
      heading: "Todos List",
      url: "/todos",
    },
    {
      description:
        "Showcasing a custom 'loading' and 'error' page, and the integration of an asynchronous page. It handles API data directly and efficiently for dynamic web content.",
      heading: "Search",
      url: "/search",
    },
    {
      description:
        "Showcasing the React Suspense component in action: displaying fallback data until the main content is ready, ensuring a smoother user experience.",
      heading: "Suspense",
      url: "/suspense",
    },
    {
      description:
        "Demonstrating an asynchronous POST function within a product addition form, using 'action'. This setup allows for direct submission of form data to a server-side function.",
      heading: "Products",
      url: "/products",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {showcaseLinks.map(({ description, heading, url }) => (
          <ShowcaseLink
            key={heading}
            description={description}
            heading={heading}
            url={url}
          />
        ))}
      </div>
    </main>
  );
}
