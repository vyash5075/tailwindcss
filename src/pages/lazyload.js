import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
const Lazyload = () => {
  const [data, setdata] = useState([]);
  const [page, setpage] = useState(1);
  const [loader, setloader] = useState(true);

  function fetchdata() {
    console.log("yash");
    fetch(`https://randomuser.me/api/?page=${page}&results=20`)
      .then((res) => {
        if (res.ok) {
          setloader(true);
          return res.json();
        } else {
          return Promise.reject({ status: res.status });
        }
      })
      .then((res) => {
        console.log(res);
        if (page > 1) {
          let resultArr = [...data, res.results];
          setdata(resultArr);
        } else {
          setdata(res.results);
          setpage(page + 1);
        }

        setTimeout(() => {
          setdata(data.concat(Array.from({ length: 20 })));
        }, 500);
      })
      .catch((err) => console.log(err));
  }

  function loadMoreHandle(e) {
    let bottom =
      e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop;
    console.log(
      e.target.scrollHeight,
      e.target.clientHeight,
      e.target.scrollTop,
      bottom
    );

    if (bottom < 1) {
      fetchdata(page + 1);
      setpage(page + 1);
    }
  }

  useEffect(() => {
    console.log(data.length);
    fetchdata(page);
  }, []);
  return (
    <>
      <div>
        <InfiniteScroll
          dataLength={data.length}
          next={fetchdata}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          height={320}
        >
          <div
            style={{
              backgroundColor: "red",
            }}
          >
            {data.map((e, i) => {
              return (
                <p>
                  {i}. {e.email}
                </p>
              );
            })}
          </div>
        </InfiniteScroll>{" "}
      </div>
    </>
  );
};

export default Lazyload;
