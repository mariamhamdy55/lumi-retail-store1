import { useMemo, useState } from 'react';

import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';

import { products } from './data/products';

import './App.css';

const categories = [
  'All',
  'Tops',
  'Outerwear',
  'Denim',
  'Accessories',
  'Bottoms',
  'Knitwear',
  'Dresses',
  'Shoes',
];

function App() {
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        category === 'All' || product.category === category;

      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  return (
    <>
      <AnnouncementBar />

      <Navbar search={search} setSearch={setSearch} />

      <main>
        <Hero />

        <section className="shop-section" id="shop">
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE LUMI EDIT</p>

              <h2>
                Considered <em>essentials.</em>
              </h2>
            </div>

            <p className="section-intro">
              A collection of forever favorites.
              <br />
              Made to mix, match, and make your own.
            </p>
          </div>

          <div className="filter-row">
            <div className="filters">
              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`filter ${
                    category === item ? 'active' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <span className="result-count">
              {filtered.length} PIECES
            </span>
          </div>

          <div className="product-grid">
            {filtered.map((product, index) => (
              <ProductCard
                product={product}
                index={index}
                key={product.id}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="empty">
              No pieces found. Try another search.
            </p>
          )}
        </section>

        <section className="editorial" id="journal">
          <div className="editorial-image">
            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85"
              alt="A relaxed neutral fashion look"
            />
          </div>

          <div className="editorial-copy">
            <p className="eyebrow">A NOTE ON STYLE</p>

            <h2>
              Wear what
              <br />
              feels <em>like you.</em>
            </h2>

            <p>
              We believe getting dressed should feel simple.
              Fewer pieces, more possibility. The little details,
              the good fabrics, and the things you reach for
              again and again.
            </p>

            <a href="#shop" className="text-link">
              Find your favorites <span>↗</span>
            </a>
          </div>
        </section>

        <section className="newsletter">
          <p className="eyebrow">LETTERS FROM LUMI</p>

          <h2>
            A little inspiration,
            <br />
            <em>delivered.</em>
          </h2>

          <p>
            Notes on new arrivals, thoughtful living,
            and everyday style.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="newsletter-form"
          >
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Your email address"
            />

            <button type="submit">
              Sign me up ↗
            </button>
          </form>

          <small>
            By subscribing, you agree to receive occasional
            emails from Lumi.
          </small>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;