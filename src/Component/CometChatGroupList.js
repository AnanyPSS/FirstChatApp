import React from 'react';
import {CometChatGroupList} from './../CometChatWorkspace/src';

export default class CometChatGroupListComp extends React.Component {
  
  render() {
    
     return (
       <div style={{width: '620px', height:'400px' }}>
        <CometChatGroupList />
       </div>
    );
  }
  
}