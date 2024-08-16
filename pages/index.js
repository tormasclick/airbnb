import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Banner from '../components/Banner';
import Footer from '@/components/Footer';

// Dummy data for featured properties (this would come from a data source in a real app)
const featuredProperties = [
  {
    id: 1,
    name: 'Beachfront Villa',
    imageUrl: '/images/beachfront-villa.jpg',
  },
  {
    id: 2,
    name: 'Mountain Cabin',
    imageUrl: '/images/mountain-cabin.jpg',
  },
  // Add more featured properties as needed
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check the user's system preference
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');

    // Determine if we should use dark mode
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }

    console.log('Document classes after initial setup:', document.documentElement.classList);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }

    console.log('Document classes after toggle:', document.documentElement.classList);
  };

  return (
    <div>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="p-4 bg-white dark:bg-gray-900">
        <Banner featuredProperties={featuredProperties} />
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 mt-8">
          Explore Airbnb Categories
        </h2>
        <Categories />
      </main>
      <Footer />
    </div>
  );
}
