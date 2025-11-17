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


## User Login Endpoint

- **Path:** `POST /users/login`
- **Description:** Authenticates an existing user with email and password, then issues a JWT stored in the `token` cookie and returned in the response body.

### Request Body

```json
{
  "email": "john.doe@example.com",
  "password": "plain-text-password"
}
```

### Responses

- `200 OK`: Returns the authenticated user object plus a JWT.
- `400 Bad Request`: Request body fails validation.
- `401 Unauthorized`: Email not found or password mismatch.
- `500 Internal Server Error`: Unexpected server error.

### Response Example (`200`)

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

## User Profile Endpoint

- **Path:** `GET /users/profile`
- **Description:** Returns the authenticated user's profile using the JWT stored in the `token` cookie or `Authorization` header.
- **Auth:** Requires a valid JWT; otherwise returns a `401`.

### Request Headers

- `Cookie: token=<jwt>` or `Authorization: Bearer <jwt>`

### Responses

- `200 OK`: Returns the `req.user` object populated by the auth middleware.
- `401 Unauthorized`: Missing or invalid token.

### Response Example (`200`)

```json
{
  "_id": "object-id",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "socketId": null
}
```

## User Logout Endpoint

- **Path:** `GET /users/logout`
- **Description:** Clears the auth cookie and blacklists the current JWT to prevent reuse.
- **Auth:** Requires a valid JWT; otherwise returns a `401`.

### Responses

- `200 OK`: Cookie cleared and token stored in blacklist.
- `401 Unauthorized`: Missing or invalid token.

### Response Example (`200`)

```json
{
  "message": "Logged Out"
}
```
