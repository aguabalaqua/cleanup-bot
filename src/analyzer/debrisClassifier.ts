export function classifyDebris(eventSource: string) {
  const debrisTypes = ["failed_swap", "dust_token", "abandoned_account"];

  return debrisTypes.includes(eventSource);
}
