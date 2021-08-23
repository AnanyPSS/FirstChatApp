import React from 'react';
import {CometChatConversationList} from "./../CometChatWorkspace/src";

export default class CometChatConversationListComp extends React.Component {
  
  render() {
    
     return (
       <div style={{width: '620px', height:'400px' }}>
        <CometChatConversationList />
       </div>
    );
  }
  
}