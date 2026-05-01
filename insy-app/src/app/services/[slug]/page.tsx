import { notFound } from 'next/navigation';
import Link from 'next/link';
import { services, getServiceBySlug } from '@/lib/services';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-primary text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-accent uppercase tracking-[0.3em] text-sm mb-3">Service IA</p>
            <h1 className="text-5xl font-black mb-4 text-text">{service.name}</h1>
            <p className="max-w-3xl text-muted leading-relaxed">{service.overview}</p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-accent/30 bg-white/5 px-6 py-3 text-accent transition hover:border-accent hover:bg-accent/10"
          >
            Retour à l’accueil
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.85fr]">
          <div className="space-y-8">
            {service.sections.map((section) => (
              <section key={section.title} className="glass p-8 rounded-[32px] border border-white/10 shadow-[0_30px_80px_-40px_rgba(0,212,255,0.4)]">
                <h2 className="text-3xl font-semibold mb-4 text-text">{section.title}</h2>
                <ul className="space-y-3 text-muted list-disc list-inside">
                  {section.content.map((item) => (
                    <li key={item} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <aside className="space-y-6">
            <div className="glass p-8 rounded-[32px] border border-white/10 shadow-[0_30px_80px_-40px_rgba(0,212,255,0.3)]">
              <p className="text-sm uppercase tracking-[0.3em] text-accent/90 mb-4">Résumé du service</p>
              <p className="text-muted leading-relaxed">{service.description}</p>
            </div>

            <div className="glass p-8 rounded-[32px] border border-white/10 shadow-[0_30px_80px_-40px_rgba(0,212,255,0.3)]">
              <h3 className="text-xl font-semibold text-text mb-3">Pourquoi choisir IN'SY ?</h3>
              <ul className="space-y-3 text-muted list-disc list-inside">
                <li>Approche métier & IA alignée avec vos enjeux.</li>
                <li>Accompagnement de la stratégie jusqu’à l’exécution.</li>
                <li>Solutions conçues pour la réalité opérationnelle algérienne.</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
