"use client";
import { User } from "@prisma/client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { TUserWithChat } from "@/types";
interface ChatClientProps {
  currentUser?: User | null;
}
const ChatClient = ({ currentUser }: ChatClientProps) => {
  const [receiver, setReceiver] = useState({
    receiverId: "",
    receiverName: "",
    receiverImage: "",
  });

  const [layout, setLayout] = useState(false);

  const fetcher = async (url: string) =>
    await axios.get(url).then((res) => res.data);
  const {
    data: users,
    error,
    isLoading,
  } = useQuery(["api-chat"], () => fetcher("/api/chat"), {
    refetchInterval: 1000,
  });

  const currentUserWithMessage = users?.find(
    (user: TUserWithChat) => user.email === currentUser?.email
  );

  console.log(currentUserWithMessage);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  console.log(users);
  console.log(currentUser);

  return (
    <main>
      <div className="grid grid-cols-[1fr] md:grid-cols-[300px_1fr]">
        {/* md 보다 클 때는 둘 다 보여야함. */}
        {/* md 보다 작고 layout이 true 일 때는 contact 안보임 */}
        <section className={`md:flex ${layout && "hidden"}`}>
          Contact Component
        </section>

        {/* md 보다 클 때는 둘 다 보여야함. */}
        {/* md 보다 작고 layout이 false 일 때는 chat 안보임 */}
        <section className={`md:flex ${!layout && "hidden"}`}>
          Chat Component
        </section>
      </div>
    </main>
  );
};

export default ChatClient;
