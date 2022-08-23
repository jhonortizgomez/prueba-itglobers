import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./products.scss";

export const Products = () => {
  return (
    <section className="products">
      <div className="rain">
        <div className="rain-image">
          <img src="https://images.pexels.com/photos/1451040/pexels-photo-1451040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <div className="bg"></div>
        </div>
        <div className="rain-info">
          <img src="https://i.pinimg.com/originals/6e/62/b9/6e62b938e6d094f56473397d7ed649d9.png" />
          <h2>Pufi RAIN</h2>
          <span className="line"></span>
          <p>Descripción del producto. Este es un texto simulado.</p>
          <div className="rain-info__callToAction">
            <span>
              <MdKeyboardArrowRight />
            </span>
            <p>VER MAS</p>
          </div>
        </div>
      </div>

      <div className="puff">
        <div className="puff-info">
          <img src="https://pngscreativos.files.wordpress.com/2016/07/puff.png" />
          <h2>Pufi PUFF</h2>
          <span className="line"></span>
          <p>Descripción del producto. Este es un texto simulado.</p>
          <div className="puff-info__callToAction">
            <span>
              <MdKeyboardArrowRight />
            </span>
            <p>VER MAS</p>
          </div>
        </div>
        <div className="puff-image">
          <img src="https://media.istockphoto.com/photos/young-adult-man-listening-to-music-in-his-bedroom-with-his-dog-picture-id1182703008?k=20&m=1182703008&s=612x612&w=0&h=05dfdPOVoildk4g671m60jLD529CeQoHstzbIkeHzi4=" />
          <div className="bg"></div>
        </div>
      </div>

      <div className="cart">
        <div className="cart-image">
          <img src="https://images.pexels.com/photos/7194911/pexels-photo-7194911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <div className="bg"></div>
        </div>
        <div className="cart-info">
          <img src="https://www.pngmart.com/files/14/Vector-Shopping-Bag-Transparent-PNG.png" />
          <h2>Pufi CART</h2>
          <span className="line"></span>
          <p>Descripción del producto. Este es un texto simulado.</p>
          <div className="cart-info__callToAction">
            <span>
              <MdKeyboardArrowRight />
            </span>
            <p>VER MAS</p>
          </div>
        </div>
      </div>

      <div className="nap">
        <div className="nap-info">
          <img src="https://www.pngarts.com/files/3/Sofa-Pillow-PNG-Image.png" />
          <h2>Pufi NAP</h2>
          <span className="line"></span>
          <p>Descripción del producto. Este es un texto simulado.</p>
          <div className="nap-info__callToAction">
            <span>
              <MdKeyboardArrowRight />
            </span>
            <p>VER MAS</p>
          </div>
        </div>
        <div className="nap-image">
          <img src="https://images.pexels.com/photos/1248583/pexels-photo-1248583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <div className="bg"></div>
        </div>
      </div>
    </section>
  );
};
