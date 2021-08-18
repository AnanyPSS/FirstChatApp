import { CometChatUI } from "./CometChatWorkspace/src";
import React from 'react';

export default class App extends React.Component {
  
  render() {

    return (
      <div style={{width: '800px', height:'800px' }}>
        <CometChatUI />
      </div>
    );
    }
}
