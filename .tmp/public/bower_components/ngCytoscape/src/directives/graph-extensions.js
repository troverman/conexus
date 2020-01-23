(function(){
    'use strict';
    angular
        .module('ngCytoscape')
        .directive('graphExtensions', graphExtensions);
    graphExtensions.$inject = ['cytoGraphDefaults', 'cytoHelpers'];
    function graphExtensions(cytoGraphDefaults, cytoHelpers){
        var directive = {
            restrict: 'A',
            require: '^cytoscape',
            link: function(scope, elem, attrs, cntrlFn){
                var graph = {};
                var isDefined = cytoHelpers.isDefined;
                cntrlFn._getCytoscapeGraph().then(function(cy){
                    graph = cy;
                });
                var _scope = cntrlFn._getCytoscapeScope();
                _scope.$watchCollection(function(){
                    return _scope.graphExtensions;
                }, function(nv,ov){
                    if(nv !== ov){
                        if(graph) {
                            //graph.style(nv);
                            var defaults = cytoGraphDefaults.getDefaults(attrs.id);
                            //if (isDefined(defaults.extensions)) {
                            graph.extensions = nv;
                            angular.forEach(graph.extensions, function(ele, index){
                                cytoHelpers.executeFunctionByName(ele.extension, graph, ele.options);
                            });
                        }
                    }
                },true);
            }
        };
        return directive;
    }
})();