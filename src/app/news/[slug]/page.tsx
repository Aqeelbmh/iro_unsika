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
      <p className="text-gray-500 text-sm mb-6">{item.date}</p>
      <div className="text-lg text-gray-700 prose">{item.content}</div>
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