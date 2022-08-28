import {
    MIXCHANGE,
    PLAYCHANGE,
    ISARCHIVE,
    AUDIOSWITCH,
    AUDIOINDEX,
    AUDIOPLAYCHANGE
  } from "../constants/main";
  
  export const setChangedMix = params => {
    return dispatch => {
      dispatch({ type: MIXCHANGE, payload: params });
    };
  };
  
  export const PlayChange = params => {
    return dispatch => {
      dispatch({ type: PLAYCHANGE, payload: params });
    };
  };
  
  export const IsArchive = params => {
    return dispatch => {
      dispatch({ type: ISARCHIVE, payload: params });
    };
  };
  
  export const audioSwitch = params => {
    return dispatch => {
      dispatch({ type: AUDIOSWITCH, payload: params });
    };
  };
  
  export const SetAudioIndex = params => {
    return dispatch => {
      dispatch({ type: AUDIOINDEX, payload: params });
    };
  };
  
  export const SetAudioPlay = params => {
    return dispatch => {
      dispatch({ type: AUDIOPLAYCHANGE, payload: params });
    };
  };
  