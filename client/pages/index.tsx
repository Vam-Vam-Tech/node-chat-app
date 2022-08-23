import React from "react";
import Chat from "./../components/pages/List/Chat";
import { ChatMessage } from "./../components/pages/InChat";
import { ChatDetail } from "./../components/pages/Detail";

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
