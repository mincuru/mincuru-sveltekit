import { writable, type Writable } from 'svelte/store';
import { getContext, setContext } from 'svelte';
import type { Account } from '$lib/model/Account';
type Context = Writable<Account>;

export function setAccount(_account: Account) {
  const account = writable<Account>(_account);
  setContext('account', account);
}

export function getAccount() {
  return getContext<Context>('account');
}
