// /middleware/trackJsLogger.js
const trackJsLogger = store => next => action => {
  try {
    // log out the action type so we have a rough idea of what was done
    console.log(action);
    return next(action);
  } catch (err) {
    // Something bad happened, let's log out the entire state so we can see it in the timeline
    console.warn(store.getState());

    // NOTE: this assumes trackJs was initialized previously, at app startup.
    // We automatically transmit on console.error()
    console.error(err);

    // Alternatively, if you'd rather not console.error()
    // You can explicitly track the event so it won't appear in the user's console.
    // if(trackJs) { trackJs.track(err) }
  }
};

export default trackJsLogger;
