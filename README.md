# prog-5-d5

![system-architecture-diagram](https://github.com/user-attachments/assets/587eb442-6cb0-4059-a655-8332786e7a5c)

## Architecture Overview
**User**: request for a coffee

**Controller**: Receives input from the user and sends it to the service

**CoffeeMachineService**: Business logic that manage payment, flavor and brewing

**Payment**: Validates payment

**Flavor Check**: Confirms if the selected coffee flavor is available.

**Brewer**: Make or provide the coffee.

## Use Case: Get a Coffee
- The user selects a coffee flavor and pays.

- The controller sends the request to the service.

- The service checks the payment.

- If successful, it checks if the flavor is available.

- If available, the brewer makes and serves the coffee.

- Otherwise, the user is informed of the issue.
