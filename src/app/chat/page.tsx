import getCurrentUser from "../actions/getCurrentUser";
import ChatClient from "./ChatClient";

const ChatPage = async () => {
  const currentUser: any = await getCurrentUser();

  return <ChatClient currentUser={currentUser} />;
};

export default ChatPage;
