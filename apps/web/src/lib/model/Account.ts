import type { Session } from '@auth/sveltekit';

export interface Account {
  id: number;
  name: string;
  email: string;
  favorites: number[];
  session: Session | null;
}
