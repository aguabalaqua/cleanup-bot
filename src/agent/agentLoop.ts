import { WalletMonitor } from "../monitor/walletMonitor";
import { CleanupWorker } from "../cleanup/cleanupWorker";
import { classifyDebris } from "../analyzer/debrisClassifier";
import { WalletEvent } from "../utils/types";

export class AgentLoop {
  constructor(
    private monitor: WalletMonitor,
    private cleanup: CleanupWorker,
  ) {}

  async run() {
    console.log("Starting monitoring pipeline");

    const events: WalletEvent[] = await this.monitor.scan();

    for (const event of events) {
      const isDebris = classifyDebris(event.source);

      if (isDebris) {
        console.log("Debris detected:", event.source);

        await this.cleanup.execute(event);
      } else {
        console.log("Ignoring non-debris event:", event.source);
      }
    }
  }
}
