import "next-auth";
import type { User } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: User;
    token?: string;
  }

  interface User {
    id: string;
    name: string;
    email: string;
    email_verified_at: string;
  }
}
