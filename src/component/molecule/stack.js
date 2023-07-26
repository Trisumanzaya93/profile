import React from "react";

function Stack() {
  const icons = [
    "icon1.png",
    "icon2.png",
    "icon3.png",
    "icon4.png",
    "icon5.png",
    "icon6.png",
    "icon7.png",
    "icon8.png",
    "icon9.png",
    "icon10.png",
];
  return (
    <div className="w-full grid grid-cols-5 gap-10 justify-center items-center">
      {icons.map((item, idx) => {
        return (
          <div className=" flex flex-col justify-center items-center" key={idx}>
            <img
              src={require(`../../assets/icons/${item}`)}
              className="w-20 h-20"
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
}

export default Stack;
