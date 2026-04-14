import { Link } from 'react-router-dom';

const PricingPlans = [
  {
    name: 'Licencia Base MeatManager',
    price: '$50',
    unit: '/ sucursal',
    desc: 'Habilita MeatManager Web por sucursal y gestión de usuarios con permisos granulados.',
    features: ['Gestión de Clientes', 'Facturación & Comprobantes', 'Control de Stock', 'Cierres de Caja', 'Dashboard de Ventas'],
    popular: true,
  },
  {
    name: 'Módulo Logística & Envíos',
    price: '$25',
    unit: '/ repartidor',
    desc: 'Ideal para optimizar entregas. Incluye acceso a la App Móvil para el repartidor.',
    features: ['Hoja de Ruta Digital', 'Estado de Entregas en Tiempo Real', 'App Móvil de Repartos', 'Mapeo de Rutas', 'Control de Entregas'],
    popular: false,
  },
  {
    name: 'App Gerencial Móvil',
    price: '$30',
    unit: '/ cliente',
    desc: 'Acceso total a indicadores y cajas en tiempo real desde cualquier lugar.',
    features: ['Cajas en Tiempo Real', 'KPIs & Indicadores', 'Ubicación de Repartidores', 'Notificaciones Push', 'Acceso para Administradores'],
    popular: false,
  },
];

export default function Planes() {
  return (
    <main className="new-main-content">
      <section className="new-hero-section" style={{ paddingBottom: '4rem', paddingTop: '10rem' }}>
        <div className="hero-panel reveal" style={{ padding: '0', background: 'none', border: 'none', boxShadow: 'none' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, color: '#fff', marginBottom: '1rem', lineHeight: 1.1 }}>Planes inversores</h1>
          <p style={{ color: 'var(--text-dim)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Escalabilidad garantizada. Escoge el modelo que potencie la etapa actual de tu desarrollo comercial.
          </p>
        </div>
      </section>

      <section className="new-info-section" style={{ position: 'relative', zIndex: 10, paddingTop: '0' }}>
        <div className="pricing-grid">
          {PricingPlans.map((plan, index) => (
            <div key={plan.name} className={`pricing-card glass-panel reveal ${plan.popular ? 'popular' : ''}`} style={{ transitionDelay: `${index * 0.15}s` }}>
              <div className="pricing-tier">{plan.name}</div>
              <div className="pricing-price">{plan.price}<span>{plan.unit}</span></div>
              <div className="pricing-desc">{plan.desc}</div>
              <ul className="pricing-features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to="/contacto" className="modern-btn main-btn" style={{ width: '100%', marginTop: 'auto' }}>
                {plan.name === 'Enterprise' ? 'Contactar ventas' : 'Comenzar prueba'}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
