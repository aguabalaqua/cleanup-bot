import { WalletEvent } from "../utils/types";
import { TransactionStream } from "./transactionStream";

export class WalletMonitor {
  private stream = new TransactionStream();

  async scan(): Promise<WalletEvent[]> {
    await this.stream.connect();

    console.log("Scanning wallet activity");

    return [
      { type: "wallet_debris", source: "failed_swap" },
      { type: "wallet_debris", source: "dust_token" },
    ];
  }
}
