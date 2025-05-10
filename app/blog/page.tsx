export default function Blog() {
    const posts = [
      { slug: "primer-articulo", title: "Mi primer artículo" },
      { slug: "trucos_diseno", title: "Trucos de diseño frontend" },
      { slug: "miprueba", title: "david villa" },
    ];
  
    return (
      <section className="p-6">
        <h2 className="text-3xl font-bold text-yellow-300  dark:text-white">Blog Profesional</h2>
        <ul className="mt-4 space-y-4">
          {posts.map((post) => (
            <li key={post.slug}>
              <a
                href={`/blog/${post.slug}`}
                className="text-secondary hover:text-primary underline"
              >
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    );
  }