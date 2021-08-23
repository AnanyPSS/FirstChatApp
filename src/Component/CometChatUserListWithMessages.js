import React from 'react';
import {CometChatUserListWithMessages} from './../CometChatWorkspace/src';

export default class CometChatUserListWithMessageComp extends React.Component {
  
  render() {
    
     return (
       <div style={{width: '620px', height:'400px' }}>
        <CometChatUserListWithMessages chatWithUser="superhero5" />
       </div>
    );
  }
  
}