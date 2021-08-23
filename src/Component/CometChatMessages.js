import React from 'react';
import {CometChatMessages} from './../CometChatWorkspace/src';

export default class CometChatMessageComp extends React.Component {
  
  render() {
    
     return (
       <div style={{width: '620px', height:'400px' }}>
        <CometChatMessages chatWithGroup="supergroup" />
       </div>
    );
  }
  
}