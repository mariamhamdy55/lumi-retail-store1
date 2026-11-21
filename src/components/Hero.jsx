import { ArrowUpRight, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">THE NEW EVERYDAY</p>

        <h1>
          Less, but
          <br />
          <em>lovelier.</em>
        </h1>

        <p className="hero-desc">
          Pieces that feel like you. Thoughtful essentials
          made to move through every moment, with ease.
        </p>

        <a className="primary-btn" href="#shop">
          Explore the collection <ArrowUpRight size={17} />
        </a>

        <div className="hero-note">
          <span>01 — 03</span>
          <span>Curated for your everyday</span>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=90"
          alt="Fashion models in timeless outfits"
        />

        <div className="image-caption">
          A wardrobe in harmony.
        </div>
      </div>

      <a className="scroll-cue" href="#shop">
        <ArrowDown size={16} />
        SCROLL TO DISCOVER
      </a>
    </section>
  );
}