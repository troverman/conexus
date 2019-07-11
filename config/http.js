/**
 * HTTP Server Settings
 */

module.exports.http = {


  //SEO. RENDERFOR GOOGLE BOTs
  middleware: {
     prerender: require('prerender-node').set('prerenderServiceUrl', 'https://tranquil-reef-73037.herokuapp.com/').set('prerenderToken', 'V8W4l4iLL7BRD4pB8stg'),
     //prerender: require('prerender-node').set('prerenderToken', 'V8W4l4iLL7BRD4pB8stg'),
     order: [
       'startRequestTimer',
       'cookieParser',
       'session',
       'myRequestLogger',
       'bodyParser',
       'handleBodyParserError',
       'prerender',
       'compress',
       'methodOverride',
       'poweredBy',
       '$custom',
       'router',
       'www',
       'favicon',
       '404',
       '500'
     ],
     //myRequestLogger: function (req, res, next) {
           //console.log("Requested :: ", req.method, req.url);
           //return next();
     //}
  }
};
