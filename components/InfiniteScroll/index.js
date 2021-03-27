import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

import { Loading } from "./style";

const options = {
  root: null,
  rootMargin: "0px 0px 40px 0px",
  threshold: 0
};

const InfiniteScroll = ({ children, loadMore }) => {
  const detectorRef = useRef(null);

  useEffect(() => {
    const callback = ([entry]) => {
      if (entry && entry.isIntersecting) {
        loadMore();
      }
    };

    let observer = new IntersectionObserver(callback, options);
    observer.observe(detectorRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {children}
      <Loading ref={detectorRef}>Loading...</Loading>
    </div>
  );
};

InfiniteScroll.propTypes = {
  children: PropTypes.node.isRequired,
  loadMore: PropTypes.func.isRequired
};

export default InfiniteScroll;
