import React from 'react';
import NavBar from './Component/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CometChatComp from './Component/CometChatUI';
import CometChatUserListWithMessageComp from './Component/CometChatUserListWithMessages';
import CometChatGroupListWithMessagesComp from './Component/CometChatGroupListWithMessages';
import CometChatConversationListWithMessagesComp from './Component/CometChatConversationListWithMessages';
import CometChatMessageComp from './Component/CometChatMessages';
import CometChatUserListComp from './Component/CometChatUserList';
import CometChatGroupListComp from './Component/CometChatGroupList';
import CometChatConversationListComp from './Component/CometChatConversationList';
export default class App extends React.Component {
  
  render() {
    
     return (
       <div>
        <NavBar />
       <div className="description">
        This application contains all the functional example of CometChatUIKit Components
       </div>
       <div className="components">
       <Router>
        <div className="comp1">
          <h3>CometChatUI</h3>
          <p><code>CometChatUI</code> is an option to launch a fully functional chat application using the UI Kit.</p>
          <hr />
          <div className="launch"><Route path="/" component={CometChatComp} /></div>
        </div>
        <div className="comp1">
          <h3>CometChatUserListWithMessages
          </h3>
          <p>The <code>CometChatUserListWithMessages</code> is a component with a list of users.</p>
          <hr />
          <div className="launch"><Route path="/" component={CometChatUserListWithMessageComp}/></div>
        </div>
        <div className="comp1">
          <h3>CometChatGroupListWithMessages</h3>
          <p>The <code>CometChatGroupListWithMessages</code> is a component with a list of groups.</p>
          <hr />
          <div className="launch"><Route path="/" component={CometChatGroupListWithMessagesComp}/></div>
        </div>
        <div className="comp1">
          <h3>CometChatConversationListWithMessages</h3>
          <p>The <code>CometChatConversationListWithMessages</code> is a component with a list of recent conversations.</p>
          <hr />
          <div className="launch"><Route path="/" component={CometChatConversationListWithMessagesComp} /></div>
        </div>
        <div className="comp1">
          <h3>CometChatMessages</h3>
          <p>The <code>CometChatMessages</code> is a component that displays the list of messages for a particular user or group.</p>
          <hr />
          <div className="launch"><Route path="/" component={CometChatMessageComp} /></div>
        </div>
        <div className="comp1">
          <h3>CometChatUserList</h3>
          <p>The <code>CometChatUserList</code> is a component that displays the list of users available to chat.</p>
          <hr />
          <div className="launch"><Route path="/" component={CometChatUserListComp} /></div>
        </div>
        <div className="comp1">
          <h3>CometChatGroupList</h3>
          <p>The <code>CometChatGroupList</code> is a component that displays the list of groups available.</p>
          <hr />
          <div className="launch"><Route path="/" component={CometChatGroupListComp} /></div>
        </div>
        <div className="comp1">
          <h3>CometChatConversationList</h3>
          <p>You can use the <code>CometChatConversationList</code> component to display the list of recent conversations that the logged-in user was a part of.</p>
          <hr />
          <div className="launch"><Route path="/" component={CometChatConversationListComp} /></div>
        </div>
       </Router>
       </div>
       </div>
    );
  }
  
}