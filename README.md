# Restful Routing
Lecture on restful routing.

# Objectivs
Students will be able to...

- Understand the key concepts behind restful routing
- Apply different routes for different actions with different http verbs
- Explore the limits of restful routing in plain HTML

# Link
For now, we structured routes as we pleased. There is a convention called "Restful Routing" that is widely spread and most commonly used for web development. It is recommended because of its clean syntax and widespread use. From now on, we will design routes following this design pattern.

# Educate & Engage
"REST" stands for "Representational State Transfer". Without getting into too much detail, it basically means that your routes and HTTP verbs should compliment each other in a meaningful way.

## How To Design Routes
Routes are usually used to display resources. Resources are normally just the same as a database table.

For example, let's say we have a users table in our database. That means whenever we want to display something to the client about the users, we are dealing with a resource that is called "users".

Routes are to be designed using the plural name of the resource.

Example routes to show, edit, update, delete, create a single user and to list all users:

ACTION - ROUTE - HTTP VERB
show - /users/1 - GET
edit - /users/1/edit - GET
update - /users/1 - PATCH
delete - /users/1 - DELETE
create - /users - POST
list (index) - /users - GET

Note that the first four that cover a single instance of the resource all contain an id (1) to refer to that specific instance. The last two do not refer to a specific instance, but simply to the resource in general.

# Active Learning
We will program an address book together (see solution branch in this repo).

# Reflect
Restful routing is the best design pattern for meaningful routes.

# Now and Then
We will use restful routing whenever we design routes from here on out.
