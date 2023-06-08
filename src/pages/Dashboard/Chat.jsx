import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
function Chat() {
  const chatJson = [
    {
      name: "David",
      chat: "Nyc to meet you",
      icon: <i class='fa fa-user' aria-hidden='true'></i>,
      time: "15 min ago",
      //   fire: <i class='fa fa-fire' aria-hidden='true'></i>,
      //   star: <i class='fa fa-star' aria-hidden='true'></i>,
      //   dislike: <i class='fa fa-thumbs-down' aria-hidden='true'></i>,
      //   delete: <i class='fa fa-ban' aria-hidden='true'></i>,
      //   check: <i class='fa fa-check-circle-o' aria-hidden='true'></i>,
    },
    {
      name: "Christopher",
      chat: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis molestiae veniam, libero alias eos magni quas",
      icon: <i class='fa fa-user' aria-hidden='true'></i>,
      time: "02 hour ago",

      //   fire: <i class='fa fa-fire' aria-hidden='true'></i>,
      //   star: <i class='fa fa-star' aria-hidden='true'></i>,
      //   dislike: <i class='fa fa-thumbs-down' aria-hidden='true'></i>,
      //   delete: <i class='fa fa-ban' aria-hidden='true'></i>,
      //   check: <i class='fa fa-check-circle-o' aria-hidden='true'></i>,
    },
    {
      name: "Albert",
      chat: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis molestiae veniam, libero alias eos magni quas",
      icon: <i class='fa fa-user' aria-hidden='true'></i>,
      time: "56 min ago",

      //   fire: <i class='fa fa-fire' aria-hidden='true'></i>,
      //   star: <i class='fa fa-star' aria-hidden='true'></i>,
      //   dislike: <i class='fa fa-thumbs-down' aria-hidden='true'></i>,
      //   delete: <i class='fa fa-ban' aria-hidden='true'></i>,
      //   check: <i class='fa fa-check-circle-o' aria-hidden='true'></i>,
    },
    {
      name: "John",
      chat: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis molestiae veniam, libero alias eos magni quas",
      icon: <i class='fa fa-user' aria-hidden='true'></i>,
      time: "Sun",

      //   fire: <i class='fa fa-fire' aria-hidden='true'></i>,
      //   star: <i class='fa fa-star' aria-hidden='true'></i>,
      //   dislike: <i class='fa fa-thumbs-down' aria-hidden='true'></i>,
      //   delete: <i class='fa fa-ban' aria-hidden='true'></i>,
      //   check: <i class='fa fa-check-circle-o' aria-hidden='true'></i>,
    },
    {
      name: "Rocky",
      chat: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis molestiae veniam, libero alias eos magni quas",
      icon: <i class='fa fa-user' aria-hidden='true'></i>,
      time: "Mon",

      //   fire: <i class='fa fa-fire' aria-hidden='true'></i>,
      //   star: <i class='fa fa-star' aria-hidden='true'></i>,
      //   dislike: <i class='fa fa-thumbs-down' aria-hidden='true'></i>,
      //   delete: <i class='fa fa-ban' aria-hidden='true'></i>,
      //   check: <i class='fa fa-check-circle-o' aria-hidden='true'></i>,
    },
    {
      name: "Zohaib",
      chat: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis molestiae veniam, libero alias eos magni quas",
      icon: <i class='fa fa-user' aria-hidden='true'></i>,
      time: "Tue",

      //   fire: <i class='fa fa-fire' aria-hidden='true'></i>,
      //   star: <i class='fa fa-star' aria-hidden='true'></i>,
      //   dislike: <i class='fa fa-thumbs-down' aria-hidden='true'></i>,
      //   delete: <i class='fa fa-ban' aria-hidden='true'></i>,
      //   check: <i class='fa fa-check-circle-o' aria-hidden='true'></i>,
    },
    {
      name: "Wasif",
      chat: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis molestiae veniam, libero alias eos magni quas",
      icon: <i class='fa fa-user' aria-hidden='true'></i>,
      time: "Wed",

      //   fire: <i class='fa fa-fire' aria-hidden='true'></i>,
      //   star: <i class='fa fa-star' aria-hidden='true'></i>,
      //   dislike: <i class='fa fa-thumbs-down' aria-hidden='true'></i>,
      //   delete: <i class='fa fa-ban' aria-hidden='true'></i>,
      //   check: <i class='fa fa-check-circle-o' aria-hidden='true'></i>,
    },
  ];

  return (
    <>
      <Container maxWidth='lg'>
        <div className='md:absolute top-24 '>
          {chatJson.map((chat, index) => (
            <div className='hover:bg-gray-200 rounded-lg p-3' key={index}>
              <div className='flex    '>
                <div className='flex w-full'>
                  <div className='mt-3'>
                    <span className='border-2  rounded-full p-4 px-5 text-xl bg-purple-500 text-white'>
                      {chat.icon}
                    </span>
                  </div>
                  <div className=' ml-4'>
                    <h3 className='font-bold '>{chat.name}</h3>
                    <p className='text-inline'>
                      {" "}
                      {/* {chat.chat.split(" ").slice(0, 3).join(" ")} */}
                      {chat.chat}
                    </p>
                  </div>
                </div>

                <div className='flex justify-end md:w-96 lg:w-96 '>
                  <ul>
                    <li className='text-xs mt-2 truncate ...'>{chat.time}</li>
                  </ul>
                </div>
                {/* <hr className='border-1 border-black ' /> */}
                <br />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}

export default Chat;
