import React from "react";
import tshirtfront from "../../assets/Carousel_Tshirt/tshirt_front.png";
import tshirtback from "../../assets/Carousel_Tshirt/tshirt_back.png";
import tshirtdesign from "../../assets/Carousel_Tshirt/tshirt_design.png";
import tshirtfull from "../../assets/Carousel_Tshirt/tshirt_full.png";

const TShirtCTA = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row py-24 gap-16 bg-base-200 px-4 lg:px-16">
      <div className="lg:w-1/3 mx-4 flex justify-center items-center">
        <div
          id="carouselExampleCaptions1"
          className="carousel slide relative carousel-fade carousel-dark shadow-xl rounded-2xl border-4 border-primary my-12 w-96 py-2"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators absolute bottom-4 left-0 flex flex-col gap-7 p-0 mb-8 ml-4 opacity-80">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions1"
              data-bs-slide-to="0"
              className="active border-t-0 border-2 border-primary"
              aria-current="true"
              aria-label="Slide 1"
            >
              <img
                src={tshirtfront}
                className="object-cover w-9 h-9 ring-2 p-0.5 ring-base-100 rounded-md transition duration-300"
              />
            </button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions1"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            >
              <img
                src={tshirtback}
                className="object-cover w-9 h-9 ring-2 p-0.5 ring-base-100 rounded-md transition duration-300"
              />
            </button>
            <button
              className=""
              type="button"
              data-bs-target="#carouselExampleCaptions1"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            >
              <img
                src={tshirtfull}
                className="object-contain w-9 h-9 ring-2 p-0.5 ring-base-100 rounded-md transition duration-300"
              />
            </button>
            <button
              className=""
              type="button"
              data-bs-target="#carouselExampleCaptions1"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            >
              <img
                src={tshirtdesign}
                className="object-contain w-9 h-9 ring-2 p-0.5 ring-base-100 rounded-md transition duration-300"
              />
            </button>
          </div>
          <div className="carousel-inner relative w-full overflow-hidden ml-8">
            <div className="carousel-item active relative float-left w-full">
              <img
                src={tshirtfront}
                className="block w-full h-96 object-cover p-4"
                alt="..."
              />
            </div>
            <div className="carousel-item relative float-left w-full">
              <img
                src={tshirtback}
                className="block w-full h-96 object-cover p-4"
                alt="..."
              />
            </div>
            <div className="carousel-item relative float-left w-full">
              <img
                src={tshirtfull}
                className="block w-full h-96 object-contain lg:p-4 pl-8"
                alt="..."
              />
            </div>
            <div className="carousel-item relative float-left w-full">
              <img
                src={tshirtdesign}
                className="block w-full h-96 object-contain lg:p-4 pl-8 py-8"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-4 flex flex-col justify-center items-center lg:items-start">
        <h2 className="text-5xl font-extrabold text-center lg:text-start">
          Get our official merchandise
        </h2>
        <p className="mt-8 text-center lg:text-start">
          Instruo 2023 is back with a bang, this time with a statement Tee!
          <br />
          Behold the uber-cool, ultra chic Instruo 2023 Tshirt! <br />
          Flaunt this supercool and stylish tee and become a part of the new
          rage this February! <br />
          Complete your ensemble by acquiring this funky, avant-garde T-Shirt
          and get some vibrant snapshots to show the world where you belong!
          <br />
          Set the trend with Instruo 2023!
        </p>
        <a
          href="https://forms.gle/afzw2MY6JKPF9gp36"
          target="__blank"
          className="btn btn-primary btn-wide rounded-full mb-4 mt-10 tracking-wide"
        >
          Get your t-shirt now
        </a>
      </div>
    </div>
  );
};

export default TShirtCTA;
