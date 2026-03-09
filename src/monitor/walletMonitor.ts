import { WalletEvent } from "../utils/types";

export class WalletMonitor {
  async scan(): Promise<WalletEvent[]> {
    console.log("Scanning wallet activity");

    return [
      { type: "wallet_debris", source: "failed_swap" },

      { type: "wallet_debris", source: "dust_token" },
    ];
  }
}
