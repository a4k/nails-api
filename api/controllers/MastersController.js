/**
 * MastersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  find: async function (req, res) {
    const from = req.param('from') || (typeof req.options.from !== 'undefined' ? req.options.from : null);
    const to = req.param('to') || (typeof req.options.to !== 'undefined' ? req.options.to : null);

    const filterCalendar = {date: {'>=': from, '<': to}};
    let masters;

    try {

      const calendar = await MasterCalendar.find(filterCalendar);
      masters = await Master.find({
        id: {in: calendar.map(item => item.master)}
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

