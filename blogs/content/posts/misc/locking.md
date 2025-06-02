---
author: "Sadat Sayem"
title: "Understanding Locking: Pessimistic and Optimistic Approaches"
date: "2024-03-11"
description: "Two primary approaches to locking are pessimistic and optimistic locking"
tags: ["Locking", "Database"]
categories: ["Database"]
series: ["Locking"]
aliases: ["locking", "database"]
cover:
  image: images/locking.png
  caption: "Locking"
ShowToc: true
TocOpen: true
---


In the world of concurrent programming and database management, locking mechanisms are crucial to ensure data consistency and integrity. Two primary approaches to locking are pessimistic and optimistic locking. Each has its own use cases, advantages, and disadvantages. In this blog post we will understand of these two approaches, along with the real-world examples and an introduction to the Compare-and-Swap (CAS) mechanism.

## Pessimistic Locking

Pessimistic locking is a strategy where a resource is locked as soon as a transaction starts and remains locked until the transaction is completed. It has been called “pessimistic” because of the assumption that conflicts between concurrent transactions do occur frequently.

### How It Works

-   **Lock Acquisition:** If a transaction needs to read or write to certain resources, then it first acquires a lock on those resources.
-   **Exclusive access:** No other transaction can access the resource under lock until it is released.
-   **Lock Release:** The lock is released when the transaction is complete, whether through commit or rollback.

### Real-World Example

Let’s think about a banking system where users can transfer their money form accounts. If two users try to transfer money from the same account simultaneously, it could lead to inconsistencies. In this situation the pessimistic locking plays the vital role to save from inconsistencies.

```sql
BEGIN TRANSACTION;
SELECT balance FROM accounts WHERE account_id = 12345 FOR UPDATE;
-- Perform transfer operations
UPDATE accounts SET balance = balance - 100 WHERE account_id = 12345;
COMMIT;
```

In this example, the `FOR UPDATE` clause locks the account record, preventing other transactions from modifying it until the current transaction is complete.

### Advantages

-   **Data Integrity:** Ensures that no other transaction can modify the resource while it is being processed, thus maintaining data integrity.
-   **Simplicity:** Easier to implement and understand, especially in systems where conflicts are frequent.

### Disadvantages

-   **Performance Overhead:** Can lead to significant performance bottlenecks, especially in high-concurrency environments.
-   **Deadlocks:** Increased risk of deadlocks, where two or more transactions are waiting indefinitely for each other to release locks.

---

## Optimistic Locking

On the other hand, Optimistic locking use to minimize conflicts that can occur when multiple transactions try to access and modify the same data simultaneously. It’s based on the assumption that conflicts are rare, and therefore, it avoids the overhead of pessimistic locking, which involves acquiring exclusive locks on data before accessing it.

### How It Works

-   **Read:** A transaction reads the data it needs to modify.
-   **Version:** A version stamp or timestamp is associated with the data to track its state.
-   **Update:** The transaction modifies the data as needed.
-   **Write:** When the transaction is ready to commit, it checks the current version stamp of the data against the version stamp it read at the beginning.
-   **Conflict Detection:** If the version stamps match, the transaction can commit the changes. If they don’t match, it means that the data has been modified by another transaction since the original read, and a conflict has occurred.
-   **Conflict Resolution:** In case of a conflict, the transaction can read the data again and **retry** the update or it can **abort** the transaction and inform the user about the conflict.

### Real-World Example

Consider an e-commerce platform where multiple users can update product inventory. With optimistic locking, each product record has a version number. When a user updates the inventory, the system checks the version number before committing:

```sql
BEGIN TRANSACTION;
SELECT version, stock FROM products WHERE product_id = 98765;
-- Perform inventory update
UPDATE products SET stock = stock - 1, version = version + 1 WHERE product_id = 98765 AND version = 1;
COMMIT;
```

If the version number has changed since the initial read, the update fails, and the transaction is retried.

### Advantages

-   **Performance:** Better performance in high-concurrency environments as it reduces the time resources are locked.
-   **Scalability:** More scalable as it allows multiple transactions to proceed without waiting for locks.
-   **Implementation:** It’s generally easier to implement than pessimistic locking.

### Disadvantages

-   **Complexity:** More complex to implement and manage, especially in systems with frequent conflicts.
-   **Retry Overhead:** Transactions may need to be retried multiple times, leading to increased overhead.

---

## Compare-and-Swap (CAS) Mechanism

Compare-and-Swap (CAS) is a hardware-level atomic instruction used for efficient synchronization in multi-threaded programming to avoid locking algorithm.

### How It Works

-   **Read:** The CAS operation reads the current value of a variable.
-   **Compare:** It compares the read value with an expected value that provided.
-   **Swap:** If the read value matches the expected value, the CAS instruction atomically updates with the new value. If the values don’t match, the CAS instruction fails without modifying.

### Real-World Example

In Go, CAS can be implemented using the `sync/atomic` package.

```go
package main

import (
    "fmt"
    "sync"
    "sync/atomic"
)

func main() {
    var counter atomic.Int32
    counter.Store(0)
    wg := sync.WaitGroup{}
    wg.Add(100)
    increment := func() {
        oldValue, newValue := counter.Load(), counter.Load()+1
        swapped := counter.CompareAndSwap(oldValue, newValue)
        if !swapped {
            fmt.Println("Failed to swap")
        }
        wg.Done()
    }

    for i := 0; i < 100; i++ {
        go increment()
    }
    wg.Wait()
    fmt.Println(counter.Load())
}
```

In this example, `CompareAndSwap` ensures that the increment operation is performed atomically.

### Advantages of CAS

-   **Higher Performance:** CAS is non-blocking by nature operation, which lead to better performance in high concurrent situation.
-   **Lower Overhead:** CAS doesn’t require the overhead of context switch and thread scheduling, which can be significant to some extent.

### Disadvantages of CAS

-   **Complexity:** CAS implementation can be more complex than traditional locking, and it’s true when it comes to understanding the implementation in some cases.
-   **Potential for Busy Waiting:** If CAS operations fail frequently, it can lead to busy waiting, where threads continuously retry the operation until they succeed.

---

## Choosing the Right Approach

The choice between pessimistic locking, optimistic locking, and CAS depends on the specific requirements and characteristics of your system:

-   **High Conflict:** If your system experiences high contention for resources, pessimistic locking may be more suitable to ensure data integrity.
-   **Low Contention:** In systems with low contention, optimistic locking can provide better performance and scalability.
-   **Complexity vs. Performance:** Consider the trade-off between implementation complexity and performance. Pessimistic locking is simpler but may lead to performance bottlenecks, while optimistic locking and CAS are more complex but can offer better performance in the right scenarios.