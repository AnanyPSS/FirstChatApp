import React from 'react';
import {CometChatUI} from "./../CometChatWorkspace/src/"

export default class CometChatComp extends React.Component {
  
  render() {
    
     return (
       <div style={{width: '620px', height:'400px' }}>
        <CometChatUI chatWithGroup="supergroup" />
       </div>
    );
  }
  
}