import { Search, Menu, ShoppingBag } from 'lucide-react';

export default function Navbar({ search, setSearch }) {
  return (
    <header className="nav-wrap">
      <nav className="nav">
        <button className="icon-btn menu-btn" aria-label="Menu">
          <Menu />
        </button>

        <div className="nav-links">
          <a href="#shop">Shop</a>
          <a href="#story">Our story</a>
          <a href="#journal">Journal</a>
        </div>

        <a className="logo" href="#">
          lumi<span>.</span>
        </a>

        <div className="nav-right">
          <label className="search">
            <Search size={17} />

            <input
              aria-label="Search products"
              placeholder="Search pieces..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>

          <button className="icon-btn" aria-label="Shopping bag">
            <ShoppingBag />
          </button>
        </div>
      </nav>
    </header>
  );
}