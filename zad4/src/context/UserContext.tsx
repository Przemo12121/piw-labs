import { createContext } from "react";
import { Account } from "../types";

const UserContext = createContext<Account | null>(null)

export default UserContext