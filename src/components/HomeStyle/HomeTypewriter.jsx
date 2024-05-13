
import Marquee from 'react-fast-marquee';
import { Typewriter } from 'react-simple-typewriter'

const HomeTypewriter = () => {

  return (
    <div className='App lg:my-14 my-5 lg:mx-20'>
        <Marquee>
            <div className='border-2 my-4 lg:my-8 border-red-900 w-screen border-dashed '></div>
        </Marquee>
      <h1 style={{  margin: 'auto 0', fontWeight: 'normal', fontSize:48, textAlign:'center' }}>
        <span className="oleo lg:text-6xl">Embark </span>
         on a <span className="acme lg:text-6xl">journey</span>  of{' '}
        <span style={{ color: 'red', fontWeight: 'bold', fontSize:48, }} className='acme font-bold lg:text-7xl'>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Taste!', 'Flavour!', 'Innovation', 'Hospitality', 'Excellence!']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={150}
            deleteSpeed={50}
            delaySpeed={1000}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
        </span>
      </h1>
      <Marquee>
            <div className='border-2 my-4 lg:my-8 border-red-900 w-screen border-dashed '></div>
        </Marquee>
    </div>
  );
};

export default HomeTypewriter;