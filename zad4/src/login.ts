import { Account} from "./types";

type Options = {
    email: string
    password: string
}

export async function login(options: Options): Promise<Account | null> {
    const users: Account[] = await (await fetch("data/users.json")).json();

    const user = users.find(user => user.email === options.email.toLowerCase());
    return user?.password === options.password
        ? user
        : null;
}