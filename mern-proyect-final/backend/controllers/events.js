const Event = require("../models/Event");

const controller = {
  // get events list
  getEvents: async (req, res) => {
    return res.json({ok: true, message: "get all"});
  },
  // create an event
  createEvent: async (req, res) => {
    const event = new Event(req.body);

    try{
      event.user = req.uid;
      const eventSaved = await event.save();
      return res.json({ok: true, message: "create events", event: eventSaved});
    } catch(err){
      console.log(err);
      return res.status(500).json({ok: false, message: "error, contact support"});
    }
  },
  // update event
  updateEvents: async (req, res) => {
    return res.json({ok: true, message: "update event"});
  },
  // delete event
  deleteEvents: async (req, res) => {
    return res.json({ok: true, message: "delete event"});
  }
}

module.exports = controller;
