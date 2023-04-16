const Header = () => {
  return (
    <>
      <div className="border-b border-gray-300 bg-gray-100">
        <div className="container mx-auto px-5">
          <p className="py-2 text-center text-sm">
            The source code for this blog is{" "}
            <a
              href="https://github.com/vsompura3/commentate-blog-application"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-success underline transition-colors duration-200"
            >
              {" "}
              available on GitHub.
            </a>{" "}
            PRs are welcome.
          </p>
        </div>
      </div>
      <header className="container mx-auto px-5">
        <div className="mb-16 mt-16 flex flex-col items-center md:mb-12 md:justify-between lg:flex-row">
          <h1 className="text-5xl font-bold leading-tight tracking-tighter sm:text-6xl md:text-8xl lg:pr-8">
            Commentate.
          </h1>
          <p className="mt-5 text-center text-xl md:text-left lg:pl-8">
            Discover stories, thinking, and expertise from writers on any topic.
          </p>
        </div>
      </header>
    </>
  );
};

export default Header;
