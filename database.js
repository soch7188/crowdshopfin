const environments = {
    local: {
        mysql: {
          host: 'crowdshopfin.cwke4n9f6kzu.ap-northeast-2.rds.amazonaws.com',
          username: 'crowdshopfin',
          password: 'crowdshopfin',
          database: 'crowdshopfin',
          logging: console.log
        }
    },
}

const nodeEnv = process.env.NODE_ENV || 'local';
module.exports = environments[nodeEnv];
