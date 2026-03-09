export class TransactionStream {
  async connect() {
    console.log("Connecting to transaction stream");
  }

  async getRecentTransactions() {
    return [
      { type: "swap", status: "failed" },
      { type: "token", status: "dust" },
    ];
  }
}
