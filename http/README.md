# HTTP - Hypertext Transfer Protocol

HTTP was invented by Tim Berners-Lee in 1989. <br>
HTTP is a protocol that transfers resources like html files. In other words, HTTP
is a communication tool between clients and servers.

## HTTP Request

1. GET: request to get resources - server responds to the request
2. POST: adding data to the servers or database
3. PUT: update existing data with new information
4. DELETE: delete a piece of data in the back-end or database

## HTTP Response

- 1XX: Information
- 2XX: Successful (ex. 200 OK)
- 3XX: Redirection
- 4XX: Client Error (ex. 404 Not Found)
- 5XX: Server Error

Check the HTTP information in (Inspect > Network)

https://www.facebook.com
Essentially means use http in www to request Facebook domain.

## Sending data to server

1. Query strings (GET)
    - Series of key = value after ? in a URL
    - Can view query string parameters in Inspect > Network
2. Body of Request (POST)
    - No query string at the end of URL
    - Can view Form Data in Inspect > Network

*However* both methods sends the raw data (even password) to the server, which is dangerous.
To address data security, HTTPS (S = secure) was invented to encrypt data before transfer.

Uses either:
- Transport Layer Security (TLS)
- Secure Sockets Layer (SSL)
