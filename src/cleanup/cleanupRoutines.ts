export async function runCleanupRoutine(source: string) {
  console.log("Running cleanup routine for:", source);

  await new Promise((resolve) => setTimeout(resolve, 500));
}
