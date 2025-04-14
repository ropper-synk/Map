import ImageSlider from '../../components/ImageSlider';
import IonIcon from '../../components/IonIcon';
import Link from 'next/link';
import ModernCard from '../../components/ModernCard';
import Image from 'next/image';

const sliderImages = [
  '/Back  (1).jpg',
  '/Back  (2).jpg',
  '/Back  (3).jpg',
  '/Back  (4).jpg',
  '/Back  (5).jpg',
];

export default function AboutUs() {
  return (
    <div className="about-page">
      <div className="slider-container">
        <ImageSlider images={sliderImages} interval={6000} />
      </div>
      <div className="menu">
        <ul>
          <li className="link">
            <Link href="/" className="link-content">
              <span className="link-icon">
                <IonIcon name="home-outline" />
              </span>
              <span className="link-title">Home</span>
            </Link>
          </li>
          <li className="link">
            <Link href="/about" className="link-content">
              <span className="link-icon">
                <IonIcon name="information-circle-outline" />
              </span>
              <span className="link-title">About Us</span>
            </Link>
          </li>
          <li className="link">
            <Link href="/products" className="link-content">
              <span className="link-icon">
                <IonIcon name="cube-outline" />
              </span>
              <span className="link-title">Products</span>
            </Link>
          </li>
          <li className="link">
            <Link href="/owner" className="link-content">
              <span className="link-icon">
                <IonIcon name="business-outline" />
              </span>
              <span className="link-title">iFTX</span>
            </Link>
          </li>
          <li className="link">
            <Link href="/payment" className="link-content">
              <span className="link-icon">
                <IonIcon name="cart-outline" />
              </span>
              <span className="link-title">Buy Now</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="about-content">
        <h1 className="about-title">About Maggic Pot</h1>
        
        <div className="about-card-section">
          <ModernCard
            mediaSrc={["/Image.jpg", "/Image2.jpg"]}
            mediaAlt={["Maggic Pot Technology", "Maggic Pot Innovation"]}
            header=" Endorsed by Visionaries"
            subhead="Sharadchandra Govindrao Pawar"
            description={`Introducing the revolutionary Magic Pot, a groundbreaking innovation in self-heating food technology. 
                          This state-of-the-art solution combines cutting-edge engineering with user-friendly design to deliver hot, delicious 
                          meals instantly, anywhere, anytime.Our patented self-heating technology ensures consistent temperature control and optimal 
                          cooking conditions, making it perfect for both urban settings and rural areas where traditional cooking methods may be challenging.
                          As endorsed by Shri Hon. Sharad Pawar, "This innovation has the potential to transform everyday life, especially in rural settings 
                          and for those constantly on the move." The Magic Pot represents a significant step forward in making quality, hot meals accessible to everyone,
                          everywhere.`}
            primaryButtonText="Learn More"
            primaryButtonIcon="information-circle"
            secondaryButtonText="Watch Demo"
            secondaryButtonIcon="play-circle"
          />
        </div>

        <div className="about-description">
          <p>
            Welcome to Maggic Pot, where innovation meets convenience in the world of self-heating food technology.
            Our journey began with a simple vision: to revolutionize how people enjoy warm meals on the go.
          </p>
          <p>
            At Maggic Pot, we understand the challenges of modern life and the desire for hot, delicious meals
            without the constraints of traditional cooking methods. That&apos;s why we&apos;ve developed our cutting-edge
            self-heating technology that transforms the way you experience food.
          </p>
          <p>
            Our commitment to quality and safety is unwavering. Every Maggic Pot product undergoes rigorous
            testing and meets the highest industry standards, ensuring you can enjoy your meals with complete
            peace of mind.
          </p>
        </div>
      </div>
    </div>
  );
} 