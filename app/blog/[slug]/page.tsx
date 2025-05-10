type PageProps = {
  params: {
    slug: string;
  };
};
export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  // Define las rutas estáticas. Esto podría venir de una API, base de datos o lista fija.
  return [
    { slug: 'primer-articulo' },
    { slug: 'trucos_diseno' },
    { slug: 'miprueba' },
  ];
}

// export default async function BlogPage({ params }: PageProps) {
//   const resolvedParams = await params;
//   const { slug } = resolvedParams;

//   return <div>Blog dinámico: {slug}</div>;

// }
export default function BlogPage({ params }: PageProps) {
  const { slug } = params;

  // Definir contenido dinámico basado en slug
  const contentMap: Record<string, string> = {
    "primer-articulo": "Este es el primer artículo.",
    "trucos_diseno": "Consejos para mejorar el diseño.",
    "miprueba": "Contenido de prueba en el blog.",
  };

  return (
    <div>
      <h1>Blog dinámico</h1>
      <p>{contentMap[slug] || "Artículo no encontrado"}</p>
    </div>
  );
}






  