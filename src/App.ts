import * as express from 'express';
const cors = require('cors');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');

class App {
  public express;
  constructor() {
    this.express = express();
    this.express.use(bodyParser.json());
    this.express.use(cors());
    this.mountRoutes();
  }
  private mountRoutes(): void {
    const router = express.Router();

    const surveys = {};
    router.get('/', (req, res) => {
      res.send('<h1>Hello ESG Revolution!!!</h1>');
    });

    router.get('/surveys', (req, res) => {
      res.send(surveys);
    });

    router.post('/surveys', async (req, res) => {
      const id = randomBytes(4).toString('hex');
      console.log(`received body : ${req.body}`);
      const { username, data } = req.body;
      const survey = { id: id, username: username, data: data };
      surveys[id] = survey;
      res.status(201).send(survey);
    });
    this.express.use('/', router);
  }
}
export default new App().express;
