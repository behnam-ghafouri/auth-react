import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";

export { Products };

function Products() {
  const [products, setProducts] = useState({});
  const [activeItem, setActiveItem] = useState(0);
  function clickonnavigation(p) {
    setActiveItem(p);
  }

  return (
    <div>
      <div class="row fullscr">
        <div class="col-2">
          <ul>
            <li
              onClick={() => clickonnavigation(1)}
              className={
                activeItem === 11 || activeItem === 12 || activeItem === 1
                  ? "active"
                  : ""
              }
            >
              Coffee
            </li>
            <div
              className={
                activeItem === 11 || activeItem === 12 || activeItem === 1
                  ? "subcategory"
                  : "d-none subcategory"
              }
            >
              <ol>
                <li
                  onClick={() => clickonnavigation(11)}
                  className={activeItem === 11 ? "sactive" : ""}
                >
                  Lavazza
                </li>
                <li
                  onClick={() => clickonnavigation(12)}
                  className={activeItem === 12 ? "sactive" : ""}
                >
                  Starbucks
                </li>
                <li
                  onClick={() => clickonnavigation(13)}
                  className={activeItem === 13 ? "sactive" : ""}
                >
                  Coming soon ...
                </li>
              </ol>
            </div>
            <li
              onClick={() => clickonnavigation(2)}
              className={activeItem === 2 ? "active" : ""}
            >
              Tea
            </li>
            <li
              onClick={() => clickonnavigation(3)}
              className={activeItem === 3 ? "active" : ""}
            >
              Hot drinks
            </li>
          </ul>
        </div>
        <div class="col-10">
          {activeItem === 1 && (
            <div class="card-deck ">
                    test test
            </div>
          )}
          {activeItem === 11 && (
            <div class="d-flex  coffee-bg fullscr">
              <div class="card m-4" style={cardw}>
                <div className="d-flex justify-content-center pt-3">
                    <img
                    src="https://m.media-amazon.com/images/I/7166rT6yqiL._AC_UL320_.jpg"
                    class="card-img-top w-50"
                    alt="..."
                    />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>

              <div class="card m-4" style={cardw}>
                <div className="d-flex justify-content-center pt-3">
                    <img
                    src="https://m.media-amazon.com/images/I/7166rT6yqiL._AC_UL320_.jpg"
                    class="card-img-top w-50"
                    alt="..."
                    />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>

            </div>
          )}
          {activeItem === 2 && <div className="big">Coming soon ...</div>}
          {activeItem === 3 && <div className="big">Coming soon ...</div>}
        </div>
      </div>
    </div>
  );
}

const cardw = {
  "max-width": "25%",
};
