// Interfaces and Types

export type message ={
    messageID: string;
    senderID: string;
    timestamp: string;
    content: string;
  };

export type RoomShcema = {
  roomID: string;
  participants: string[];
  messages: message[]
};

export type UserSchema = {
  userId: string;
  username: string;
  password: string;
  biography: string;
  profilePictureURL: string;
  contacts: string[];//their IDs
  chatRooms : string[]
};
