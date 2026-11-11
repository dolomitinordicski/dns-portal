type IconName = 'partner' | 'areas' | 'brand' | 'logos' | 'widget' | 'arrow';

const shapes: Record<IconName, string> = {
  partner: '<path d="m2 9 4-4 4 2 2-1 4-1 6 4-5 6-3-2-2 2-3-3-2 1-5-4Z"/><path d="m9 7 3 3 3-1 4 4M8 13l3 3m3-3 3 2"/>',
  areas: '<path d="m3 20 5-14 5 8 3-5 5 11H3Z"/><path d="M8 6V2m0 1h5l-2 2 2 2H8"/>',
  brand: '<path d="M4 4.5c3-1 5 0 8 2 3-2 5-3 8-2v15c-3-1-5 0-8 2-3-2-5-3-8-2v-15Z"/><path d="M12 6.5v15"/>',
  logos: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="16.5" cy="9" r="1.5"/><path d="m4 18 5-5 3 3 3-3 5 5"/>',
  widget: '<path d="m8 7-5 5 5 5m8-10 5 5-5 5M14 4l-4 16"/>',
  arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
};

export function PortalIcon({ name }: { name: IconName }) {
  return <span className="portal-icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor"
      strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"
      dangerouslySetInnerHTML={{ __html: shapes[name] }} />
  </span>;
}
