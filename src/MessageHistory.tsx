import React from 'react';

interface Message {
  id: string;
  from: {
    name: string;
  };
  type: string;
  time: string;
  text?: string;
}

interface MessageProps {
  from: {
    name: string;
  };
  message: Message;
}

const Message: React.FC<MessageProps> = ({ from, message }) => {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name">
          <i className="fa fa-circle online"></i>
          {from.name}
        </span>
        <span className="message-data-time">{message.time}</span>
      </div>
      <div className="message my-message">{message.text}</div>
    </li>
  );
};

const Response: React.FC<MessageProps> = ({ from, message }) => {
  return (
    <li className="clearfix">
      <div className="message-data align-right">
        <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
        <span className="message-data-name">{from.name}</span>
        <i className="fa fa-circle me"></i>
      </div>
      <div className="message other-message float-right">{message.text}</div>
    </li>
  );
};

const Typing: React.FC<MessageProps> = ({ from, message }) => {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name">
          <i className="fa fa-circle online"></i>
          {from.name}
        </span>
        </div>
      <div className="message my-message">typing...</div>
    </li>
  );
};

interface MessageHistoryProps {
  list: Message[];
}

const MessageHistory: React.FC<MessageHistoryProps> = ({ list }) => {
  if (list.length === 0) {
    return null;
  }

  return (
    <ul>
      {list.map((item) => {
        if (item.type === 'message') {
          return <Message key={item.id} from={item.from} message={item} />;
        } else if (item.type === 'response') {
          return <Response key={item.id} from={item.from} message={item} />;
        } else if (item.type === 'typing') {
          return <Typing key={item.id} from={item.from} message={item} />;
        } else {
          return null;
        }
      })}
    </ul>
  );
};

export default MessageHistory;

