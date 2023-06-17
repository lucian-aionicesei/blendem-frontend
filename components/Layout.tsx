import Header from "./Header";
import SiteFooter from "./SiteFooter";
import React, { useState, useEffect } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  // console.log(isLoading);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  return (
    <div>
      <div className="absolute h-screen w-full top-0 left-0 z-[100] flex items-center justify-center pointer-events-none">
        <div className="relative w-full h-full">
          <div
            className={`${
              isLoading ? " -translate-y-full" : "translate-y-0"
            } ease-in-out duration-500 delay-[2000ms] absolute top-0 left-0 w-full h-full bg-project-black`}
          ></div>
          <div
            className={`${
              isLoading ? " -translate-y-full" : "translate-y-0"
            } ease-in-out duration-500 delay-[1500ms] w-full h-full flex flex-col bg-project-dark-black items-center justify-center gap-y-3 md:gap-y-5`}
          >
            <div
              className={`flex gap-x-2 duration-500 ease-in-out ${
                isLoading
                  ? "translate-x-0 opacity-100"
                  : "translate-x-1/2 opacity-0"
              }`}
            >
              <svg
                className=" h-10 md:h-auto w-fit"
                xmlns="http://www.w3.org/2000/svg"
                width="55.441"
                height="55.777"
                viewBox="0 0 55.441 55.777"
              >
                <path
                  id="Path_19"
                  data-name="Path 19"
                  d="M214.2,310.814V255.037h35.785a17.921,17.921,0,0,1,9.87,2.561,15.369,15.369,0,0,1,5.838,6.6,19.958,19.958,0,0,1,1.848,8.4A14.04,14.04,0,0,1,264.094,282a13.514,13.514,0,0,1,4.158,5.04,14.405,14.405,0,0,1,1.386,6.217,19.568,19.568,0,0,1-1.89,8.4,15.643,15.643,0,0,1-5.88,6.593,18.061,18.061,0,0,1-9.954,2.563Zm15.036-34.693h20.749a2.287,2.287,0,0,0,1.848-.8,3.356,3.356,0,0,0,.672-2.226v-1.512a3.36,3.36,0,0,0-.672-2.226,2.289,2.289,0,0,0-1.848-.8H229.233Zm0,21.252h22.681a2.33,2.33,0,0,0,1.932-.839,3.528,3.528,0,0,0,.672-2.269v-1.6a3.361,3.361,0,0,0-.672-2.227,2.388,2.388,0,0,0-1.932-.8H229.233Z"
                  transform="translate(-214.197 -255.037)"
                  fill="#fff"
                />
              </svg>
              <svg
                className={` h-10 md:h-auto w-fit duration-300 ease-in-out ${
                  isLoading
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                width="45.277"
                height="55.777"
                viewBox="0 0 45.277 55.777"
              >
                <path
                  id="Path_12"
                  data-name="Path 12"
                  d="M275.162,255.037H290.2v42.336h30.241v13.441H275.162Z"
                  transform="translate(-275.162 -255.037)"
                  fill="#fff"
                />
              </svg>
              <svg
                className={` h-10 md:h-auto w-fit duration-300 ease-in-out delay-75 ${
                  isLoading
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                width="54.35"
                height="55.777"
                viewBox="0 0 54.35 55.777"
              >
                <path
                  id="Path_14"
                  data-name="Path 14"
                  d="M327.868,255.037h54.35v13.524H342.9v7.671h29.849V289.06H342.9v8.313h39.313v13.441h-54.35Z"
                  transform="translate(-327.868 -255.037)"
                  fill="#fff"
                />
              </svg>
              <svg
                className={` h-10 md:h-auto w-fit duration-300 ease-in-out delay-100 ${
                  isLoading
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                width="62.926"
                height="55.777"
                viewBox="0 0 62.926 55.777"
              >
                <path
                  id="Path_13"
                  data-name="Path 13"
                  d="M389.647,255.037h14.492l31.273,31.332V255.037h17.161v55.777l-17.442-.042L406.713,279.4v31.417H389.647Z"
                  transform="translate(-389.647 -255.037)"
                  fill="#fff"
                />
              </svg>
              <svg
                className={` h-10 md:h-auto w-fit duration-300 ease-in-out delay-150 ${
                  isLoading
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                width="98.03"
                height="55.777"
                viewBox="0 0 98.03 55.777"
              >
                <g
                  id="Group_9"
                  data-name="Group 9"
                  transform="translate(354.998 -255.037)"
                >
                  <path
                    id="Path_16"
                    data-name="Path 16"
                    d="M515.158,276.232a27.258,27.258,0,0,0-2.773-7.968c-4.32-7.976-12.855-13.227-25.814-13.227H460v55.777h26.569c12.9,0,21.28-5.371,25.614-13.307a28.538,28.538,0,0,0,2.955-8.447,35.5,35.5,0,0,0,.595-6.533A33.914,33.914,0,0,0,515.158,276.232ZM499.064,289.06c-1.673,4.8-5.49,8.447-12.493,8.447H475.62V268.264h12.722c5.809.527,9.223,3.687,10.769,7.968a18.075,18.075,0,0,1,1.007,6.135A20.448,20.448,0,0,1,499.064,289.06Z"
                    transform="translate(-815)"
                    fill="#fff"
                  />
                  <g id="Group_8" data-name="Group 8">
                    <path
                      id="Path_17"
                      data-name="Path 17"
                      d="M522.562,289.06h26.006V276.232H522.581a41.876,41.876,0,0,1,.481,6.3A43.274,43.274,0,0,1,522.562,289.06Z"
                      transform="translate(-815)"
                      fill="#fff"
                    />
                    <path
                      id="Path_18"
                      data-name="Path 18"
                      d="M520.428,268.264h37.6V255.037H508.445C515.2,258.5,518.17,262.429,520.428,268.264Z"
                      transform="translate(-815)"
                      fill="#fff"
                    />
                    <path
                      id="Path_20"
                      data-name="Path 20"
                      d="M520.428,297.507h37.6v13.227H508.445C515.2,307.268,518.17,303.342,520.428,297.507Z"
                      transform="translate(-815)"
                      fill="#fff"
                    />
                  </g>
                </g>
              </svg>
              <svg
                className={` h-10 md:h-auto w-fit duration-300 ease-in-out delay-200 transition-all ${
                  isLoading
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                width="62.232"
                height="55.777"
                viewBox="0 0 62.232 55.777"
              >
                <path
                  id="Path_15"
                  data-name="Path 15"
                  d="M612.075,277.586l-14.262,16.893h-2.79l-13.944-16.813v33.148H565.461V255.037h16.495l14.662,18.885,14.661-18.885h16.414v55.777H612.075Z"
                  transform="translate(-565.461 -255.037)"
                  fill="#fff"
                />
              </svg>
            </div>
            <svg
              className={` duration-300 delay-500 ease-in-out h-3 md:h-auto w-fit ${
                isLoading
                  ? "translate-y-0 opacity-100"
                  : " -translate-y-full opacity-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              width="272.365"
              height="14.247"
              viewBox="0 0 272.365 14.247"
            >
              <g
                id="Group_1"
                data-name="Group 1"
                transform="translate(-288.472 -325.672)"
              >
                <path
                  id="Path_2"
                  data-name="Path 2"
                  d="M290.664,335.418v4.207h-2.192v-13.7c2.094,0,4.247-.019,6.341-.019,6.536,0,6.556,9.472,0,9.511Zm0-2.016h4.149c3.621,0,3.6-5.48,0-5.48h-4.149Z"
                  fill="#fff"
                />
                <path
                  id="Path_3"
                  data-name="Path 3"
                  d="M329.472,339.625h-2.563l-4.169-4.736h-2.9v4.736h-2.192V325.907c2.134,0,4.247.019,6.38.019a4.467,4.467,0,0,1,4.834,4.482,4.043,4.043,0,0,1-3.718,4.266l4.09,4.56Zm-9.628-11.7v4.971h4.169a2.36,2.36,0,0,0,2.622-2.446,2.439,2.439,0,0,0-2.6-2.525Z"
                  fill="#fff"
                />
                <path
                  id="Path_4"
                  data-name="Path 4"
                  d="M360.59,332.835c0,3.7-2.251,7.084-7.006,7.084s-7.006-3.464-7.006-7.065a6.85,6.85,0,0,1,7.045-7.182C358.3,325.691,360.59,329.136,360.59,332.835Zm-7.006,5.068c3.4,0,4.834-2.407,4.834-5.029,0-2.525-1.448-5.147-4.8-5.206-3.17,0-4.873,2.211-4.873,5.206C348.79,335.3,350.2,337.9,353.584,337.9Z"
                  fill="#fff"
                />
                <path
                  id="Path_5"
                  data-name="Path 5"
                  d="M384.037,325.926a6.85,6.85,0,1,1,0,13.7H378.85v-13.7Zm-3.014,11.586h3.014a4.746,4.746,0,0,0,0-9.491h-3.014Z"
                  fill="#fff"
                />
                <path
                  id="Path_6"
                  data-name="Path 6"
                  d="M420.634,325.946v8c0,4.032-2.662,6.047-5.969,5.93a5.519,5.519,0,0,1-5.656-5.93v-8h2.173v8c0,2.486,1.448,3.836,3.483,3.914,2.192.118,3.8-1.311,3.8-3.914v-8Z"
                  fill="#fff"
                />
                <path
                  id="Path_7"
                  data-name="Path 7"
                  d="M451.085,337.864a7.18,7.18,0,0,1-5.146,2.035c-4.972,0-7.2-3.425-7.222-7.025a6.857,6.857,0,0,1,7.222-7.183,7,7,0,0,1,5.01,2.075l-1.468,1.409a5.031,5.031,0,0,0-3.542-1.409,4.8,4.8,0,0,0-5.049,5.088,4.727,4.727,0,0,0,5.049,4.991,5.307,5.307,0,0,0,3.639-1.488Z"
                  fill="#fff"
                />
                <path
                  id="Path_8"
                  data-name="Path 8"
                  d="M472.086,327.9h-4.5v-1.977h11.194V327.9H474.3v11.722h-2.21Z"
                  fill="#fff"
                />
                <path
                  id="Path_9"
                  data-name="Path 9"
                  d="M496.491,339.625v-13.7h2.172v13.7Z"
                  fill="#fff"
                />
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M530.933,332.835c0,3.7-2.25,7.084-7.005,7.084s-7.007-3.464-7.007-7.065a6.852,6.852,0,0,1,7.047-7.182C528.644,325.691,530.933,329.136,530.933,332.835Zm-7.005,5.068c3.405,0,4.834-2.407,4.834-5.029,0-2.525-1.449-5.147-4.794-5.206-3.172,0-4.874,2.211-4.874,5.206C519.133,335.3,520.543,337.9,523.928,337.9Z"
                  fill="#fff"
                />
                <path
                  id="Path_11"
                  data-name="Path 11"
                  d="M558.646,335.672v-9.746h2.191v13.7h-1.662l-7.77-9.667v9.667h-2.211v-13.7h1.683Z"
                  fill="#fff"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <Header />
      {children}
      <SiteFooter />
    </div>
  );
};

export default Layout;
