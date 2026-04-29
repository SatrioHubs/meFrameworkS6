import { useRouter } from 'next/router';

const CategoryPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Category catch-all</h1>
      <p>Slug segments:</p>
      <ul>
        {Array.isArray(slug)
          ? slug.map((segment, idx) => <li key={idx}>{segment}</li>)
          : slug
          ? <li>{slug}</li>
          : <li>(no segments)</li>}
      </ul>
    </div>
  );
};

export default CategoryPage;
