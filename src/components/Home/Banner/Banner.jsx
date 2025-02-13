// import banner from '../../../assets/images/banner.jpg';
// import banner from '../../../../public/images/banner1.jpg';
// import banner from ''

const Banner = () => {
  return (
    <div className="banner mt-[50px]">
      <div className="container mx-auto">
        <div className="banner-main bg-[url('/images/banner1.jpg')] bg-no-repeat bg-cover rounded-[24px] h-[80%] lg:h-auto">
          <div className="w-[100%] lg:w-[80%] lg:mx-auto lg:flex flex-col items-center justify-center text-center px-[20px] py-[40px] lg:p-[130px]">
            <h1 className="text-white text-[30px] lg:text-[48px] font-bold mb-6">
              Discover an exceptional cooking class personalized for you!
            </h1>
            <p className="text-white text-[14px] font-normal lg:leading-5">
              Are you tired of the same old recipes and want to take your
              cooking to the next level? Join us for Mastery in the Kitchen a
              comprehensive cooking tutorial class designed to elevate your
              culinary skills and unleash your creativity in the kitchen. Led by
              experienced chefs, this hands-on class will cover essential
              techniques, flavor combinations, and presentation tips to help you
              create restaurant-quality dishes in the comfort of your own home.
            </p>
            <div className="space-x-1 space-y-2 lg:space-y-0 lg:space-x-5 mt-[20px] lg:mt-[40px]">
              <button className="px-[15px] lg:px-[25px] py-[10px] lg:py-[15px] rounded-[50px] bg-[#0BE58A] text-xl text-[#150B2B] font-semibold">
                Explore Now
              </button>
              <button className="px-[15px] lg:px-[25px] py-[10px] lg:py-[15px] rounded-[50px] border border-white text-xl text-[#fff] font-semibold">
                Our Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
