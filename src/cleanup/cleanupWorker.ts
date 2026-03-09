import { WalletEvent } from "../utils/types";
import { runCleanupRoutine } from "./cleanupRoutines";

export class CleanupWorker {
  async execute(event: WalletEvent) {
    console.log("Executing cleanup:", event.source);

    await runCleanupRoutine(event.source);
  }
}
