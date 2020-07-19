import _ from 'lodash';

export default (router) => {
    return router
    .get('/',  (_req, reply) => {
      reply.view('index.pug');
    })
}

//mongo ds040167.mlab.com:40167/restik -u <dbuser> -p <dbpassword>
//mongodb://<dbuser>:<dbpassword>@ds040167.mlab.com:40167/restik
//Mos KHq.Wd87isFt4XF