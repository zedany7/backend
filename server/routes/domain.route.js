import express from 'express';
import validate from 'express-validation';
import paramValidation from '../../config/param-validation';
import domainCtrl from '../controllers/domain.controller';
import config from '../../config/config';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/domains - Get list of domains */
  .get(config.authenticate, domainCtrl.list)

  /** POST /api/domains - Create new domain */
  .post(validate(paramValidation.createDomain), domainCtrl.create);

router.route('/getAllforAdmin')
/** GET /api/domains/getAllforAdmin - Get list of domains */
  .get(domainCtrl.getAllforAdmin);

router.route('/:domainId')
  /** GET /api/domains/:domainId - Get domain */
  .get(domainCtrl.get)

  /** PUT /api/domains/:domainId - Update domain */
  .put(validate(paramValidation.updateDomain), domainCtrl.update)

  /** DELETE /api/domains/:domainId - Delete domain */
  .delete(domainCtrl.remove);

/** Load domain when API with domainId route parameter is hit */
router.param('domainId', domainCtrl.load);

export default router;
