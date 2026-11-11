import type { Language } from '../content/translations';
import { HeroSection } from '../components/HeroSection';
import { AccessCards } from '../components/AccessCards';
import { PublicResources } from '../components/PublicResources';

export function PortalHome({ language, onOpenWidget }: { language: Language; onOpenWidget: () => void }) {
  return <main className="main" data-dns-shell-main="">
    <HeroSection language={language} />
    <AccessCards language={language} />
    <PublicResources language={language} onOpenWidget={onOpenWidget} />
  </main>;
}
