import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const news = [
  {
    slug: 'rector-of-unsika-highlights-legal-and-ethical-aspects-of-artificial-intelligence',
    title: 'Higher Education at International Forum in China',
    date: '2025-05-23/24',
    content: (
      <>
        <p>RECTOR OF UNSIKA HIGHLIGHTS LEGAL AND ETHICAL ASPECTS OF ARTIFICIAL INTELLIGENCE IN HIGHER EDUCATION AT INTERNATIONAL FORUM IN CHINA.</p>
        <p>The Rector of Universitas Singaperbangsa Karawang (UNSIKA), Prof. Dr. Ade Maman Suherman, S.H., M.Sc., was invited as a keynote speaker at the 2025 Belt and Road Academic Conference on Technical and Vocational Education and Training (TVET) held in Shenzhen, China, on May 23–24, 2025.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
          <Image src="/assets/news/news 01.jpeg" alt="Forum 1" width={600} height={350} className="rounded-lg shadow object-cover w-full h-56" />
          <Image src="/assets/news/news 2.jpeg" alt="Forum 2" width={600} height={350} className="rounded-lg shadow object-cover w-full h-56" />
          <Image src="/assets/news/news 3.jpeg" alt="Forum 3" width={600} height={350} className="rounded-lg shadow object-cover w-full h-56" />
          <Image src="/assets/news/news 4.jpeg" alt="Forum 4" width={600} height={350} className="rounded-lg shadow object-cover w-full h-56" />
        </div>
        <p>In his presentation, Prof. Ade Maman Suherman emphasized the importance of legal and ethical aspects in the development and application of Artificial Intelligence (AI) in higher education. He highlighted that while AI offers significant opportunities to improve the quality and accessibility of education, it also presents challenges related to data privacy, academic integrity, and the potential for bias in automated decision-making.</p>
        <p>&quot;Universities must play an active role in ensuring that the use of AI in education is guided by strong ethical principles and legal frameworks,&quot; said Prof. Ade. He also encouraged international collaboration to develop global standards and best practices for AI in education.</p>
        <p>The conference was attended by representatives from more than 20 countries, including academics, policymakers, and industry leaders. The event provided a platform for sharing experiences and strategies to enhance the quality and relevance of technical and vocational education in the era of digital transformation.</p>
        <p>UNSIKA&apos;s participation in this international forum reflects its commitment to global engagement and its proactive role in addressing emerging issues in higher education.</p>
      </>
    ),
  },
  { slug: 'international-summer-course-2024', title: 'International Summer Course 2024', date: '2024-07-15', content: 'Full details about the International Summer Course 2024. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.' },
  { slug: 'scholarship-applications-open', title: 'Scholarship Applications Open', date: '2024-08-01', content: 'Full details about scholarship applications. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.' },
  { slug: 'new-partnership-with-seoul-university', title: 'New Partnership with Seoul University', date: '2024-07-20', content: 'Full details about the new partnership with Seoul University. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.' },
];

export default function NewsDetailPage(props: { params: { slug: string } }) {
  const slug = decodeURIComponent(props.params.slug);
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