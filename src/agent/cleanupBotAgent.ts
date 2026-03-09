import { AgentLoop } from "./agentLoop";
import { WalletMonitor } from "../monitor/walletMonitor";
import { CleanupWorker } from "../cleanup/cleanupWorker";

export class CleanupBotAgent {
  private loop: AgentLoop;
  private monitor: WalletMonitor;
  private cleanup: CleanupWorker;

  constructor() {
    this.monitor = new WalletMonitor();
    this.cleanup = new CleanupWorker();

    this.loop = new AgentLoop(this.monitor, this.cleanup);
  }

  async start() {
    console.log("Cleanup Bot agent online");

    await this.loop.run();
  }
}
