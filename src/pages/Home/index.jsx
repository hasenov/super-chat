import React from 'react';
import { Message } from '../../components';

const Home = () => {
  return (
    <div className="home">
      <div className="dialog">
        <Message 
          avatar="https://sun9-5.userapi.com/impf/c206816/v206816014/e7849/apBhq6hDZE0.jpg?size=100x0&quality=88&crop=10,10,2139,2139&sign=6051d1ad72ff809c0761269ecf0bcb53&ava=1" 
          text="date-fns includes some optional features as submodules in the npm package. Here is the list of them, in order of nesting." 
          date={new Date("Sun Sep 06 2020 00:02:13")} 
          attachments={[
            {
              filename: 'image.jpg',
              url: 'https://picsum.photos/100?random=1'
            },
            {
              filename: 'image.jpg',
              url: 'https://picsum.photos/100?random=2'
            },
            {
              filename: 'image.jpg',
              url: 'https://picsum.photos/100?random=3'
            }
          ]}
        />
        <Message 
          avatar="https://sun9-36.userapi.com/impf/c627819/v627819711/207f8/3XubVzFK6TQ.jpg?size=50x0&quality=88&crop=74,131,540,540&sign=8bf61ce993e28d6148484a5f30fb0db1&ava=1" 
          text="Hello world!" 
          date={new Date("Sun Sep 06 2020 00:05:13")} 
          isMe={true}
          
        />
      </div>
    </div>
  )
}

export default Home;
