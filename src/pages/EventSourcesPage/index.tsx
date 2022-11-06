import Header from '../../components/Header';
import image1 from '../../assets/images/image2.png';
import image2 from '../../assets/images/image3.png';
import image3 from '../../assets/images/image4.png';
import image4 from '../../assets/images/image5.png';

export const EventSourcesPage = () => {
  return (
    <div className="w-full">
      <Header title="Event Sources" />
      <div className="flex flex-col items-center mt-32">
        <h6 className="font-bold mb-4">Connect with</h6>
        <div className="flex">
          <img src={image1} className="m-2 w-64 h-32" />
          <img src={image2} className="m-2 w-64 h-32" />
        </div>
        <div className="flex">
          <img src={image3} className="m-2 w-64 h-32" />
          <img src={image4} className="m-2 w-64 h-32" />
        </div>
      </div>
    </div>
  );
};
