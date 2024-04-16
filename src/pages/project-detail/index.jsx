import React from "react";
import { useParams } from "react-router-dom";
import { cardData } from "../../data/home";

export const ProjectDetail = () => {
  const params = useParams();
  const result = cardData.find((item) => item.id == params.slug);
  console.log(result);
  console.log(params);
  return (
    <>
      <div className="container flex flex-col items-center justify-center mt-[20px]">
        <h2 className=" text-4xl mb-[70px] font-bold text-gray-700">
          About{" "}
          <span className=" text-4xl font-bold text-red-500">
            {result.title}
          </span>
        </h2>
        <div className="flex flex-col lg:flex-row items-center mb-[60px] lg:justify-center gap-[50px]">
          <a target="_blank" href={result.link}>
            <div className="w-[300px] lg:w-[570px] shadow-lg shadow-gray-400 ">
              <img src={result.img} alt="" />
            </div>
          </a>
          <div className="w-[570px] flex flex-col items-center lg:items-start">
            <div className="w-[100%] h-[3px] mb-[30px] bg-gray-300"></div>
            <p className="text-md lg:text-xl w-[350px] md:w-auto font-bold text-blue-950 mb-[10px]">
              {result.comment1}
            </p>
            <div className="w-[100%] h-[3px] mb-[30px] bg-gray-300"></div>
            <p className="text-md lg:text-xl w-[350px] md:w-auto font-bold text-blue-950 mb-[10px]">
              {result.comment2}
            </p>
            <div className="w-[100%] h-[3px] mb-[30px] bg-gray-300"></div>
            <p className="text-md lg:text-xl w-[350px] md:w-auto font-bold text-blue-950 mb-[10px]">
              {result.comment3}
            </p>
            <div className="w-[100%] h-[3px] mb-[30px] bg-gray-300"></div>
            <p className="text-md lg:text-xl w-[350px] md:w-auto font-bold text-blue-950 mb-[10px]">
              {result.comment4}
            </p>
            <div className="w-[100%] h-[3px] mb-[30px] bg-gray-300"></div>
            <p className="text-md lg:text-xl w-[350px] md:w-auto font-bold text-blue-950 mb-[10px]">
              Loyihada BackEnd qismiham mavjud. Back End ni Front qismi bilan
              ulagan holda Ma`lumot olish qo`shish va ochirish kabi xususiyatlar
              ishlatilgan.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="text-2xl lg:text-4xl font-bold text-red-600 mb-[20px]">
            Ishlatilgan Toolar
          </h2>
          <div className="flex flex-col">
            <div className="w-[600px] ml-auto mr-auto mb-[10px] h-[2px] bg-gray-400"></div>
            <div className="flex flex-col md:flex-row lg:flex-row items-center mb-[20px] gap-[20px]">
              <h3 className="text-xl md:text-2xl lg:text-2xl font-medium text-blue-500">
                Funksiyonalar Tarafi uchun:
              </h3>
              <p>
                <span className="text-md md:text-xl lg:text-xl font-medium text-yellow-600">
                  React Js
                </span>{" "}
                ||{" "}
                <span className="text-md md:text-xl lg:text-xl font-medium text-yellow-600">
                  Redux
                </span>{" "}
                ||{" "}
                <span className="text-md md:text-xl lg:text-xl font-medium text-yellow-600">
                  React Query
                </span>{" "}
                ||{" "}
                <span className="text-md md:text-xl lg:text-xl font-medium text-yellow-600">
                  API Fetching
                </span>{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="w-[600px] ml-auto mr-auto mb-[10px] h-[2px] bg-gray-400"></div>
            <div className="flex flex-col md:flex-row lg:flex-row items-center mb-[20px] gap-[20px]">
              <h3 className="text-xl lg:text-2xl md:text-2xl font-medium text-blue-500">
                Design Tarafi uchun:{" "}
              </h3>
              <p>
                <span className="text-md md:text-xl lg:text-xl font-medium text-yellow-600">
                  Tailwind Css
                </span>{" "}
                ||{" "}
                <span className="text-md md:text-xl lg:text-xl font-medium text-yellow-600">
                  Headless UI
                </span>{" "}
                ||{" "}
                <span className="text-md md:text-xl lg:text-xl font-medium text-yellow-600">
                  Slick
                </span>{" "}
                ||{" "}
                <span className="text-md md:text-xl lg:text-xl font-medium text-yellow-600">
                  React Skeleton
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
