export default function Home() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gray-50">
      <div className="flex flex-col items-center">
        <img src="/images/avatar.png" alt="Welcome Avatar" className="h-40 w-40" />
        <h1 className="text-3xl font-bold my-4">Welcome, Developer 👋</h1>
      </div>
      <div>
        <h2 className="text-xl my-3">This is a boilerplate for NextJS + TailwindCSS + TypeScript 🔥</h2>
        <p>
          Head over to
          {' '}
          <code>index.js</code>
          {' '}
          and start modifying this page.
        </p>
      </div>
    </section>
  );
}
