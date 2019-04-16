# REST API

## History

- REST: Representational State Transfer
- Invented by Roy Fielding to maximize the advantages of the web

## Components

- Resource: URI
- Verb: HTTP Method
- Representation

## Features

1. Uniform Interface
    + Manipulation of resources (URI) is uniform
2. Stateless
    + Does not store or manage state information
    + API server only needs to process incoming requests
    + Thus implementation is much simpler
3. Cacheable
    + REST uses HTTP infrastructure so caching functionality is available
    + Caching can be used with tags like `Last-Modified` and `E-tag`
4. Self-descriptiveness
    + API can be understood easily just by looking at the API
5. Client-Server
    + Client and Server both have distinct roles, reducing dependency on one another
    + REST server provides API
    + Client manages user authentication and context like session and login information
6. Hierarchical Structure
    + REST server can support multiple hierarchies
    + Security, load balancing and encryption layers can be added
        + To increase structural flexibility
        + To allow usage of intermediaries like proxy and gateway

## API Design

### REST rules

1. URI must represent information resource, not the verb
```
GET /members/delete/1
```
- Not a REST way of representing a URI
- Verbs should not be included in the URI - only resouce-oriented information

2. Use HTTP methods (GET, POST, PUT, DELETE) as verbs

    + POST: create resource with the URI request
    + GET: view the resource and the information about the document
    + PUT: modify the resource
    + DELETE: delete the resource

REST way of representing the URI above would be:
```
DELETE /members/1
```

### Keep in mind

1. `/` is used to represent hierarchical relationship
```
http://restapi.example.com/animals/mammals/whales
```
2. `/` is not used at the end of URI
```
http://restapi.example.com/houses/apartments/   (x)
http://restapi.example.com/houses/apartments    (o)
```
3. `-` hyphen is used to increase readability
4. `_` underscore is never used
5. URI path is case-sensitive so avoid using capital letters
6. File extensions are not included in URIs
```
http://restapi.example.com/members/soccer/234/photo.jpg     (x)
http://restapi.example.com/members/soccer/234/photo         (o)
```

## Reference

https://meetup.toast.com/posts/92
