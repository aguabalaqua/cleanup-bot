# Agent Flow

Cleanup Bot operates using a simple autonomous execution loop.

The agent performs three core steps:

1. Monitor wallet activity
2. Detect transactional debris
3. Execute cleanup routines

---

## Execution Loop

Wallet Monitor → Debris Detection → Cleanup Worker

---

## Monitoring

Wallet activity is scanned through the transaction stream.

Detected artifacts may include:

- failed swaps
- dust tokens
- abandoned token accounts

---

## Cleanup

Once debris is identified, cleanup routines are executed automatically.