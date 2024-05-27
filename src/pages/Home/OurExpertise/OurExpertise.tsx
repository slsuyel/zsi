import innovation1 from "../../../assets/icons/expertise-color-Blockchain.png";
import innovation2 from "../../../assets/icons/expertise-color-ML.png";
import innovation3 from "../../../assets/icons/expertise-color-Artificial.png";
import frontend1 from "../../../assets/icons/expertise-color-js.png";
import frontend2 from "../../../assets/icons/expertise-color-Reactjs.png";
import frontend3 from "../../../assets/icons/expertise-color-angular.png";
import frontend4 from "../../../assets/icons/expertise-color-Vue.png";
import cloud1 from "../../../assets/icons/expertise-color-Azure.png";
import cloud2 from "../../../assets/icons/expertise-color-aws.png";
import cloud3 from "../../../assets/icons/expertise-color-GoogleCloud.png";
import data1 from "../../../assets/icons/expertise-color-mongoDB.png";
import data2 from "../../../assets/icons/expertise-color-Couchbase.png";
import data3 from "../../../assets/icons/expertise-color-Hadoop.png";
import data4 from "../../../assets/icons/expertise-color-spark.png";
import mobile1 from "../../../assets/icons/expertise-color-Android.png";
import mobile3 from "../../../assets/icons/expertise-color-ReactNative.png";
import mobile2 from "../../../assets/icons/expertise-color-IOS.png";
import mobile4 from "../../../assets/icons/expertise-color-Xamarin.png";
import mobile5 from "../../../assets/icons/expertise-color-swift.png";
import mobile6 from "../../../assets/icons/expertise-color-Kotlin.png";
import back1 from "../../../assets/icons/expertise-color-NetCore.png";
import back2 from "../../../assets/icons/expertise-color-asp.png";
import back3 from "../../../assets/icons/expertise-color-net.png";
import back4 from "../../../assets/icons/expertise-color-nodejs.png";
import back5 from "../../../assets/icons/laravel.png";
import back6 from "../../../assets/icons/expertise-color-java.png";
import back7 from "../../../assets/icons/expertise-color-csharp.png";
import back8 from "../../../assets/icons/expertise-color-RubyonRails.png";

const expertiseCategories = [
  {
    title: "INNOVATIONS",
    icons: [innovation1, innovation2, innovation3],
  },

  {
    title: "CLOUD NATIVE DEVELOPMENT",
    icons: [cloud1, cloud2, cloud3],
  },
  {
    title: "DATA ENGINEERING ",
    icons: [data1, data2, data3, data4],
  },
  {
    title: "FRONT END DEVELOPMENT",
    icons: [frontend1, frontend2, frontend3, frontend4],
  },

  {
    title: "MOBILE",
    icons: [mobile1, mobile2, mobile4, mobile5, mobile6, mobile3],
  },
  {
    title: "BACK END",
    icons: [back1, back2, back3, back4, back5, back6, back7, back8],
  },
];

const OurExpertise = () => {
  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="2000"
      className="my-5 p-2 text-white"
      style={{ background: "#0d0a2b" }}
    >
      <div className="col-md-11 mx-auto ">
        <div className="p-3">
          {" "}
          <h1 data-aos="fade-right">Our Expertise</h1>
          <h6 data-aos="fade-right">
            Our End-To-End Global Design And Development Expertise And Broad
            Product Portfolio Lead To Innovative Cost-Effective Business
            Solutions.
          </h6>
          <br />
          <br />
        </div>
        {expertiseCategories.map((category, index) => (
          <div key={index} className="align-items-center d-flex gap-2 mb-4">
            <div className="align-items-center d-flex flex-wrap gap-2 justify-content-center">
              <div className="title-wrap-skill ">
                <h6
                  className=""
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  {category.title}
                </h6>
              </div>
              {category.icons.map((icon, idx) => (
                <div className="bg-white img-wrap rounded">
                  {" "}
                  <img
                    key={idx}
                    src={icon}
                    alt=""
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="500"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurExpertise;
