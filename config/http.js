/**
 * HTTP Server Settings
 */

module.exports.http = {
  //SEO. RENDERFOR GOOGLE BOTs
  middleware: {
     prerender: require('prerender-node').set('prerenderServiceUrl', 'https://tranquil-reef-73037.herokuapp.com/').set('prerenderToken', 'V8W4l4iLL7BRD4pB8stg'),
     order: [
       'cookieParser',
       'session',
       'bodyParser',
       'prerender',
       'compress',
       'poweredBy',
       '$custom',
       'router',
       'www',
       'favicon',
     ],
  }
};
