import Link from 'next/link';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(r => r.json());

export default function Home() {
  const { data } = useSWR('http://localhost:3001/api/projects', fetcher);
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Проекты</h1>
      <div className="grid gap-6">
        {data?.map((p: any) => (
          <article key={p.id} className="p-4 border rounded">
            <h2 className="text-xl font-semibold">{p.title}</h2>
            <p>{p.short_description}</p>
            <Link href={`/projects/${p.slug}`}>Подробнее</Link>
          </article>
        ))}
      </div>
    </main>
  );
}