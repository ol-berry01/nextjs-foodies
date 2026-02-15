import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!

        <div>
          <Link href={ 'meals' }>Meals</Link>
          <Link href={ 'meals/share' }>Meals Share</Link>
          <Link href={ 'meals/recipe' }>Meals Recipe</Link>
          <Link href={ 'community' }>Community</Link>
        </div>
      </h1>
    </main>
  );
}
