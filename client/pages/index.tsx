import React from "react";
import { Chat, ChatDetail, ChatMessage } from "./Chat";

const Home = () => {
	return (
		<div className="h-screen w-full bg-gray-900 grid grid-cols-12">
      <div className="col-span-3">
        <Chat/>
      </div>
      <div className="col-span-6">
        <ChatMessage/>
      </div>
      <div className="col-span-3">
        <ChatDetail/>
      </div>
		</div>
	);
};

export default Home;
