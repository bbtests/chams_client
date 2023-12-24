import {
  BarChart as BarChartIcon,
  PaidSharp as PaidSharpIcon,
  People as PeopleIcon,
  SettingsSharp as SettingsSharpIcon,
  WalletRounded as WalletRoundedIcon,
  Logout,
} from "@mui/icons-material";
import routes from "@/lib/routes";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

interface SideBarType {
  label: string;
  link: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
}

const sideBar: SideBarType[] = [
  {
    label: "Overview",
    link: routes.dashboard.overview,
    icon: BarChartIcon,
  },
  {
    label: "Wallet",
    link: routes.dashboard.wallet,
    icon: WalletRoundedIcon,
  },
  {
    label: "Transactions",
    link: routes.dashboard.transactions,
    icon: PaidSharpIcon,
  },
  {
    label: "Referral",
    link: routes.dashboard.referral,
    icon: PeopleIcon,
  },
  {
    label: "Settings",
    link: routes.dashboard.settings,
    icon: SettingsSharpIcon,
  },
  {
    label: "Log Out",
    link: routes.auth.logout,
    icon: Logout,
  },
];

export default sideBar;
