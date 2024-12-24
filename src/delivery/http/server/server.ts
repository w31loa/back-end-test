import Express from 'express';
import { config } from '@/config/index';

const buildStart = (app: Express.Express) => {
  return (router: Express.Router) => {
    app.use('/api/v1', router);
    app.use(Express.urlencoded({ extended: true })); 
    const server = app.listen(config.http.port, config.http.host);

    const stop = () => {
      server.close();
    };

    return stop;
  }
}

export const buildServer = () => {
  const app = Express();

  return {
    start: buildStart(app)
  };
}
