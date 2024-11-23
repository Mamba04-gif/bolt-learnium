import React from 'react';
    import Hero from '../components/Hero';
    import CardGrid from '../components/CardGrid';

    const Home: React.FC = () => {
      return (
        <div>
          <Hero />
          <CardGrid />
        </div>
      );
    };

    export default Home;
