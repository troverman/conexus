pragma solidity ^0.4.2;
contract user {

    // users
    struct User {
        bytes32 username;
        address owner;
        bytes32 detailsHash;
        uint joined;
        uint blockNumber;
        mapping(bytes32 => bool) following;
    }

    event NewUser(bytes32 indexed username);
    event Follow(bytes32 indexed username, bytes32 indexed target, bool follow);

    mapping (bytes32 => User) public usernames; // lookup user by username
    mapping (address => bytes32) public addresses; // lookup username by address

    function registerUsername(bytes32 username) {
        var senderUsername = addresses[msg.sender];
        var user = usernames[senderUsername];
        if (usernames[username].owner != 0) throw; // prevents registration of existing name
        if (user.owner != 0) throw; // prevents registered address from registering another name
        if (!isLowercase(username)) throw; // username must be lowercase
        var newUser = User({
            username: username,
            owner: msg.sender,
            detailsHash: "",
            joined: block.timestamp,
            blockNumber: block.number,
        });
        usernames[username] = newUser;
        addresses[msg.sender] = username;
        NewUser(username);
        points.create(pointsPerAction, msg.sender);
    }

    function updateUserDetails(bytes32 detailsHash) {
        var senderUsername = addresses[msg.sender]; // lookup registered username for this address
        var user = usernames[senderUsername]; // get user details
        if (user.owner == 0) throw; // user must be registered
        user.detailsHash = detailsHash;
    }

    function follow(bytes32 username) {
        var senderUsername = addresses[msg.sender];
        var user = usernames[senderUsername];
        var target = usernames[username];
        var following = user.following[target.username];
        if (user.owner == 0) throw; // user must be registered
        if (target.owner == 0) throw; // target must be registered
        if (user.username == target.username) throw; // user cannot follow themself
        if (following == true) throw; // user must not have followed target already
        user.following[target.username] = true;
        Follow(user.username, target.username, true);
    }

    function unfollow(bytes32 username) {
        var senderUsername = addresses[msg.sender];
        var user = usernames[senderUsername];
        var target = usernames[username];
        var following = user.following[target.username];
        if (user.owner == 0) throw; // user must be registered
        if (target.owner == 0) throw; // target must be registered
        if (user.username == target.username) throw; // user cannot follow themself
        if (following == false) throw; // user must be following target
        user.following[target.username] = false;
        Follow(user.username, target.username, false);
    }



}