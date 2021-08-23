import React from 'react'
import {CometChatGroupListWithMessages} from './../CometChatWorkspace/src';

export default class CometChatGroupListWithMessagesComp extends React.Component {
  
  render() {
    
     return (
       <div style={{width: '620px', height:'400px' }}>
        <CometChatGroupListWithMessages chatWithGroup="supergroup" />
       </div>
    );
  }
  
}