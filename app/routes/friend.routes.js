module.exports = app => {
    const friends = require("../controllers/friend.controller.js");

    var router = require("express").Router();

    // Create a new Friend
    router.post("/", friends.create);

    // Retrieve all friends
    router.get("/", friends.findAll);

    // Retrieve all connected friends
    router.get("/connected", friends.findAllConnected);

    // Retrieve a single friend with id
    router.get("/:id", friends.findOne);

    // Update a friend with id
    router.put("/:id", friends.update);

    // Delete a friend with id
    router.delete("/:id", friends.delete);

    // Create a new friend
    router.delete("/", friends.deleteAll);

    app.use('/api/friends', router);
};