Simple Wallet core using some tech and lang for testing performance

# Feature:

- user: balance, info
- transaction: type, amount, fee, status (init, processing, fail, success), note, from_id, target_id, balance (before, after transfer)
  - deposit
  - transfer
- history: help tracker balance change

# Language

https://codebase.show/projects/realworld?category=backend

- node:
  - fw Nestjs
- golang:
  - fw Gin: https://gin-gonic.com/#td-block-1
  - ...
- rust:
  - fw Rocket: https://github.com/SergioBenitez/Rocket
