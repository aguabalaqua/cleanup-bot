import { WalletMonitor } from "../monitor/walletMonitor";
import { CleanupWorker } from "../cleanup/cleanupWorker";

export class AgentLoop {
  constructor(
    private monitor: WalletMonitor,
    private cleanup: CleanupWorker,
  ) {}

  async run() {
    const events = await this.monitor.scan();

    for (const event of events) {
      if (event.type === "wallet_debris") {
        await this.cleanup.execute(event);
      }
    }
  }
}
