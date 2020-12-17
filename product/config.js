var ip = require("ip");
    console.dir ( ip.address() );

module.exports = {
    aws_table_name: 'product',
    aws_local_config: {
        region: 'local',
        endpoint: 'http://${ip.address()}:3000'
      //Provide details for local configuration
    },
    aws_remote_config: {
      accessKeyId: 'AKIA6RDRQLWDWWQFAPG6',
      secretAccessKey: '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',
      region: 'ap-southeast-1',
    }
}
