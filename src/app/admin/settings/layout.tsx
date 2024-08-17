import Settings from "@/components/pages/settings";
import { ReactNode } from "react";

const SettingLayout = ({ children }: { children: ReactNode; }) => {
  return (
    <Settings>
      {children}
    </Settings>
  );
};

export default SettingLayout;