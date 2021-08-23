import React from 'react';
import {CometChatUserList} from './../CometChatWorkspace/src';

export default class CometChatUserListComp extends React.Component {
  
  render() {
    
     return (
       <div style={{width: '620px', height:'400px' }}>
        <CometChatUserList friendsOnly={true} />
       </div>
    );
  }
  
}