import {
    MIXCHANGE,
    PLAYCHANGE,
    ISARCHIVE,
    AUDIOSWITCH,
    AUDIOINDEX,
    AUDIOPLAYCHANGE
  } from "../constants/main";
  
  const maindata = (state = {}, action) => {
    switch (action.type) {
      case MIXCHANGE: {
        return { ...state, mix: action.payload };
      }
      case PLAYCHANGE: {
        return { ...state, playChange: action.payload };
      }
      case ISARCHIVE: {
        return { ...state, isArchive: action.payload };
      }
      case AUDIOSWITCH: {
        return { ...state, audioswitch: action.payload };
      }
      case AUDIOINDEX: {
        return { ...state, audioIndex: action.payload };
      }
      case AUDIOPLAYCHANGE: {
        return { ...state, audioPlayChange: action.payload };
      }
      default: {
        return { ...state };
      }
    }
  };
  export default maindata;
  