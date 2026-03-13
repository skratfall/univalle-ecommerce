import { useEffect, useState } from 'react';
import { Product } from '../types/Product';
import { CatalogService } from '../services/CatalogService';

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await CatalogService.getProducts();
        setProducts(data);
      } catch (err) {
        setError('Error al cargar productos');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div style={{ textAlign: 'center', padding: '2rem' }}>Cargando productos...</div>;
  if (error) return <div style={{ textAlign: 'center', padding: '2rem', color: 'red' }}>Error: {error}</div>;

  return (
    <div>
      <h2>Catálogo de Productos</h2>
      {products.length === 0 ? (
        <p style={{ textAlign: 'center', padding: '2rem' }}>No hay productos disponibles</p>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1rem',
          marginTop: '1rem'
        }}>
          {products.map((product) => (
            <div key={product.id} style={{
              border: '1px solid #ddd',
              padding: '1rem',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              backgroundColor: 'white'
            }}>
              <h3 style={{ marginTop: 0, color: '#333' }}>{product.name}</h3>
              <p style={{ color: '#666', marginBottom: '0.5rem' }}>{product.description}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 'bold', color: '#007bff' }}>${product.price}</span>
                <span style={{ fontSize: '0.9em', color: '#666' }}>Stock: {product.stock}</span>
              </div>
              <p style={{ fontSize: '0.9em', color: '#888', marginTop: '0.5rem' }}>
                Categoría: {product.category}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;