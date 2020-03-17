
![conexus](https://www.conex.us/images/hypercube.new.gif "conex.us")
# CRE8
> ### [Developers](https://www.cre8.xyz/developers)
> ### [How to Contribute](wiki/HowToContribute.md)


## A Transparent Peer Network 

### [Connect Collab Create](https://www.cre8.xyz/transparency)

> State of the Art Multidimensional, and Pluralist First Peer Build Mechanism. [Build](https://www.cre8.xyz/register) your custom peer. All Models, Views, and Controllers compile to native and .wasm bindings from an onChain [Application Ecosystem](https://www.cre8.xyz/apps) . 

> - The network is supported though Human and Machine Attention. Agent Centric, Context Specific Consensus and Interoperable Validation. 
> - Proof of Attention. Proof of Intention. Governance as Data Connection Protocols. Democratic & Reputation Weighted Governance.

## Asset Balance Mapping
> Multidimensional Asset data-structures with balances specified by string identifiers create emergent properties within cryptoeconomic systems that introduce valuable approaches to mechanism design. Hashed Data String Assets are Emergent economic systems.

## [Application Design](https://www.cre8.xyz/apps)
> Applications are a set of modular protocols which plug into an asset string space. Application creation and collaboration is facilitated though [projects](https://www.cre8.xyz/projects).

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
        type:'Association, Task, Project',
        parameter:'association, id, location, query, tag, ...',
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

#### Meta Model and function compostion in General Application Design
> Function Meta Model
```javascript
var metaModel = {
    input:{},
    output:{
        [outputType]:{}
    }
}
```

> Function Composition
> The Functional Graph Combinatorial
```javascript
var combinatorialFunctionSet = [
    {
        type:'FIRST+FUNCTION+NAME+SPACE',
        parameters:{
            input:{someInputParameter:'Function Parameter String'},
            output:{someDynamicObjectOutput:true}
        }
    },
    {
        type:'SENOND+FUNCTION+NAME+SPACE',
        parameters:{
            input:{someStaticStringInput:'icomposeyou', someDynamicObjectInput:true},
            output:{forwardProgress:true},
        }
    },
    {
        type: function dynamicInlineTyping(model){
            if typeof(model.input.type == 'function'){model.output = eval(model.type);}
            else{
                //PROCESS BY .. SOME APP
            }
            return model.output;
        },
        parameters:{
            input:{
                type: function creativeInlineChainingForYourPotiental(model){
                    const metaData = {
                        title: 'functionTitle',
                        description: 'This is a description of the inline dynmaic type // conneciton',
                        context:{
                            keys: 'and values,',
                            'strings_map_to_integers_as_context_weight':100,
                        }
                    }
                    if (model.input.forwardProgress){
                        model.nestedCoCreation = 'ready to create?'
                    }
                    return 'breathe :: this is for stamina and life :: drink water, it is you :: ' + nestedCoCreation;
                },
                forwardProgress: true,
                nestedCoCreation: 'dynamicMovement'
            },
            output:true,
        }
    }
];

//obj of n keys ? 
var compostionModel = {
    input: combinatorialFunctionSet,
    output: combinatorialFunctionSet[combinatorialFunctionSet.lenth - 1].parameters.output //last output type in composition::
};

function sequentialCompositionProcessor(model){
    var initializedComposition, someOutput = null;
    for (x in model.input){
        //language execution envir is abstact --> || FOR DYNAMIC NEED TO PROPERY WRAP META VARIABLES AS IN LANG :: REDUCE TO LANGE INTEROP IN THE STRING EVENTUALLY IE PEER + PYTHON + .. + FXN TYPE

        //UNSING APPLICATION FOR THIS PROCESS :: ACTIVITY APP IN PROD HAS LANG IMPORTS
        if(x >= 1){
            if (!initializedComposition){someOutput = activityApp['PROCESS'](model.input[x-1]);}
            if (initializedComposition){someOutput = activityApp['PROCESS'](initializedComposition);}
            initializedComposition = activityApp['PROCESS'](someOutput);
        }
    }
    return model.output;
};

sequentialCompositionProcessor(compostionModel);
```
