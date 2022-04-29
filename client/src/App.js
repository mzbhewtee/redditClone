import Header from './Header';
import PageHeader from './PageHeader';
import Post from './Post';


export default function App() {
  return (
    <div>
      <Header />
      <PageHeader />
      <Post />
      <div className='px-6 bg-redditDark text-redditText'>
        <div className='border border-redditborder bg-redditDark-lightt p-2 rounded-md'>
          <h5 className='text-redditText-darker text-sm mb-1'>Posted by Beauty 3 hours ago</h5>
          <h2 className='text-2xl mb-3'>Impress your family and friends with these 20 fascinating and fun facts about Mars...</h2>
          <div className='text-sm leading-6'>
          1. Mars is also known as the Red Planet. This is because Mars is covered in soil, rock, and dust made from iron oxide which gives the surface a red rusty colour.
        
          2. Mars is named after the Roman god of war.
        
          3. Mars has 2 moons called Deimos and Phobos. They are named after the two horses that pull the Roman god of war, Mars’, chariot. They may be asteroids captured by Mars’ gravity.
        
          4. Mars is the 4th planet from the sun. It is 227,936,637 km (141 million miles) away from the sun. It would take 300 days (around 8 months) to get there from Earth.
        
          5. Mars is smaller than Earth with a diameter of 4217 miles. This makes it the second smallest planet in our solar system.
        
          6. A day on Mars lasts 24 hours and 37 minutes.
        
          7. One year on Mars is 687 days long. That’s 1.9 Earth years. This is because Mars is further away from the sun so it takes longer to orbit it.
        
          The tilt on the axis of Mars is 25 degrees which means that the planet experiences seasons like we do on Earth as different parts of the planet are closer to the sun at different times of its orbit.
        
          Mars has a thin atmosphere made from 95.9% carbon dioxide and 2.7% nitrogen. The atmosphere is so thin that it’s not thick enough to trap the sun’s heat so it is very cold - ranging from -100℃ in winter to 20℃  in summer.

          </div>
        </div>
      </div>
    </div>
    
  );
}
