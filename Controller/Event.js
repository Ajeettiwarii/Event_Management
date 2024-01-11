import { Event } from "../Models/Event_Model.js";

export const getallevent = async (req, res) => {
  try {
    const events = await Event.find();
    res.send(events);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const Create_Event = async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).send(event);
  } catch (e) {
    res.status(400).send(error);
  }
};

export const getbyid = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).send();
    }
    res.send(event);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateid = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!event) {
      return res.status(404).send();
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

export const delete_event = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      return res.status(404).send();
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
