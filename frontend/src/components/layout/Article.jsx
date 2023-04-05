const Article = () => {
  return (
    <article className="grid gap-12">
      <img
        src="https://picsum.photos/1280/720"
        alt=""
        className="h-96 w-full object-cover"
      />
      <h2 className="text-center text-5xl font-bold">
        Next.js and Rust: An Innovative Approach to Full-Stack Development
      </h2>
      <div className="mx-auto flex items-center justify-center gap-8 rounded-md bg-neutral-100 px-8 py-4">
        <img
          className="h-12 w-12 rounded-full shadow-md"
          src="https://picsum.photos/100/100"
          alt="Vaibhav Sompua"
        />
        <span className="font-bold">Vaibhav Sompura</span>
        <span className="tabular-nums">Mar 22, 2023</span>
        <span className="tabular-nums text-slate-600">17 min read</span>
      </div>
      <div className="mx-auto grid w-[65ch] gap-8 py-4 text-justify text-xl leading-10">
        <p>
          Recently, shuttle released a Node.js CLI package that allows you to
          quickly bootstrap an application that uses a Next.js frontend with a
          Rust backend that uses Axum, a popular Rust web framework with
          easy-to-use, uncomplicated syntax.
        </p>
        <p>
          The app we'll be building will be a notes app with a login portal that
          can register users, as well as log in users and reset passwords and
          logged in users will be able to view, create, update and delete notes.
          This article will focus more on the Rust (backend) side and will
          assume that you have knowledge of using React.js/Next.js for your
          frontend.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          laudantium minus eaque mollitia autem a? Sunt laboriosam cumque totam
          voluptatum velit earum incidunt eum numquam repellat? Omnis sapiente
          velit magni, assumenda adipisci ab numquam error aliquam dignissimos,
          perferendis excepturi, deleniti sequi! Sint!
        </p>
        <p>
          Similique eveniet pariatur nostrum autem quibusdam magnam fugit
          excepturi aut repellendus numquam nulla saepe earum quisquam tempora
          quis, culpa laboriosam nisi! Qui explicabo maiores ducimus. Accusamus
          molestias porro repellat inventore dignissimos, ipsam deserunt
          temporibus fugit aut debitis earum tempora. Ipsa, porro unde.
        </p>
        <p className="-mx-8 rounded-r-md border-l-4 border-black bg-slate-200 p-8">
          Exercitationem ut vitae facere assumenda beatae deserunt amet
          dignissimos quia iusto dolores, blanditiis quos labore, magnam
          deleniti quidem alias, quae nam. Quod voluptatibus delectus ratione
          necessitatibus repudiandae nulla, ducimus animi. Veritatis et officiis
          illo qui repellat obcaecati veniam ipsam exercitationem impedit nemo.
        </p>
        <p>
          Nihil tempore voluptas quos, maxime voluptate totam sunt voluptatibus
          ipsa maiores facilis laudantium sed minus! Debitis, veniam. Vel
          placeat nostrum aspernatur, facilis, repudiandae laudantium
          perspiciatis voluptatum amet, optio ab blanditiis vero esse veritatis
          earum ducimus beatae. Nihil soluta similique laborum nam debitis.
        </p>
      </div>
    </article>
  )
}

export default Article
