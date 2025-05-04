type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};
export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  // Define las rutas estáticas. Esto podría venir de una API, base de datos o lista fija.
  return [
    { slug: 'ejemplo-1' },
    { slug: 'ejemplo-2' },
    { slug: 'ejemplo-3' },
  ];
}

export default async function BlogPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  return <div>Blog dinámico: {slug}</div>;

}





  