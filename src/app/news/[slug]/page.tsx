import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { news } from '../newsData';

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  const slug = decodeURIComponent(params.slug);
  const item = news.find(n => n.slug === slug);
  if (!item) return notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link href="/news" className="text-blue-600 hover:underline mb-4 inline-block">&larr; Back to News</Link>
      <h1 className="text-3xl font-bold mb-2 text-gray-700">{item.title}</h1>
      {item.slug === 'unsika-health-science-bulgaria-global-collaboration' ? (
        <div className="flex gap-4 mb-6">
          <Image src="/assets/news/news 2/1.jpeg" alt="Bulgaria Collaboration 1" width={300} height={200} className="rounded-lg object-cover" />
          <Image src="/assets/news/news 2/2.jpeg" alt="Bulgaria Collaboration 2" width={300} height={200} className="rounded-lg object-cover" />
          <Image src="/assets/news/news 2/3.jpeg" alt="Bulgaria Collaboration 3" width={300} height={200} className="rounded-lg object-cover" />
        </div>
      ) : (
        <div className="flex gap-4 mb-6">
          <Image src="/assets/news/news 01.jpeg" alt="Event Image 1" width={300} height={200} className="rounded-lg object-cover" />
          <Image src="/assets/news/news 2.jpeg" alt="Event Image 2" width={300} height={200} className="rounded-lg object-cover" />
        </div>
      )}
      <p className="text-gray-500 text-sm mb-6">{item.date}</p>
      <div className="text-lg text-gray-700 prose text-justify mb-6">
        {item.content.split('\n\n')[0]}
      </div>
      <div className="flex gap-4 mb-6">
        <Image src="/assets/news/news 3.jpeg" alt="Event Image 3" width={300} height={200} className="rounded-lg object-cover" />
        <Image src="/assets/news/news 4.jpeg" alt="Event Image 4" width={300} height={200} className="rounded-lg object-cover" />
      </div>
      <div className="text-lg text-gray-700 prose text-justify">
        {item.content.split('\n\n').slice(1).join('\n\n')}
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return [
    { slug: 'rector-of-unsika-highlights-legal-and-ethical-aspects-of-artificial-intelligence' },
    { slug: 'international-summer-course-2024' },
    { slug: 'scholarship-applications-open' },
    { slug: 'new-partnership-with-seoul-university' },
  ];
} 