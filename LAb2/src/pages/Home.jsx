import { useEffect, useState } from "react";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <main>
      <section>
        <h1>Welcome</h1>

        <p>
          Hello! I am Arnav Sharma, a Computer Science student
          passionate about coding, problem solving, and building
          projects.
        </p>
      </section>
    </main>
  );
}

export default Home;