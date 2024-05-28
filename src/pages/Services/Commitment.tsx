const Commitment = () => {
  const data = [
    {
      title: "Unwavering Principles",
      content:
        "ZSI is founded on the pillars of innovation, precision, and resilience. We practice what we preach, ensuring absolute alignment between our words and actions.",
    },
    {
      title: "Streamlined Operations",
      content:
        "Our processes are optimized for efficiency, enabling us to expedite project timelines while maintaining the highest standards of quality, delivering results faster than the industry norm.",
    },
    {
      title: "Strategic Guidance",
      content:
        "Beyond just executing tasks, ZSI offers strategic guidance to safeguard your market positioning and business growth, ensuring that each decision adds value to your enterprise.",
    },
    {
      title: "Expectations Exceeding Standards",
      content:
        "We prioritize a seamless client experience from start to finish, mitigating risks to ensure that your journey with us is smooth and free of unexpected challenges.",
    },
    {
      title: "Clear Communication",
      content:
        "With ZSI, your vision is articulated clearly across the board. Our team is equipped with excellent communication skills, ensuring no detail is ever lost.",
    },
    {
      title: "Punctual Project Completion",
      content:
        "Our dedicated project managers and agile methodology work in tandem to guarantee that your project crosses the finish line right on schedule.",
    },
    {
      title: "Expertise in Technology",
      content:
        "Leveraging a team of over 150 skilled professionals, ZSI grasps the nuances of sophisticated, scalable software development, delivering products that stand the test of time.",
    },
    {
      title: "Personalized Management",
      content:
        "At ZSI, you get a personal project manager, which means your project details stay with one expert, streamlining communication and efficiency.",
    },
    {
      title: "Responsive Communication",
      content:
        "Your satisfaction is pivotal to us. We maintain open lines of communication across multiple platforms to ensure you’re informed and engaged at every step.",
    },
  ];

  return (
    <div className=" animated-gradient my-5 mx-auto">
      <div className="mx-auto col-md-11 text-white row py-5">
        <h1 className="text-center accordion py-3">
          ZSI's Commitment to Excellence
        </h1>
        {data.map((d) => (
          <div className="col-md-4 my-3 p-3">
            <h3>{d.title}</h3>
            <p>{d.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Commitment;
