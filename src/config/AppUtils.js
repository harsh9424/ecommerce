let events = require("events");
let loadingEventEmitter;

export const sorDataByDate = data => {
  return data.sort(function(a, b) {
    var date1 = new Date(a.modifiedTmstp),
      date2 = new Date(b.modifiedTmstp);
    return date2 - date1;
  });
};

export const setEventEmitter = emitter => {
  loadingEventEmitter = emitter;
};
export const getEventEmitter = path => {
  if (!loadingEventEmitter) {
    loadingEventEmitter = new events.EventEmitter();
  }
  return loadingEventEmitter;
};
