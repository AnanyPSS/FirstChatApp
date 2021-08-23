import React from 'react';
import {CometChatConversationListWithMessages} from './../CometChatWorkspace/src';

export default class CometChatConversationListWithMessagesComp extends React.Component {
  
  render() {
    
     return (
       <div style={{width: '620px', height:'400px' }}>
        <CometChatConversationListWithMessages />
       </div>
    );
  }
} 