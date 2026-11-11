import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Public web-app identifiers only; no private credentials or elevated access.
// If not configured, the creator remains usable for styling/code generation,
// while published data are explicitly marked unavailable.
const config = {
  apiKey: import.meta.env.VITE_DNS_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_DNS_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_DNS_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_DNS_FIREBASE_APP_ID,
};
const enabled = config.projectId === 'dns-core' &&
  Boolean(config.apiKey && config.authDomain && config.appId);
const app = enabled ? (getApps().find(value => value.name === 'dns-portal-widget') ??
  initializeApp(config, 'dns-portal-widget')) : null;
export const db = app ? getFirestore(app) : null;
