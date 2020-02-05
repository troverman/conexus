var _ = require('@sailshq/lodash');
/**
 * Default 500 and 404 handler.
 * (defers to res.serverError() and res.notFound() whenever possible)
 *
 * With default hook configuration, these handlers apply to both HTTP
 * and virtual requests
 */
module.exports = function(sails) {
  return {
    /**
     * Default 500 handler.
     * (for errors implicitly thrown in middleware/routes)
     */
    500: function(err, req, res) {
      if (_.isError(err)) {
        var msgMatches = err.message.match(/^Failed to decode param \'([^']+)\'/);
        if (err.status === 400 && msgMatches) {
          sails.log.verbose('Bad request: Could not decode the requested URL ('+req.path+')');
          return res.status(400).send('Bad request: Could not decode requested URL.');
        }
      }
      try {if (typeof res.serverError === 'function') {return res.serverError(err);}} 
      catch (unusedErr) { /* ignore any unexpected error encountered when attempting to respond w/ res.serverError(). */ }
      // Catch-all:
      // Log a message and try to use `res.send` to respond.
      try {
        sails.log.error('Server Error:');
        sails.log.error(err);
        if (process.env.NODE_ENV === 'production') {return res.sendStatus(500);}
        else {return res.status(500).send(err);}
      } 
      catch (errorSendingResponse) {
        sails.log.error('But no response could be sent because another error occurred:');
        sails.log.error(errorSendingResponse);
      }//</catch>
    },
    /**
     * Default 404 handler.
     * (for unmatched routes)
     */
    404: function(req, res) {
      // Use `notFound` handler if it exists
      try {
        if (typeof res.notFound === 'function') {return res.notFound();}
      } 
      catch (unusedErr) { /* If res.notFound() doesn't exists, or fails w/ an error, then silently ignore that and try other ways to send a 404. */ }
      try {
        sails.log.verbose('A request (%s) did not match any routes, and no `res.notFound` handler is configured.', req.url);
        res.sendStatus(404);
        return;
      } 
      catch (err) {
        sails.log.error('An unmatched route was encountered in a request...');
        sails.log.error('But no response could be sent because an error occurred:');
        sails.log.error(err);
        return;
      }
    }
  };
};
