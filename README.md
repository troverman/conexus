![conexus](https://www.conex.us/images/conexus-black.png "conex.us")
# Conexus
## [Wiki](wiki)
## Create A Transparent Network | Connect Collab Create
## CRE8coin
### Peer Setup Procedure
```
// in "/path/to/folder" copy https://pastebin.com/JfQtY8hw as geneis.json 
geth --datadir="/path/to/folder" init genesis.json
geth --datadir="/path/to/folder" --networkid="88888888" console
admin.addPeer("enode://4c9ec1b929cb995a9fb174968c4fed4627cecdecfdde080af6a8fdbf9600062fbafc79ef4d92b3617b9e8d7b49bb1255e7066a27923f48ce81cfead8a61063f7@54.212.193.239:30302")
admin //to see if peers connected
miner.start(1)
```
[download](https://peer.cre8.xyz)

## ERC-888
[gist](https://gist.github.com/troverman/809dba32d8510e7713aaa5c869e607ae) | [EIP](https://github.com/ethereum/EIPs/issues/888)
> Token data-structures with balances specified by unique identifiers create emergent properties within cryptoeconomic systems that introduce valuable approaches to mechanism design and contract development.
```
contract MultidimensionalToken {
    mapping (address => mapping (string => uint)) balances;
    event Transfer(address indexed _from, address indexed _to, string indexed _id, uint256 _value);
    
    function balanceOf(address _owner, string _id) constant returns (uint256 balance) {
        return balances[_owner][_id];
    }

    function transfer(address _to, string _id, uint256 _value) returns (bool success) {
        if (balances[msg.sender][_id] >= _value && _value > 0) {
            balances[msg.sender][_id] -= _value;
            balances[_to][_id] += _value;
            Transfer(msg.sender, _to, _id, _value);
            return true;
        } 
        else {return false;}
    }
}
```

## Governance Protocol
[gist](https://gist.github.com/troverman/809dba32d8510e7713aaa5c869e607ae)
> Governance Protocol

```
contract Governance {
    
}
```

## API
### Filters
> Every endpoint can be filtered by each model param: {DESC, ASC}
```javascript
//req.params.query
var query = {
    limit: 10,
    skip: 10,
    sort: 'createdAt DESC', // modelParam | {'DESC', 'ASC'}
    filter:{
    	obj: param
    }
};
```

### Models | Endpoints

#### Assoication
> This is the Association Model
```javascript
var associationModel = {

};
```
##### get /api/assoication
##### post /api/assoication

#### Content
> This is the Content Model
```javascript
var contentModel = {

};
```
##### get /api/content
##### post /api/content

#### Follower
> This is the Follower Model
```javascript
var followerModel = {

};
```
##### get /api/follower
##### post /api/follower

#### Item
> This is the Item Model
```javascript
var itemModel = {

};
```
##### get /api/item
##### post /api/item

#### Location
> This is the Location Model
```javascript
var location = {

};
```
##### get /api/location
##### post /api/location

#### Member
> This is the Member Model
```javascript
var memberModel = {
    avatarUrl: string,
    createdAt: dateObj,
    email: string,
    id: idObj,
    passports: [passpostObj]
    title: string,
    username: string,
    walletAddress: string,
};
```
##### get /api/member
##### post /api/member

#### Item
> This is the Notification Model
```javascript
var notificationModel = {

};
```
##### get /api/notification

#### Order
> This is the Order Model
```javascript
var orderModel = {

};
```
##### get /api/order
##### post /api/order

#### Passport
> This is the Passport Model
```javascript
var passportModel = {

};
```
##### get /api/passport
##### post /api/passport

#### Project
> This is the Project Model
```javascript
var projectModel = {

};
```
##### get /api/project
##### post /api/project

#### ProjectMember
> This is the ProjectMember Model
```javascript
var projectMemberModel = {

};
```
##### get /api/projectmember
##### post /api/projectmember

#### Reaction
> This is the Reaction Model
```javascript
var reactionModel = {

};
```
##### get /api/reaction
##### post /api/reaction

#### Task
> This is the Task Model
```javascript
var taskModel = {

};
```
##### get /api/task
##### post /api/task

#### Time
> This is the Time Model
```javascript
var timeModel = {
    task: taskObj,
    id: idObj,
    time: integer,
    user: userObj,
};
```
##### get /api/time
##### post /api/time

#### Token
> This is the Token Model
```javascript
var tokenModel = {

};
```
##### get /api/token
##### post /api/token

#### Transaction
> This is the Transaction Model
```javascript
var transactionModel = {

};
```
##### get /api/transaction
##### post /api/transaction

#### Validation
> This is the Validation Model
```javascript
var validationModel = {

};
```
##### get /api/validation
##### post /api/validation

#### View
> This is the View Model -- DEPRECIATE -- TIME
```javascript
var viewModel = {

};
```
##### get /api/view
##### post /api/view