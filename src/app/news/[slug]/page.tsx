import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { news } from '../newsData';

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  const slug = decodeURIComponent(params.slug);
  const item = news.find(n => n.slug === slug);
  if (!item) return notFound();

  // Split content into paragraphs
  const paragraphs = item.content.split('\n\n');
  const images = item.images || [];
  const total = paragraphs.length + images.length;
  // Calculate how often to insert images
  const interval = Math.ceil(paragraphs.length / (images.length + 1));

  // Build an array interleaving paragraphs and images
  let contentWithImages: React.ReactNode[] = [];
  let imgIdx = 0;
  for (let i = 0; i < paragraphs.length; i++) {
    contentWithImages.push(
      <p key={`p-${i}`} className="mb-6 text-lg text-gray-700 text-justify">{paragraphs[i]}</p>
    );
    // Insert image after every interval, but not after the last paragraph
    if (images.length > 0 && imgIdx < images.length && (i + 1) % interval === 0) {
      contentWithImages.push(
        <div key={`img-${imgIdx}`} className="flex justify-center my-8">
          <Image
            src={images[imgIdx]}
            alt={item.title + ' image ' + (imgIdx + 1)}
            width={500}
            height={350}
            className="rounded-lg object-cover shadow-lg"
            unoptimized
          />
        </div>
      );
      imgIdx++;
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link href="/news" className="text-blue-600 hover:underline mb-4 inline-block">&larr; Back to News</Link>
      <h1 className="text-3xl font-bold mb-2 text-gray-700">{item.title}</h1>
      <p className="text-gray-500 text-sm mb-6">{item.date}</p>
      <div className="prose prose-lg text-justify text-gray-700">
        {contentWithImages}
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