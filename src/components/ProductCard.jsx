import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function ProductCard({ product, index }) {
  return (
    <motion.article
      className="product-card"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
    >
      <div className="product-image">
        <img
          loading="lazy"
          src={product.image}
          alt={product.name}
        />

        {product.tag && (
          <span className="tag">{product.tag}</span>
        )}

        <button
          className="quick-view"
          aria-label={`View ${product.name}`}
        >
          <ArrowUpRight size={18} />
        </button>
      </div>

      <div className="product-info">
        <div>
          <h3>{product.name}</h3>
          <p>{product.category}</p>
        </div>

        <span className="price">${product.price}</span>
      </div>
    </motion.article>
  );
}