const api = process.env.NEXT_PUBLIC_API;

const routes = {
  home: "/",
  view: "/view",
  auth: {
    login: "/auth/login",
    logout: "/api/auth/logout",
    signup: "/auth/signup",
  },
  dashboard: {
    overview: "/dashboard",
    referral: "/dashboard/referral",
    investment: "/dashboard/investment",
    wallet: "/dashboard/wallet",
    settings: "/dashboard/settings",
    transactions: "/dashboard/transactions",
  },
  api: {
    baseURL: api,
    auth: {
      login: `${api}/auth/login`,
      signup: `${api}/auth/signup`,
    },
  },
};

export default routes;
