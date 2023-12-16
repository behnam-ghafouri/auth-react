import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


export { Products };


function Products() {

    return (
        <div class="card-deck">
            <div class="card" style={cardw}>
            <img src="https://m.media-amazon.com/images/I/7166rT6yqiL._AC_UL320_.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>

            <div class="card" style={cardw}>
            <img src="https://m.media-amazon.com/images/I/7166rT6yqiL._AC_UL320_.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>

            <div class="card" style={cardw}>
            <img src="https://m.media-amazon.com/images/I/7166rT6yqiL._AC_UL320_.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            
        </div>
    );
}

const cardw = {
    "max-width": "25%" ,
};
