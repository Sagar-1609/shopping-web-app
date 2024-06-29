import React from "react";

function HomeCard({ data }) {
  return (
    <>
      <div className="card w-96 h-60 image-full rounded-none bg-neutral bg-opacity-5">
        <figure>
          <img
            src={data.image}
            alt="Shoes"
            className="object-cover  w-96 h-60 "
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data.Title}</h2>
          <p>{data.info}</p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeCard;
