import { Component } from 'solid-js';
import { Link } from 'solid-app-router';

const Home: Component = (p) => {
  return (
    <div>
      <h2>Home</h2>
      <Link href="/people">Visit Solid Demo</Link>
    </div>
  );
};

export default Home;
