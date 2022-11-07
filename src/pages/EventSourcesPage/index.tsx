import Header from '../../components/Header';

export const EventSourcesPage = () => {
  return (
    <div className="w-full">
      <Header title="Event Sources" />
      <div className="flex flex-col items-center mt-32">
        <h6 className="font-bold mb-4">Connect with</h6>
        <div className="flex">
          <img src={'/images/image2.png'} className="m-2 w-64 h-32" />
          <img src={'/images/image3.png'} className="m-2 w-64 h-32" />
        </div>
        <div className="flex">
          <img src={'/images/image4.png'} className="m-2 w-64 h-32" />
          <img src={'/images/image5.png'} className="m-2 w-64 h-32" />
        </div>
      </div>
    </div>
  );
};
