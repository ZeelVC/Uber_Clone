## User Registration Endpoint

- **Path:** `POST /users/register`
- **Description:** Creates a new user account by storing their name, email, and password, then issues a JWT auth token.

### Request Body

Send JSON with the following structure:

```json
{
  "fullname": {
    "firstname": "string (min 3 chars, required)",
    "lastname": "string (min 3 chars, optional)"
  },
  "email": "string (valid email format, required)",
  "password": "string (min 8 chars, required)"
}
```

### Validation Rules

- `fullname.firstname` must be at least 3 characters.
- `email` must be a valid email address.
- `password` must be at least 8 characters.

Missing or invalid fields return a `400` response with validation error details.

### Responses

- `201 Created`: Returns the newly created user object and a JWT auth token.
- `400 Bad Request`: Request body fails validation.
- `500 Internal Server Error`: Unexpected server error.

### Response Example (`201`)

```json
{
  "token": "jwt-token-string",
  "user": {
    "_id": "object-id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

