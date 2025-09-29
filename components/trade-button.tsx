import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

export const TradeButton = () => {
  return (
    <Button asChild>
      <a
        href="https://dydx.trade/?utm_source=dydx-buy-and-stake-dashboard"
        target="_blank"
        rel="noreferrer"
        className="cursor-pointer"
      >
        Trade
        <ExternalLink className="w-4 h-4" />
      </a>
    </Button>
  );
};
