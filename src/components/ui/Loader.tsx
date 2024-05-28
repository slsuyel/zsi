import "./LoadingComponent.css";

const Loader = () => {
  return (
    <div className="loader_wrapper">
      <div className="loading-border"></div>
      <div className="loader">
        <div className="loader__char">Z</div>
        <div className="loader__char">S</div>
        <div className="loader__char">I</div>
        <div className="loader__char">.</div>
        <div className="loader__char">A</div>
        <div className="loader__char">I</div>
        <div className="loader__char"></div>
        <div className="loader__char">-</div>
        <div className="loader__char">-</div>
        <div className="loader__char">-</div>
      </div>
    </div>
  );
};

export default Loader;
