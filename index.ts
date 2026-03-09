import { CleanupBot } from "./agent/cleanupBot"

async function main() {
  const agent = new CleanupBotAgent()

  console.log("Cleanup Bot starting...")

  await agent.run()
}

main()
