import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

function RenderData({ data, onAddFavourites, onFetchMore, forSelection }) {
  const [hasmore, setHasmore] = useState(true);

  return (
    <div className="beer-box">
      <div className="col-12">
        <div className="row">
          {data &&
            data.map((item, i) => (
              <div className="col-lg-4 col-sm-6" key={i}>
                <InfiniteScroll
                  dataLength={data.length}
                  next={onFetchMore}
                  hasMore={hasmore}
                  endMessage={
                    <p style={{ textAlign: "center" }}>
                      <b>Yay! You have seen it all</b>
                    </p>
                  }
                >
                  <div className="box-in">
                    <div className="img-sec">
                      <img src={item.image_url} alt={item.name} />
                    </div>
                    <div className="con-sec">
                      <h3>{item.name}</h3>
                      <p>
                        {item && item.description.length > 100
                          ? item.description.substring(0, 100) + "..."
                          : item.description}
                      </p>
                    </div>
                    {forSelection ? (
                      <div className="fa-cross">
                        <i
                          className={
                            item.fav ? "fa fa-star active" : "fa fa-star"
                          }
                          aria-hidden="true"
                          onClick={(e) => {
                            onAddFavourites(e, i, item);
                          }}
                        ></i>
                      </div>
                    ) : null}
                  </div>
                </InfiniteScroll>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default RenderData;
