import React, { useState } from 'react';
import "./Message.css"
import { FaHome } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import logo from '../assests/nipun.png'
import { CiCirclePlus } from "react-icons/ci";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const conversations = [
  {
    id: 1,
    name: 'Alice',
    messages: [
      { id: 1, text: 'Hello!', sender: 'Alice' },
      { id: 2, text: 'Hi there!', sender: 'You' },
    ],
  },
  {
    id: 2,
    name: 'Bob',
    messages: [
      { id: 1, text: 'Hey!', sender: 'Bob' },
      { id: 2, text: 'How are you?', sender: 'You' },
    ],
  },
  // Add more dummy conversations as needed
];

const Message = () => {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const [clickedItem, setClickedItem] = useState(null);

  const handleConversationClick = (conversationId) => {
    setSelectedConversation(conversationId);
  };

  const toggleStyle = (id) => {
    if (clickedItem === id) {
      return {
        height: '55px',
        width: '88%',
        marginLeft: '20px',
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#2f2f2f',
      };
    } else {
      return {
        height: '55px',
        width: '88%',
        marginLeft: '20px',
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      };
    }
  };
  console.log(selectedConversation);
  return (
    <div className='Message'>
      <nav className='M_Navbar'>
        <div className='M_Nav_Item'>
            <h2>Logo | </h2>
            <div className='Nav_icon'><FaHome className='Icon'/> <h1>Explore</h1> </div>
            <div className='Nav_icon'><FaPen className='Icon1'/> <p>Create</p> </div>
            <div className='Nav_icon'><FaPen  className='Icon1'/> <p>Edit</p> </div>
        </div>
        <div className='M_Nav_Btn'>
            <button className='M_btn'>Login</button>
        </div>
      </nav>
      <section className='Chat_Container'>
        <div className='chat'>
            <div className='Chat_name'>
                <h2>ALL YOUR CHATS</h2>
                <button>Chat Images: ON </button>
                <p className='para'>When a bot send you images,you will be 
                charged one secondary image</p>
                  {/* <div className='name'> */}
                    {conversations.map((conversation,id) => (
                      <>
                <div className='Name_List' key={id}
                onClick={() => {
                  handleConversationClick(conversation);
                  setClickedItem(conversation.id);
                }}
                style={toggleStyle(conversation.id)}>
                      <div className='Name'>
                      <img src={logo} alt="" />
                      <div key={conversation.id} onClick={() => handleConversationClick(conversation.id)}>
                          <p className='Heading'>{conversation.name}</p>
                          <p className='bio'>Lorem ipsum dolor...</p>
                      </div>
                      </div>
                    </div>
                      <br />
                      </>
                    ))}
                    {/* </div> */}
                {/* </div> */}
                <hr className='Line'/>
                <div className='Add_bot'>
                    <CiCirclePlus className='Plus'/>
                    <h6 className='text'>Create new bot</h6>
                </div>
            </div>
            <div className='Chat_box'>
              {selectedConversation?
              <>
              <div className='Chat_Bar'>
                <div className='name1'>
                  <img src={logo}className='img_chat' alt="" />
                  <h2>{selectedConversation?.name}</h2>
                </div>
                <div className='btn_b_d'>
                <IoMdArrowRoundBack className='Back_l'/>
                  <button className='Back_btn'>Back</button>
                  <MdDelete className='Delete_l'/>
                  <button className='Delete_btn'>Delete</button>
                </div>
              </div>
              <div className='Chat_Area'>
                {
                  selectedConversation?.messages?.map((message)=>{
                    // console.log(message);
                    return(
                    <div key={message.id} className={message.sender === 'You' ? 'Chat_contain' : 'Chat_contain1'}>
                    <div className={message.sender === 'You' ? 'one' : 'two'}>
                  <div className='text_div'>
                  <h1>{message.text}</h1>
                  </div>
                    </div>
                  </div>
                    )
                  })
                }
              </div>
              <div className='Chat_input'>
                <input placeholder='Message..' type="text" className='input'/>
                <IoIosSend className='sendl' />
              </div>
              </>
              :
              <></>
            }
            </div>
        </div>
      </section>
      <div className='footer_contain'>
        <div className='footer'>
        <div className='f_icon'>Logo</div>
        <div className='f_logo'>
          <h2>Contact@00000000.tech</h2>
          <IoIosSend  className='iconn'/>
          <FaInstagram className='iconn'/>
          <FaFacebookF className='iconn'/>
        </div>
      </div>
        </div>
    </div>
  )
}

export default Message
