import React from "react";
import { useState, useEffect } from "react";

const Lazyloading = () => {
  const [data, setdata] = useState([]);
  const [page, setpage] = useState(1);
  const [loader, setloader] = useState(true);
  const [limit,setlimit]=useState(10);
  const [offset,setoffset]=useState(10);

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
          let resultArr = [...data, ...res.results];
          setdata(resultArr);
        } else {
          setdata(res.results);
          setpage(page + 1);
        }
      })
      .catch((err) => console.log(err));
  }
  function loadMoreHandle(e) {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    console.log(
      e.target.scrollHeight,
      e.target.scrollTop,
      e.target.clientHeight,
      bottom
    );

    if (bottom) {
      fetchdata(page + 1);
      setpage(page + 1);
    }
  }

  useEffect(() => {
    console.log(data.length);
    fetchdata(page);
  }, [])
  
  useEffect(()=>{
    setlimit(12);
  },[])

  return (
    <>
      <div>
        <div
          onScroll={loadMoreHandle}
          style={{
            backgroundColor: "lightgray",
            height: "400px",
            overflow: "auto",
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
      </div>
    </>
  );
};

export default Lazyloading;
