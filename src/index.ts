import { CleanupBotAgent } from "./agent/cleanupBotAgent";

async function main() {
  console.log("Starting Cleanup Bot...");

  const agent = new CleanupBotAgent();

  await agent.start();
}

main();
