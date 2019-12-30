var expect = require('chai').expect;
var cytoscape = require('../src/test.js', cytoscape);

// Expected results (similarities & preference) are generated from the numerical
// example "CLUSTERING TWO-DIMENSIONAL DATA POINTS" found in the Data Sets section
// of http://www.psi.toronto.edu/index.php?q=affinity%20propagation

var data = (
`-2.341500 3.696800
-1.109200 3.111700
-1.566900 1.835100
-2.658500 0.664900
-4.031700 2.845700
-3.081000 2.101100
2.588000 1.781900
3.292300 3.058500
4.031700 1.622300
3.081000 -0.611700
0.264100 0.398900
1.320400 2.207400
0.193700 3.643600
1.954200 -0.505300
1.637300 1.409600
-0.123200 -1.516000
-1.355600 -3.058500
0.017600 -4.016000
1.003500 -3.590400
0.017600 -2.420200
-1.531700 -0.930900
-1.144400 0.505300
0.616200 -1.516000
1.707700 -2.207400
2.095100 3.430900`
);

var sim = (
`001  002  -1.860905
001  003  -4.065932
001  004  -9.292907
001  005  -3.581147
001  006  -3.093119
001  007  -27.966812
001  008  -32.147129
001  009  -44.921228
001  010  -47.966678
001  011  -17.665296
001  012  -15.627824
001  013  -6.430069
001  014  -36.110683
001  015  -21.062133
001  016  -32.094139
001  017  -46.606077
001  018  -65.052637
001  019  -64.292309
001  020  -42.983042
001  021  -22.071383
001  022  -11.618721
001  023  -35.921273
001  024  -51.255598
001  025  -19.754122
002  001  -1.860905
002  003  -1.839197
002  004  -8.387161
002  005  -8.611762
002  006  -4.909308
002  007  -15.437656
002  008  -19.376032
002  009  -28.647165
002  010  -31.421484
002  011  -9.245237
002  012  -6.720715
002  013  -1.980466
002  014  -22.467109
002  015  -10.440407
002  016  -22.387803
002  017  -38.132081
002  018  -52.073786
002  019  -49.381646
002  020  -31.871596
002  021  -16.521121
002  022  -6.794560
002  023  -24.392612
002  024  -36.227750
002  025  -10.369427
003  001  -4.065932
003  002  -1.839197
003  004  -2.560959
003  005  -7.096551
003  006  -2.363255
003  007  -17.266024
003  008  -25.108532
003  009  -31.389606
003  010  -27.589805
003  011  -5.415231
003  012  -8.475109
003  013  -6.370385
003  014  -17.875617
003  015  -10.447948
003  016  -13.314141
003  017  -23.991969
003  018  -36.746011
003  019  -36.043006
003  020  -20.618218
003  021  -7.651995
003  022  -1.946874
003  023  -15.995797
003  024  -27.064811
003  025  -15.956822
004  001  -9.292907
004  002  -8.387161
004  003  -2.560959
004  005  -6.641567
004  006  -2.241177
004  007  -28.773451
004  008  -41.141342
004  009  -45.675391
004  010  -34.571568
004  011  -8.612347
004  012  -18.210951
004  013  -17.007699
004  014  -22.646369
004  015  -19.008476
004  016  -11.184071
004  017  -15.561256
004  018  -29.072336
004  019  -31.517822
004  020  -16.679353
004  021  -3.816256
004  022  -2.317971
004  023  -15.479985
004  024  -27.313810
004  025  -30.247469
005  001  -3.581147
005  002  -8.611762
005  003  -7.096551
005  004  -6.641567
005  006  -1.458260
005  007  -44.952099
005  008  -53.686260
005  009  -66.515127
005  010  -62.544116
005  011  -24.440728
005  012  -29.052401
005  013  -18.490650
005  014  -47.060200
005  015  -34.199944
005  016  -34.300799
005  017  -42.021089
005  018  -63.479757
005  019  -66.776622
005  020  -44.126533
005  021  -20.512708
005  022  -13.813973
005  023  -40.627401
005  024  -58.474532
005  025  -37.880137
006  001  -3.093119
006  002  -4.909308
006  003  -2.363255
006  004  -2.241177
006  005  -1.458260
006  007  -32.239450
006  008  -41.535568
006  009  -50.819751
006  010  -45.329528
006  011  -14.087179
006  012  -19.383622
006  013  -13.102966
006  014  -32.146560
006  015  -22.740527
006  016  -21.831993
006  017  -29.598477
006  018  -47.020234
006  019  -49.076312
006  020  -30.043476
006  021  -11.593354
006  022  -6.296997
006  023  -26.752700
006  024  -41.494820
006  025  -28.560379
007  001  -27.966812
007  002  -15.437656
007  003  -17.266024
007  004  -28.773451
007  005  -44.952099
007  006  -32.239450
007  008  -2.125746
007  009  -2.109742
007  010  -5.972370
007  011  -7.313200
007  012  -1.787860
007  013  -9.198599
007  014  -5.632986
007  015  -1.042438
007  016  -18.226750
007  017  -38.981453
007  018  -40.222601
007  019  -31.372248
007  020  -24.264601
007  021  -24.331212
007  022  -15.560517
007  023  -14.764140
007  024  -16.689443
007  025  -2.962151
008  001  -32.147129
008  002  -19.376032
008  003  -25.108532
008  004  -41.141342
008  005  -53.686260
008  006  -41.535568
008  007  -2.125746
008  009  -2.609383
008  010  -13.515016
008  011  -16.243467
008  012  -4.612761
008  013  -9.943664
008  014  -14.491182
008  015  -5.457896
008  016  -32.591691
008  017  -59.020663
008  018  -60.772210
008  019  -49.446477
008  020  -40.739814
008  021  -39.186288
008  022  -26.203137
008  023  -28.087561
008  024  -30.240660
008  025  -1.571970
009  001  -44.921228
009  002  -28.647165
009  003  -31.389606
009  004  -45.675391
009  005  -66.515127
009  006  -50.819751
009  007  -2.109742
009  008  -2.609383
009  010  -5.894586
009  011  -15.691517
009  012  -7.693490
009  013  -18.815898
009  014  -8.842688
009  015  -5.778393
009  016  -27.112121
009  017  -50.932890
009  018  -47.903426
009  019  -36.342237
009  020  -32.454805
009  021  -37.470250
009  022  -28.039700
009  023  -21.514567
009  024  -20.067578
009  025  -7.021454
010  001  -47.966679
010  002  -31.421484
010  003  -27.589805
010  004  -34.571568
010  005  -62.544116
010  006  -45.329528
010  007  -5.972370
010  008  -13.515016
010  009  -5.894586
010  011  -8.956238
010  012  -11.047037
010  013  -26.444079
010  014  -1.280999
010  015  -6.169923
010  016  -11.084656
010  017  -25.670250
010  018  -20.973678
010  019  -13.188660
010  020  -12.655092
010  021  -21.378890
010  022  -19.101694
010  023  -6.892998
010  024  -4.432211
010  025  -17.314614
011  001  -17.665296
011  002  -9.245237
011  003  -5.415231
011  004  -8.612347
011  005  -24.440728
011  006  -14.087179
011  007  -7.313200
011  008  -16.243467
011  009  -15.691517
011  010  -8.956238
011  012  -4.386442
011  013  -10.533034
011  014  -3.674016
011  015  -2.907193
011  016  -3.816843
011  017  -14.577043
011  018  -19.552104
011  019  -16.461227
011  020  -8.008087
011  021  -4.993266
011  022  -1.995193
011  023  -3.790816
011  024  -8.876781
011  025  -12.545585
012  001  -15.627824
012  002  -6.720715
012  003  -8.475109
012  004  -18.210951
012  005  -29.052401
012  006  -19.383622
012  007  -1.787860
012  008  -4.612761
012  009  -7.693490
012  010  -11.047037
012  011  -4.386442
012  013  -3.332123
012  014  -7.760444
012  015  -0.736910
012  016  -15.947689
012  017  -34.890679
012  018  -40.427995
012  019  -33.714910
012  020  -23.111970
012  021  -17.983401
012  022  -8.972383
012  023  -14.359605
012  024  -19.640460
012  025  -2.097112
013  001  -6.430069
013  002  -1.980466
013  003  -6.370385
013  004  -17.007699
013  005  -18.490650
013  006  -13.102966
013  007  -9.198599
013  008  -9.943664
013  009  -18.815898
013  010  -26.444079
013  011  -10.533034
013  012  -3.332123
013  014  -20.312731
013  015  -7.074737
013  016  -26.721898
013  017  -47.318475
013  018  -58.700483
013  019  -52.986532
013  020  -36.800682
013  021  -23.903055
013  022  -11.639438
013  023  -26.799978
013  024  -36.526397
013  025  -3.660563
014  001  -36.110683
014  002  -22.467109
014  003  -17.875617
014  004  -22.646369
014  005  -47.060200
014  006  -32.146560
014  007  -5.632986
014  008  -14.491182
014  009  -8.842688
014  010  -1.280999
014  011  -3.674016
014  012  -7.760444
014  013  -20.312731
014  015  -3.767268
014  016  -5.337105
014  017  -17.473606
014  018  -16.075434
014  019  -10.421672
014  020  -7.417262
014  021  -12.332634
014  022  -10.622634
014  023  -2.811758
014  024  -2.957907
014  025  -15.513523
015  001  -21.062133
015  002  -10.440407
015  003  -10.447948
015  004  -19.008476
015  005  -34.199944
015  006  -22.740527
015  007  -1.042438
015  008  -5.457896
015  009  -5.778393
015  010  -6.169923
015  011  -2.907193
015  012  -0.736910
015  013  -7.074737
015  014  -3.767268
015  016  -11.658496
015  017  -28.921368
015  018  -32.060563
015  019  -25.401702
015  020  -17.290796
015  021  -15.520501
015  022  -8.555613
015  023  -9.601781
015  024  -13.087645
015  025  -4.295235
016  001  -32.094139
016  002  -22.387803
016  003  -13.314141
016  004  -11.184071
016  005  -34.300799
016  006  -21.831993
016  007  -18.226750
016  008  -32.591690
016  009  -27.112121
016  010  -11.084656
016  011  -3.816843
016  012  -15.947689
016  013  -26.721898
016  014  -5.337105
016  015  -11.658496
016  017  -3.898116
016  018  -6.269825
016  019  -5.572588
016  020  -0.837402
016  021  -2.326214
016  022  -5.128503
016  023  -0.546712
016  024  -3.830229
016  025  -29.392674
017  001  -46.606077
017  002  -38.132081
017  003  -23.991969
017  004  -15.561256
017  005  -42.021089
017  006  -29.598477
017  007  -38.981453
017  008  -59.020663
017  009  -50.932890
017  010  -25.670250
017  011  -14.577043
017  012  -34.890679
017  013  -47.318475
017  014  -17.473606
017  015  -28.921368
017  016  -3.898116
017  018  -2.802484
017  019  -5.848270
017  020  -2.293105
017  021  -4.557693
017  022  -12.745276
017  023  -6.267301
017  024  -10.108178
017  025  -54.019643
018  001  -65.052637
018  002  -52.073786
018  003  -36.746011
018  004  -29.072336
018  005  -63.479757
018  006  -47.020234
018  007  -40.222601
018  008  -60.772210
018  009  -47.903426
018  010  -20.973678
018  011  -19.552104
018  012  -40.427995
018  013  -58.700483
018  014  -16.075434
018  015  -32.060563
018  016  -6.269825
018  017  -2.802484
018  019  -1.153134
018  020  -2.546578
018  021  -11.918172
018  022  -21.792398
018  023  -6.608322
018  024  -6.127472
018  025  -59.772326
019  001  -64.292309
019  002  -49.381646
019  003  -36.043006
019  004  -31.517822
019  005  -66.776622
019  006  -49.076312
019  007  -31.372248
019  008  -49.446477
019  009  -36.342237
019  010  -13.188660
019  011  -16.461227
019  012  -33.714910
019  013  -52.986532
019  014  -10.421673
019  015  -25.401702
019  016  -5.572588
019  017  -5.848270
019  018  -1.153134
019  020  -2.341367
019  021  -13.500179
019  022  -21.388233
019  023  -4.453137
019  024  -2.408587
019  025  -50.490244
020  001  -42.983042
020  002  -31.871596
020  003  -20.618218
020  004  -16.679353
020  005  -44.126533
020  006  -30.043476
020  007  -24.264601
020  008  -40.739814
020  009  -32.454805
020  010  -12.655092
020  011  -8.008087
020  012  -23.111970
020  013  -36.800682
020  014  -7.417262
020  015  -17.290796
020  016  -0.837402
020  017  -2.293105
020  018  -2.546578
020  019  -2.341367
020  021  -4.618345
020  022  -9.908794
020  023  -1.175900
020  024  -2.901722
020  025  -38.551377
021  001  -22.071383
021  002  -16.521121
021  003  -7.651995
021  004  -3.816256
021  005  -20.512708
021  006  -11.593354
021  007  -24.331212
021  008  -39.186288
021  009  -37.470250
021  010  -21.378890
021  011  -4.993266
021  012  -17.983401
021  013  -23.903055
021  014  -12.332634
021  015  -15.520501
021  016  -2.326214
021  017  -4.557693
021  018  -11.918173
021  019  -13.500179
021  020  -4.618345
021  022  -2.212672
021  023  -4.955816
021  024  -12.123165
021  025  -32.178977
022  001  -11.618721
022  002  -6.794560
022  003  -1.946874
022  004  -2.317971
022  005  -13.813973
022  006  -6.296997
022  007  -15.560517
022  008  -26.203137
022  009  -28.039700
022  010  -19.101694
022  011  -1.995193
022  012  -8.972383
022  013  -11.639438
022  014  -10.622634
022  015  -8.555613
022  016  -5.128503
022  017  -12.745276
022  018  -21.792398
022  019  -21.388233
022  020  -9.908794
022  021  -2.212672
022  023  -7.185366
022  024  -15.493216
022  025  -19.053496
023  001  -35.921273
023  002  -24.392612
023  003  -15.995797
023  004  -15.479985
023  005  -40.627401
023  006  -26.752700
023  007  -14.764140
023  008  -28.087561
023  009  -21.514567
023  010  -6.892998
023  011  -3.790816
023  012  -14.359605
023  013  -26.799978
023  014  -2.811758
023  015  -9.601781
023  016  -0.546712
023  017  -6.267301
023  018  -6.608322
023  019  -4.453137
023  020  -1.175900
023  021  -4.955816
023  022  -7.185366
023  024  -1.669406
023  025  -26.658965
024  001  -51.255598
024  002  -36.227750
024  003  -27.064811
024  004  -27.313810
024  005  -58.474532
024  006  -41.494820
024  007  -16.689443
024  008  -30.240660
024  009  -20.067578
024  010  -4.432211
024  011  -8.876781
024  012  -19.640460
024  013  -36.526397
024  014  -2.957907
024  015  -13.087645
024  016  -3.830229
024  017  -10.108178
024  018  -6.127472
024  019  -2.408587
024  020  -2.901722
024  021  -12.123165
024  022  -15.493216
024  023  -1.669406
024  025  -31.940506
025  001  -19.754122
025  002  -10.369427
025  003  -15.956822
025  004  -30.247469
025  005  -37.880137
025  006  -28.560379
025  007  -2.962151
025  008  -1.571970
025  009  -7.021454
025  010  -17.314614
025  011  -12.545585
025  012  -2.097112
025  013  -3.660563
025  014  -15.513523
025  015  -4.295235
025  016  -29.392674
025  017  -54.019643
025  018  -59.772326
025  019  -50.490244
025  020  -38.551377
025  021  -32.178977
025  022  -19.053496
025  023  -26.658965
025  024  -31.940506`
);

