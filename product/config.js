var ip = require("ip");
    console.dir ( ip.address() );

var publicIp = require( 'public-ip' );

(async () => {
  console.log( await publicIp.v4());
  var ippublic = await publicIp.v4();
  console.log(ippublic);
})();

module.exports = {
    aws_table_name: 'product',
    aws_local_config: {
        region: 'local',
        endpoint: 'http://${ippublic}:3000'
      //Provide details for local configuration
    },
    aws_remote_config: {
      accessKeyId: 'AKIA6RDRQLWDWWQFAPG6',
      secretAccessKey: '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',
      region: 'ap-southeast-1',
    }
}
