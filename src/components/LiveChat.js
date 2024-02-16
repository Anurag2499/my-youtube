import React, { useEffect, useState } from 'react';
import LiveMessage from './LiveMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, generateRandomString } from '../utils/helper';

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    const i = setInterval(() => {
      // call the api
      console.log('LiveChat');

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomString(10),
        })
      );
    }, 1000);

    return () => {
      clearInterval(i);
    };
  }, []);

  const messages = useSelector((store) => store.chat.message);
  return (
    <div className="border    border-black h-[500px] mx-6 mt-4 rounded-lg bg-slate-100 flex flex-col ">
      <div className=" z-10 bg-slate-300  px-4 py-2 font-bold  text-xl rounded-t-lg border border-gray-800">
        Live Chat Message
      </div>
      <div className="flex flex-col-reverse flex-1 overflow-y-auto">
        {messages.map((m, i) => (
          <LiveMessage key={i} name={m.name} message={m.message} />
        ))}
      </div>
      <form
        className="border border-black w-full p-2  rounded-b-lg "
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: 'Anurag Singh',
              message: liveMessage,
            })
          );
          setLiveMessage('');
        }}
      >
        <input
          type="text"
          placeholder="Chat on live server"
          className="border border-black w-[340px] py-1 px-2 m-1 rounded-md"
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
          value={liveMessage}
        />
        <button className="bg-black text-white py-1 px-2 m-1 rounded-md">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
