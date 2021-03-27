import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

import Loader from "components/Loader";

const options = {
  root: null,
  rootMargin: "0px 0px 40px 0px",
  threshold: 0
};

const InfiniteScroll = ({ children, loadMore }) => {
  const observerRef = useRef(null);

  useEffect(() => {
    const callback = ([entry]) => {
      if (entry && entry.isIntersecting) {
        loadMore();
      }
    };

    let observer = new IntersectionObserver(callback, options);
    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {children}
      <div ref={observerRef}>
        <Loader />
      </div>
    </div>
  );
};

InfiniteScroll.propTypes = {
  children: PropTypes.node.isRequired,
  loadMore: PropTypes.func.isRequired
};

export default InfiniteScroll;
