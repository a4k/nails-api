/**
 * MastersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const getParam = (req, param) => {
  return req.param(param) || (typeof req.options[param] !== 'undefined' ? req.options[param] : null);
};


module.exports = {

  find: async function (req, res) {
    const from = getParam(req, 'from');
    const to = getParam(req, 'to');
    const service = getParam(req, 'service');

    const filterCalendar = {};
    if(from || to) {
      filterCalendar.date = {};
    }
    if(from) {
      filterCalendar.date['>='] = from;
    }
    if(to) {
      filterCalendar.date['<'] = to;
    }

    let masters;

    try {

      const services = await MasterService.find(service ? {service} : {});
      const masterIdByServices = services.map(item => item.master);

      const calendar = await MasterCalendar.find(filterCalendar);
      const masterIdByCalendar = calendar.map(item => item.master);

      const masterIdByServicesAndCalendar = masterIdByServices.filter(item => masterIdByCalendar.includes(item));

      masters = await Master.find({
        id: masterIdByServicesAndCalendar
      })
        .populate('calendar', filterCalendar).populate('services');

    } catch (err) {
      if (err.name === 'UsageError') {
        return res.badRequest(err);
      } else {
        throw err;
      }
    }
    if (!masters) {
      return res.notFound();
    }

    return res.ok(masters);

  },
};

