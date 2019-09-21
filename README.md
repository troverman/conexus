
![conexus](https://www.conex.us/images/hypercube.new.gif "conex.us")
# CRE8
> ### [Developers](https://www.cre8.xyz/developers)
> ### [How to Contribute](wiki/HowToContribute.md)


## A Transparent Peer Network 

 ###  [Connect Collab Create](https://www.cre8.xyz/transparency)

> State of the Art Multidimensional, and Pluralist First Peer Build Mechanism. [Build](https://www.cre8.xyz/register) your custom peer. All Models, Views, and Controllers compile to native and .wasm bindings from an onChain [App Ecosystem](https://www.cre8.xyz/apps) . 
> 

 > - The network is supported though Human and Machine Attention. Agent Centric, Context Specific Consensus and Interoperable Validation. 
> - Proof of Attention. Proof of Intention. Reputation Weighted Governance.


## Asset Balance Mapping
> Multidimensional Asset data-structures with balances specified by unique identifiers create emergent properties within cryptoeconomic systems that introduce valuable approaches to mechanism design.

## [Applications Design](https://www.cre8.xyz/apps)
> Applications are a set of modular protocols which plug into an asset string space. Application creation and collaboration is facilitated though projects.

```javascript
{
    //CORE DATA
    string:"New Protocol",

    //DEFINE DATA MODEL
    dataModels: [
        {
            title: 'Protocol',
            attributes:{
                title: {type:'string'},
                permissions: {type:'json'},
                logic: {type:'json'},
            }
        }
    ],

    //DEFINE ASSOCIATIONS / IMPORTS
    associations:[
        {id:1, title:'STRUCTURE', type:'APP'},
        {id:2, title:'LANGUAGE', type:'APP'},
        {id:3, title:'CONGRUENCE', type:'APP'},
        {id:4, title:'MANIFOLD', type:'APP'},
    ],

    //STRUCTURE FUNCTIONS
    get: function(req, res) {},
    create: function (req, res) {
        var newProtocol = req.body;
        if(logic){
            Protocol.create(newProtocol).then((newProtocol)=>{});
        }
    },
    self:function(req, res) {},

    //ASSOCIATED DATA EXPORT
    export:function(req, res) {},

    //ASSOCIATED APP(S) OVERRIDE
    data:{app:{reaction:{plus:function(req,res){}}}},

    //CUSTOM FUNCTIONS
    custom: function (req, res) {console.log('can code plz?')},
    onCall:function(){},
    onMyAction:function(){},

    @decorators
    @isProjectMember
    identityFunction:function(){}

    //FRONTEND; JSX;
    views:{
        templates:{
            nav:{},
            sidebar:{},
            feed:{},
        }
    }
}
```
## [API](https://www.cre8.xyz/developers#API)
> CORE
#### Query Language & Data Model Filters
```javascript
var query = [{
    filter:[{
        model:'Association, Task, Project',
        modelParam:'association, id, location, query, tag, ...',
        query:'query',
        association:{
            population:'boolean',
            depth:'integer',
        },
        params:{
            limit:'integer',
            skip:'integer',
            sort:'modelParam sortParam',
        },
        chain:'logic [\'AND\',\'OR\']',
    }],
    params:{
        limit:'integer',
        skip:'integer',
        sort:'modelParam sortParam',
    },
    chain:'logic [\'AND\',\'OR\']'
}]
```
