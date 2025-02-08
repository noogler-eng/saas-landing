import avatar1 from "../assets/avatar-1.png";
import avatar2 from "../assets/avatar-2.png";
import avatar3 from "../assets/avatar-3.png";
import avatar4 from "../assets/avatar-4.png";
import avatar5 from "../assets/avatar-5.png";
import avatar6 from "../assets/avatar-6.png";
import avatar7 from "../assets/avatar-7.png";
import avatar8 from "../assets/avatar-8.png";
import avatar9 from "../assets/avatar-9.png";
import Testimonial from "../components/Testimonial";

export default function Feedback() {
  const testimonials = [
    {
      text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
      imageSrc: avatar1,
      name: "Jamie Rivera",
      username: "@jamietechguru00",
    },
    {
      text: "Our team's productivity has skyrocketed since we started using this tool. ",
      imageSrc: avatar2,
      name: "Josh Smith",
      username: "@jjsmith",
    },
    {
      text: "This app has completely transformed how I manage my projects and deadlines.",
      imageSrc: avatar3,
      name: "Morgan Lee",
      username: "@morganleewhiz",
    },
    {
      text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
      imageSrc: avatar4,
      name: "Casey Jordan",
      username: "@caseyj",
    },
    {
      text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
      imageSrc: avatar5,
      name: "Taylor Kim",
      username: "@taylorkimm",
    },
    {
      text: "The customizability and integration capabilities of this app are top-notch.",
      imageSrc: avatar6,
      name: "Riley Smith",
      username: "@rileysmith1",
    },
    {
      text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
      imageSrc: avatar7,
      name: "Jordan Patels",
      username: "@jpatelsdesign",
    },
    {
      text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
      imageSrc: avatar8,
      name: "Sam Dawson",
      username: "@dawsontechtips",
    },
    {
      text: "Its user-friendly interface and robust features support our diverse needs.",
      imageSrc: avatar9,
      name: "Casey Harper",
      username: "@casey09",
    },
  ];

  const testimonialOne = testimonials.slice(0, 3).map((item, index) => {
    return <Testimonial item={item} key={index} />;
  });

  const testimonialTwo = testimonials.slice(3, 6).map((item, index) => {
    return <Testimonial item={item} key={index} />;
  });

  const testimonialThree = testimonials.slice(6, 9).map((item, index) => {
    return <Testimonial item={item} key={index} />;
  });

  return (
    <div className="bg-white flex flex-col items-center pt-20 gap-6 p-8">
      <div className="text-sm border rounded-lg border-gray-300 w-fit px-3">
        version 2.0 is here
      </div>
      <h1 className="text-3xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
        What our users say
      </h1>
      <p className="text-xl text-[#010D3E] tracking-tight w-full md:w-2/6 text-center">
        From intuitive design to powerful features, our app has become an
        essential tool for users around the world.
      </p>
      <div className="p-4 flex gap-2">
        <div className="flex flex-col gap-2 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.6),black,rgba(0,0,0,0.6))]">
          {testimonialOne}
        </div>
        <div className="hidden md:flex flex-col gap-2 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.6),black,rgba(0,0,0,0.6))]">
          {testimonialTwo}
        </div>
        <div className="hidden xl:flex flex-col gap-2 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.6),black,rgba(0,0,0,0.6))]">
          {testimonialThree}
        </div>
      </div>
    </div>
  );
}
