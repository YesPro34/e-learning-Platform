import {
  IconHome, IconLayoutGrid,  
  IconServer,
  IconDeviceDesktop,
  IconDatabase,
  IconDeviceMobile,
  IconCode,
  IconBrain,
  IconSettingsAutomation,
  IconChartBar
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconHome,
    href: "/",
  },
  {
    id: uniqueId(),
    title: "Programming Languages",
    icon: IconCode,
    href: "/ui-components/programming-language",
  },
  {
    id: uniqueId(),
    title: "Front End",
    icon: IconDeviceDesktop,
    href: "/ui-components/frontend",
  },
  {
    id: uniqueId(),
    title: "Back End",
    icon: IconServer,
    href: "/ui-components/back-end",
  },
  {
    id: uniqueId(),
    title: "Databases",
    icon: IconDatabase,
    href: "/ui-components/database",
  },
  {
    id: uniqueId(),
    title: "Mobile Developement",
    icon: IconDeviceMobile,
    href: "/ui-components/mobile",
  },
  ,
  {
    id: uniqueId(),
    title: "AI",
    icon: IconBrain,
    href: "/ui-components/ai",
  },
  ,
  {
    id: uniqueId(),
    title: "Data Engineering",
    icon: IconSettingsAutomation,
    href: "/ui-components/data-engineering",
  },
  ,
  {
    id: uniqueId(),
    title: "Buiseness Intelligence",
    icon: IconChartBar,
    href: "/ui-components/bi",
  },
];

export default Menuitems;
