## Interoperable Token Strucutre
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

