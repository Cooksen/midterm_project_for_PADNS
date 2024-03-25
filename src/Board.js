import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Comments API
const API_ENDPOINT =
    "https://student-json-api.lidemy.me/comments?_sort=createdAt&_order=desc";

const Page = styled.div`
  max-width: 800px;
  margin: 0 auto;
  font-family: "monospace", "微軟正黑體";
  box-shadow: 0px 0px 16px rgb(199, 197, 197);
  border-radius: 8px;
  padding: 12px 28px;
  color: #6c6c6c;
  box-sizing: border-box;
`;

const Title = styled.h1`
  text-align: center;
`;

const MessageForm = styled.form`
  margin-top: 16px;
  font-size: 18px;
`;
const MessageLable = styled.div``;

const MessageTextArea = styled.textarea`
  display: block;
  margin-top: 8px;
  width: 95%;
  border-color: rgba(0, 0, 0, 0.125);
`;
const SubmitButton = styled.button`
  margin-top: 8px;
  color: #ddd;
  background-color: #343a40;
  border: 1px solid transparent;
  border-radius: 4px;
  font-size: 16px;
  padding: 6px 12px;
`;

const MessageList = styled.div`
  margin-top: 16px;
`;
const MessageContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.125);
  padding: 16px;
  border-radius: 4px;

  & + & {
    margin-top: 8px;
  }
`;

const MessageHead = styled.div`
  display: flex;
`;

const MessageAuthor = styled.div`
  margin-right: 12px;
  color: #232323;
`;

const MessageTime = styled.div``;

const MessageBody = styled.div`
  margin-top: 8px;
`;

const ErrorMessage = styled.div`
  margin-top: 16px;
  color: #db4c3f;
`;

function Message({ author, mes }) {
    return (
        <MessageContainer>
            <MessageHead>
                <MessageAuthor>From: {author}</MessageAuthor>
            </MessageHead>
            <div style={{ width: "100%", height: "2px", background: "grey" }} />
            <p style={{ marginRight: "0%" }}>Message:<br /></p>
            <MessageBody>{mes}</MessageBody>
        </MessageContainer>
    );
}



function Board() {
    const [messages, setMessages] = useState([]);
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !comment.trim()) return;
        const newMessage = { id: messages.length, name, mes: comment };
        setMessages([...messages, newMessage]);
        setName('');
        setComment('');
    };

    return (
        <div className="tokyo_tm_news">
        <Page>
            <Title>React 留言板</Title>
                <MessageLable>留言內容</MessageLable>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <input
                style={{width:"50%", height:"30px", margin:"50px, 0"}}
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="comment-input"
                />
                <textarea
                    style={{width:"50%", height:"100px", margin:"50px, 0"}}
                    placeholder="Your Comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="comment-textarea"
                />
                </div>
                <SubmitButton onClick={handleSubmit}>送出</SubmitButton>

            <MessageList>
                {messages.map((message) => (
                    <Message
                        // key={message.id}
                        author={message.name}
                        mes={message.mes}
                    >
                        {message.body}
                    </Message>
                ))}
            </MessageList>
        </Page>
        </div>
    );
}

export default Board;
