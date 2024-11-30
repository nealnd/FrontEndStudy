import { IconType } from "react-icons";
import { LiaAccusoft } from "react-icons/lia";
import { Im500Px } from "react-icons/im";
import { LiaAdversal } from "react-icons/lia";
import { FaAvianex } from "react-icons/fa";
import { MdCurrencyBitcoin } from "react-icons/md";
import { GrBitcoin } from "react-icons/gr";
import { FaCodiepie } from "react-icons/fa";
import { GiSpeedBoat } from "react-icons/gi";
import { FaGithubSquare } from "react-icons/fa";

export interface LinkItem {
  label: string;
  icon: IconType;
}

export const sublinks = new Map<string, LinkItem[]>([
  [
    "products",
    [
      { label: "community", icon: LiaAccusoft },
      { label: "content", icon: Im500Px },
      { label: "roles", icon: LiaAdversal },
    ],
  ],
  [
    "solutions",
    [
      { label: "developers", icon: FaAvianex },
      { label: "content managers", icon: MdCurrencyBitcoin },
      { label: "business teams", icon: GrBitcoin },
      { label: "ecommerce", icon: FaCodiepie },
    ],
  ],
  [
    "resources",
    [
      { label: "starters", icon: GiSpeedBoat },
      { label: "showcase", icon: FaGithubSquare },
    ],
  ],
]);
