import { Account } from '../types';

const accountKey = "account";

export function useLocalStorage() {
    return {
        save: (account: Account) => {
            localStorage.setItem(accountKey, JSON.stringify(account));
        },
        read: () => {
            const acc = localStorage.getItem(accountKey);
            return acc ? JSON.parse(acc) : null;
        },
        clear: () => {
            localStorage.removeItem(accountKey);
        }
    }
}