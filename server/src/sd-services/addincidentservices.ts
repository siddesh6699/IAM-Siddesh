let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { GenericRDBMSOperations } from '../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
//append_imports_end
export class addincidentservices {
  private sdService = new SDBaseService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;
  private swaggerDocument: Object;
  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    swaggerDocument,
    globalTimers
  ) {
    this.serviceName = 'addincidentservices';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.swaggerDocument = swaggerDocument;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    swaggerDocument?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new addincidentservices(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        swaggerDocument,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_addincidentservices_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: addincidentservices');

    //appendnew_flow_addincidentservices_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: addincidentservices');

    if (!this.swaggerDocument['paths']['/getincidentdata']) {
      this.swaggerDocument['paths']['/getincidentdata'] = {
        get: {
          summary: 'Get Incident Data',
          description: 'all the incident related data',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/getincidentdata']['get'] = {
        summary: 'Get Incident Data',
        description: 'all the incident related data',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/getincidentdata`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_WKFpG4WxGwbYLLk4(bh);
          //appendnew_next_sd_oNIFxwnNo7gikgR4
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_oNIFxwnNo7gikgR4');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/postincidentdata']) {
      this.swaggerDocument['paths']['/postincidentdata'] = {
        post: {
          summary: 'Get Incident Data',
          description: 'all the incident related data',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/postincidentdata']['post'] = {
        summary: 'Get Incident Data',
        description: 'all the incident related data',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/postincidentdata`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_a3RQ65Ttn9oVQFlj(bh);
          //appendnew_next_sd_lLtztFt2qPbCFToc
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_lLtztFt2qPbCFToc');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_addincidentservices_HttpIn
  }
  //   service flows_addincidentservices

  //appendnew_flow_addincidentservices_start

  async sd_WKFpG4WxGwbYLLk4(bh) {
    try {
      bh.local.query = 'select * from incidenttable';
      console.log(bh.local.query);
      bh = await this.sd_yeci6BFkyuwbFOBc(bh);
      //appendnew_next_sd_WKFpG4WxGwbYLLk4
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WKFpG4WxGwbYLLk4');
    }
  }

  async sd_yeci6BFkyuwbFOBc(bh) {
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_iGEBHwOrsUYhpghG'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = [];
      params = params ? params : [];
      bh.local.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.query,
        params
      );
      bh = await this.sd_B8GOSV7xrlRnjeKN(bh);
      //appendnew_next_sd_yeci6BFkyuwbFOBc
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yeci6BFkyuwbFOBc');
    }
  }

  async sd_B8GOSV7xrlRnjeKN(bh) {
    try {
      console.log(bh.local.result);
      await this.sendingincidentdata(bh);
      //appendnew_next_sd_B8GOSV7xrlRnjeKN
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_B8GOSV7xrlRnjeKN');
    }
  }

  async sendingincidentdata(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PYkhQh553RDPvnWv');
    }
  }

  async sd_a3RQ65Ttn9oVQFlj(bh) {
    try {
      bh.local.query = `INSERT INTO 
incidenttable (subject,description,priority,incidentdate)
VALUES('${bh.input.body.subject}','${bh.input.body.description}','${bh.input.body.priority}','${bh.input.body.incidentdate}')`;

      // console.log('\n bh.local.query*********\n', bh.local.query)
      bh = await this.sd_DWuIvyHs6RdrdGjj(bh);
      //appendnew_next_sd_a3RQ65Ttn9oVQFlj
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_a3RQ65Ttn9oVQFlj');
    }
  }

  async sd_DWuIvyHs6RdrdGjj(bh) {
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_iGEBHwOrsUYhpghG'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = undefined;
      params = params ? params : [];
      bh.local.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.query,
        params
      );
      bh = await this.sd_CAnyKqSd1jI6M8TS(bh);
      //appendnew_next_sd_DWuIvyHs6RdrdGjj
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DWuIvyHs6RdrdGjj');
    }
  }

  async sd_CAnyKqSd1jI6M8TS(bh) {
    try {
      // console.log(bh.local.result)
      await this.sendingincident(bh);
      //appendnew_next_sd_CAnyKqSd1jI6M8TS
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CAnyKqSd1jI6M8TS');
    }
  }

  async sendingincident(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WIlMYCXr7GTLvzPp');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  //appendnew_flow_addincidentservices_Catch
}
