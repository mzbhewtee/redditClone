import reddit_avatar from './reddit_avatar.png';

export default function Post(){
    return(
    <div className='bg-redditDark px-6 py-4 text-gray-400'>
        <div className='border border-redditborder p-2 rounded-md flex bg-redditDark-lightt'>
          <div className='rounded-full bg-gray-400 overflow-hidden w-10 h-10'>
            <img src={reddit_avatar} style={{filter:'invert(100%)'}} alt=""></img>
          </div>
          <form action='' className='flex-grow bg-reddit_dark-brighter border border-redditborder ml-4 mr-2 rounded-md'>
            <input type='text' className='bg-redditDark-light p-2 px-3 text-sm block w-full rounded-md' placeholder='New post'></input> 
          </form>
        </div>
    </div>
    );
}