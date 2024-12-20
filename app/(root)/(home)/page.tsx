import MeetingTypeList from '@/components/MeetingTypeList';

const Home = () => {
  

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">Schedule Mock interviews with other Candidates</h1>
            
          </div>

          <h2 className="glassmorphism max-w-[273px] rounded py-2 text-center text-base font-normal">Share the interview link using your social media apps</h2>
         
          
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
