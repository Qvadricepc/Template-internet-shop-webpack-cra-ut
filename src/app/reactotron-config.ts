// @ts-ignore
import Reactotron from 'reactotron-react-js';
// @ts-ignore
import { reactotronRedux } from 'reactotron-redux';

/*
 * What is it
 * https://www.youtube.com/watch?v=UiPo9A9k7xc
 * Install
 * https://github.com/infinitered/reactotron/blob/master/docs/quick-start-react-native.md
 * Connect
 * https://github.com/infinitered/reactotron/issues/417#issuecomment-298178242
 * Redux plugin
 * https://github.com/infinitered/reactotron/blob/master/docs/plugin-redux.md
 * Install this extension and enable it on localhost it will allow CORS
 * https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en
 * */
export const reactotron = Reactotron.configure()
  // https://github.com/infinitered/reactotron/blob/master/docs/plugin-track-global-errors.md
  // .use(
  //   trackGlobalErrors({
  //     // hide node modules
  //     veto: frame => {
  //       return frame.fileName.indexOf('/node_modules/') === -1;
  //     },
  //   }),
  // )
  // .use(overlay())
  // .use(openInEditor())
  .use(
    reactotronRedux({
      // except: ['EFFECT_TRIGGERED', 'EFFECT_RESOLVED', 'EFFECT_REJECTED'],
      // isActionImportant: action => action.type === 'repo.receive',
    })
  )
  .connect();

// @ts-ignore
console.tron = Reactotron;
