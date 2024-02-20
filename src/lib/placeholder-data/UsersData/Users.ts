import { UserSchema } from "../../dataTypes";

export const Users: UserSchema[] = [
    {
      userId: "myid",
      username: "Nabil_Mouzouna",
      password: "123456",
      biography: "a Normal human",
      profilePictureURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/1200px-Flag_of_Morocco.svg.png",
      chatRooms : ["r00mWithMikasa","r00mWithLevi"],
      contacts: ["id1", "id2", "id4"]
    },
    {
      userId: "id1",
      username: "Mikasa_Ackerman",
      password: "123456",
      biography: "anti titans",
      profilePictureURL:"https://thicc-af.mywaifulist.moe/waifus/486/59fd859006ec1a65f9a0b25f37745bf9edf23632fa6a939f4a5505443c00cdee_thumb.png",
      chatRooms : ["r00mWithMikasa","r00mMikasaEren","r00mMikasaArmen"],
      contacts: ["myid", "id2", "id3", "id4"]
    },
    {
      userId: "id2",
      username: "Eren_Yeager",
      password: "123456",
      biography: "a titan",
      profilePictureURL:"https://i.scdn.co/image/ab67616d0000b273b737b927cb797285e0b52efe",
      chatRooms : ["r00mMikasaEren","r00mArmenEren"],
      contacts: ["id1", "id3", "id4"]
    },
    {
      userId: "id3",
      username: "armin_arlert ",
      password: "123456",
      biography: "a dreamer",
      profilePictureURL:"https://i.pinimg.com/736x/82/b5/0b/82b50b5a972c858ebac0ba3707c4b803.jpg",
      chatRooms : ["r00mMikasaArmen","r00mArmenEren"],
      contacts: ["id1", "id2"]
    },
    {
      userId: "id4",
      username: "Levi_Ackerman ",
      password: "123456",
      biography: "hard-soft",
      profilePictureURL:"https://dthezntil550i.cloudfront.net/ex/latest/ex2308291210197740025168464/1280_960/951e53a3-60ee-42ff-911d-665f60d15a24.png",
      chatRooms : ["r00mWithLevi"],
      contacts: ["myid"]
    },
  ];