import { RoomShcema } from "../../dataTypes";

export const Rooms: RoomShcema[] = [
    {
      roomID: "r00mWithMikasa",
      participants: ["id1","myid"],
      messages: [
        {
          messageID: "message1",
          senderID: "myid",
          timestamp: "12:30",
          content: "Hello Mikasa!",
        },
      ],
    },
    {
      roomID: "r00mWithLevi",
      participants: ["id4","myid"],
      messages: [
        {
          messageID: "message2",
          senderID: "myid",
          timestamp: "12:30",
          content: "Hello Levi",
        },
      ],
    },
    {
      roomID: "r00mMikasaEren",
      participants: ["id2","id1"],
      messages: [
        {
          messageID: "message3",
          senderID: "id1",
          timestamp: "12:30",
          content: "Hello Eren",
        },
      ],
    },
    {
      roomID: "r00mMikasaArmen",
      participants: ["id1","id3"],
      messages: [
        {
          messageID: "message4",
          senderID: "id3",
          timestamp: "12:30",
          content: "Hello Mikasa",
        },
      ],
    },
    {
      roomID: "r00mArmenEren",
      participants: ["id2","id3"],
      messages: [
        {
          messageID: "message5",
          senderID: "id3",
          timestamp: "12:30",
          content: "Hello Eren",
        },
      ],
    },
  ];