var pref = -15.561256;

describe('Algorithms', function() {
  describe('eles.affinityPropagation()', function(){

    var cy;
    var nodes;
    var n1, n2, n3, n4, n5,
        n6, n7, n8, n9, n10,
        n11, n12, n13, n14, n15,
        n16, n17, n18, n19, n20,
        n21, n22, n23, n24, n25;

    var options;
    var expectedClusters;
    var clusters;

    before(function() {
      cy = cytoscape({
        layout: { name: 'preset' },
        elements: []
      });

      data.split('\n').forEach( function( line, i ){
        var vals = line.split(/\s+/);
        var x = parseFloat( vals[0] );
        var y = parseFloat( vals[1] );
        var id = i + 1;

        if( id < 10 ){
          id = '00' + id;
        } else if( id < 100 ){
          id = '0' + id;
        }

        cy.add({ data: { id: id }, position: { x: x, y: y } });
      } );

      sim.split('\n').forEach( function( line ){
        var vals = line.split(/\s+/);
        var src = vals[0];
        var tgt = vals[1];
        var weight = parseFloat( vals[2] );

        cy.add({ data: { source: src, target: tgt, weight: weight } });
      } );

      nodes = cy.nodes();

      n1 = cy.$('#001'); n2 = cy.$('#002'); n3 = cy.$('#003'); n4 = cy.$('#004'); n5 = cy.$('#005');
      n6 = cy.$('#006'); n7 = cy.$('#007'); n8 = cy.$('#008'); n9 = cy.$('#009'); n10 = cy.$('#010');
      n11 = cy.$('#006'); n12 = cy.$('#012'); n13 = cy.$('#013'); n14 = cy.$('#014'); n15 = cy.$('#015');
      n16 = cy.$('#016'); n17 = cy.$('#017'); n18 = cy.$('#018'); n19 = cy.$('#019'); n20 = cy.$('#020');
      n21 = cy.$('#021'); n22 = cy.$('#022'); n23 = cy.$('#023'); n24 = cy.$('#014'); n25 = cy.$('#025');

      options = {
        distance: function( nodeP, nodeQ ){ // nb minus because we have the similarity value, not the distance
          return -nodeP.edgesTo( nodeQ ).data('weight');
        },
        preference: 'median',
        // preference: pref,
        damping: 0.6,
        maxIterations: 500,
        // this is what would be set if we were not manually specifying distance
        // attributes: [
        //   function( node ){
        //     return node.position().x;
        //   },
        //   function( node ){
        //     return node.position().y;
        //   }
        // ]
      };

      expectedClusters = {
        '001': '003',
        '002': '003',
        '003': '003',
        '004': '003',
        '005': '003',
        '006': '003',
        '007': '007',
        '008': '007',
        '009': '007',
        '010': '007',
        '011': '003',
        '012': '007',
        '013': '003',
        '014': '007',
        '015': '007',
        '016': '020',
        '017': '020',
        '018': '020',
        '019': '020',
        '020': '020',
        '021': '020',
        '022': '003',
        '023': '020',
        '024': '020',
        '025': '007' };

      clusters = cy.elements().affinityPropagation( options );
    });

    function classify(node, clusters) {
      var found = null;

      for (var c = 0; clusters.length; c++) {
        var cluster = clusters[c];
        for (var e = 0; e < cluster.length; e++) {
          if (node === cluster[e]) {
            found = c;
            return found;
          }
        }
      }
    }

    function found(node, cluster) {
      for (var n = 0; n < cluster.length; n++) {
        if (node === cluster[n]) {
          return true;
        }
      }
      return false;
    }

    function printMatrix( M ) { // used for debugging purposes only
      var n = Math.sqrt(M.length);
      for ( var i = 0; i < n; i++ ) {
        var row = '';
        for ( var j = 0; j < n; j++ ) {
          row += M[i*n+j] + ' ';
        }
        console.log(row);
      }
    }


    it('clusters should be returned in an array', function() {
      expect(clusters).to.exist;
      expect(clusters.constructor === Array).to.be.true;
    });

    it('all nodes should be assigned to a cluster', function() {
      var total = 0;
      for (var i = 0; i < clusters.length; i++) {
        total += clusters[i].length;
      }
      expect(total).to.equal(nodes.length);
    });

    it('nodes cannot be assigned to more than one cluster', function() {
      for (var n = 0; n < nodes.length; n++) {
        var node = nodes[n];

        // Find which cluster the node belongs to.
        var cluster = classify(node, clusters);
        expect(cluster).to.exist;

        // Iterate through all other clusters to make sure the node
        // is not found in any other cluster.
        for (var c = 0; c < clusters.length; c++) {
          if (cluster !== c) {
            var duplicate = found(node, clusters[c]);
            expect(duplicate).to.be.false;
          }
        }
      }
    });

    it('should always return the same clusters', function() {
      // Run affinity propagation several times.
      for (var i = 0; i < 10; i++) {
        var clusters2 = cy.elements().affinityPropagation( options );

        expect(clusters2).to.exist;
        expect(clusters2.length).to.equal(clusters.length);

        for( var j = 0; j < clusters2.length; j++ ){
          var cluster = clusters[j];
          var cluster2 = clusters2[j];

          expect( cluster.equals( cluster2 ) ).to.be.true;
        }
      }
    });

    it('should return the numerically correct results (expected results)', function() {

      var idify = clusters => clusters.map( cluster => cluster.map( el => el.id() ) );

      expect( idify(clusters) ).to.deep.equal([
        ['001', '002', '003', '004', '005', '006', '011', '013', '022'],
        ['007', '008', '009', '010', '012', '014', '015', '025'],
        ['016', '017', '018', '019', '020', '021', '023', '024']
      ]);

      expect(clusters.length).to.equal(3);

      // Cluster with node 3 as exemplar
      expect(clusters[0][0].id()).to.equal('001');
      expect(clusters[0][1].id()).to.equal('002');
      expect(clusters[0][2].id()).to.equal('003');
      expect(clusters[0][3].id()).to.equal('004');
      expect(clusters[0][4].id()).to.equal('005');
      expect(clusters[0][5].id()).to.equal('006');
      expect(clusters[0][6].id()).to.equal('011');
      expect(clusters[0][7].id()).to.equal('013');
      expect(clusters[0][8].id()).to.equal('022');

      // Cluster with node 7 as exemplar
      expect(clusters[1][0].id()).to.equal('007');
      expect(clusters[1][1].id()).to.equal('008');
      expect(clusters[1][2].id()).to.equal('009');
      expect(clusters[1][3].id()).to.equal('010');
      expect(clusters[1][4].id()).to.equal('012');
      expect(clusters[1][5].id()).to.equal('014');
      expect(clusters[1][6].id()).to.equal('015');
      expect(clusters[1][7].id()).to.equal('025');

      // Cluster with node 20 as exemplar
      expect(clusters[2][0].id()).to.equal('016');
      expect(clusters[2][1].id()).to.equal('017');
      expect(clusters[2][2].id()).to.equal('018');
      expect(clusters[2][3].id()).to.equal('019');
      expect(clusters[2][4].id()).to.equal('020');
      expect(clusters[2][5].id()).to.equal('021');
      expect(clusters[2][6].id()).to.equal('023');
      expect(clusters[2][7].id()).to.equal('024');

    });

  });
});
