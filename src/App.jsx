import catalog from './data/IMS_Chile_Inventario_Impresoras.json';

const formatter = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
  maximumFractionDigits: 0,
});

const productEntries = Object.entries(catalog);

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">IMS CHILE</p>
          <h1>Inventario de impresoras</h1>
        </div>
        <div className="badge">{productEntries.length} modelos</div>
      </header>

      <main className="catalog-grid">
        {productEntries.map(([key, product]) => (
          <article key={key} className="card">
            <img src={product.mainImage} alt={`${product.brand} ${product.model}`} className="product-image" />

            <div className="card-body">
              <div className="brand-row">
                <span className="brand-tag">{product.brand}</span>
                <span className="category">{product.category}</span>
              </div>

              <h2>{product.model}</h2>

              <div className="stats-grid">
                <div>
                  <label>Velocidad</label>
                  <strong>{product.speed}</strong>
                </div>
                <div>
                  <label>Tecnología</label>
                  <strong>{product.tech}</strong>
                </div>
                <div>
                  <label>Capacidad</label>
                  <strong>{product.capacity}</strong>
                </div>
                <div>
                  <label>Precio</label>
                  <strong>{formatter.format(product.price)}</strong>
                </div>
              </div>

              <p className="description">{product.description}</p>

              {product.carouselPanel.length > 0 && (
                <div className="feature-block">
                  <h3>Panel</h3>
                  <ul>
                    {product.carouselPanel.map((item, index) => (
                      <li key={`${key}-panel-${index}`}>{item.caption}</li>
                    ))}
                  </ul>
                </div>
              )}

              {product.carouselModules.length > 0 && (
                <div className="feature-block">
                  <h3>Módulos</h3>
                  <ul>
                    {product.carouselModules.map((item, index) => (
                      <li key={`${key}-module-${index}`}>{item.caption}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}

export default App;
