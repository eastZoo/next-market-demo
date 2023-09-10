import getCurrentUser from "../actions/getCurrentUser";
import ChatClient from "./ChatClient";

const ChatPage = async () => {
  const currentUser: any = getCurrentUser();

  return <ChatClient currentUser={currentUser} />;
};

export default ChatPage;
