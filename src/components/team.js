import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Img from "gatsby-image"

const TeamSlider = ({ images }) => {
  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  }
  return (
    <Slider {...settings}>
      <div class="content">
        <div class="content-overlay"></div>
        <img class="content-image" src={require("../images/team/Bena.png")} />
        <div class="content-details fadeIn-top">
          <h3>Benuarta Pasho</h3>
          <p>Speakers</p>
        </div>
      </div>

      <div class="content">
        <div class="content-overlay"></div>
        <img class="content-image" src={require("../images/team/Danny.png")} />
        <div class="content-details fadeIn-top">
          <h3>Yordan Toshev</h3>
          <p>Speakers</p>
        </div>
      </div>

      <div class="content">
        <div class="content-overlay"></div>
        <img class="content-image" src={require("../images/team/DesiA.png")} />
        <div class="content-details fadeIn-top">
          <h3>Desislava Arnaudova</h3>
          <p>Speakers</p>
        </div>
      </div>

      <div class="content">
        <div class="content-overlay"></div>
        <img class="content-image" src={require("../images/team/Iva.png")} />
        <div class="content-details fadeIn-top">
          <h3>Iva Komsiyska</h3>
          <p>Sponsorship</p>
        </div>
      </div>

      <div class="content">
        <div class="content-overlay"></div>
        <img class="content-image" src={require("../images/team/Ivo.png")} />
        <div class="content-details fadeIn-top">
          <h3>Ivo Kovachev</h3>
          <p>Sponsorship</p>
        </div>
      </div>

      <div class="content">
        <div class="content-overlay"></div>
        <img class="content-image" src={require("../images/team/Kejsa.png")} />
        <div class="content-details fadeIn-top">
          <h3>Kejsa Haska</h3>
          <p>Speakers</p>
        </div>
      </div>

      <div class="content">
        <div class="content-overlay"></div>
        <img class="content-image" src={require("../images/team/Krisi.png")} />
        <div class="content-details fadeIn-top">
          <h3>Kristina Borisova</h3>
          <p>PR</p>
        </div>
      </div>

      <div class="content">
        <div class="content-overlay"></div>
        <img class="content-image" src={require("../images/team/Maria.png")} />
        <div class="content-details fadeIn-top">
          <h3>Maria Fylyppova</h3>
          <p>Speakers</p>
        </div>
      </div>

      <div class="content">
        <div class="content-overlay"></div>
        <img class="content-image" src={require("../images/team/Megi.png")} />
        <div class="content-details fadeIn-top">
          <h3>Margarita Arsova</h3>
          <p>PR</p>
        </div>
      </div>

      <div class="content">
        <div class="content-overlay"></div>
        <img class="content-image" src={require("../images/team/Nevis.png")} />
        <div class="content-details fadeIn-top">
          <h3>Nevis Veli</h3>
          <p>Speakers</p>
        </div>
      </div>

      <div class="content">
        <div class="content-overlay"></div>
        <img class="content-image" src={require("../images/team/Stasy.png")} />
        <div class="content-details fadeIn-top">
          <h3>Stanislava Ovcharova</h3>
          <p>Design</p>
        </div>
      </div>

      <div class="content">
        <div class="content-overlay"></div>
        <img class="content-image" src={require("../images/team/Velko.png")} />
        <div class="content-details fadeIn-top">
          <h3>Velislav Tsenov</h3>
          <p>Logistics</p>
        </div>
      </div>

      <div class="content">
        <div class="content-overlay"></div>
        <img class="content-image" src={require("../images/team/Viki.png")} />
        <div class="content-details fadeIn-top">
          <h3>Viktoria Ivanova</h3>
          <p>Sponsorship/Logistics</p>
        </div>
      </div>

      <div class="content">
        <div class="content-overlay"></div>
        <img class="content-image" src={require("../images/team/Yenlik.png")} />
        <div class="content-details fadeIn-top">
          <h3>Yenlik O’Neill</h3>
          <p>Design</p>
        </div>
      </div>

      <div class="content">
        <div class="content-overlay"></div>
        <img class="content-image" src={require("../images/team/Zhozhi.png")} />
        <div class="content-details fadeIn-top">
          <h3>Georgi Georgiev</h3>
          <p>Logistics</p>
        </div>
      </div>

      <div class="content">
        <div class="content-overlay"></div>
        <img class="content-image" src={require("../images/team/Ava.png")} />
        <div class="content-details fadeIn-top">
          <h3>Hava Hoxha</h3>
          <p>Design</p>
        </div>
      </div>

      <div class="content">
        <div class="content-overlay"></div>
        <img class="content-image" src={require("../images/team/Betty.png")} />
        <div class="content-details fadeIn-top">
          <h3>Roberta Tihomirova</h3>
          <p>Sponsorship</p>
        </div>
      </div>

      <div class="content">
        <div class="content-overlay"></div>
        <img class="content-image" src={require("../images/team/Alex.png")} />
        <div class="content-details fadeIn-top">
          <h3>Alex Mishev</h3>
          <p>IT</p>
        </div>
      </div>

      <div class="content">
        <div class="content-overlay"></div>
        <img class="content-image" src={require("../images/team/Desi.png")} />
        <div class="content-details fadeIn-top">
          <h3>Desislava Manova</h3>
          <p>Logistics</p>
        </div>
      </div>

      <div class="content">
        <div class="content-overlay"></div>
        <img class="content-image" src={require("../images/team/Viktoriya.png")} />
        <div class="content-details fadeIn-top">
          <h3>Viktoria Kuzmanova</h3>
          <p>Speakers</p>
        </div>
      </div>

      <div class="content">
        <div class="content-overlay"></div>
        <img class="content-image" src={require("../images/team/Ilina.png")} />
        <div class="content-details fadeIn-top">
          <h3>Ilina Stoyanova</h3>
          <p>Logistics</p>
        </div>
      </div>

      <div class="content">
        <div class="content-overlay"></div>
        <img class="content-image" src={require("../images/team/Ivaylo.png")} />
        <div class="content-details fadeIn-top">
          <h3>Ivaylo Todorov</h3>
          <p>Logistics/Sponsorship</p>
        </div>
      </div>

      <div class="content">
        <div class="content-overlay"></div>
        <img class="content-image" src={require("../images/team/Jorgo.png")} />
        <div class="content-details fadeIn-top">
          <h3>Jorgo Qirjaj</h3>
          <p>President</p>
        </div>
      </div>

      <div class="content">
        <div class="content-overlay"></div>
        <img class="content-image" src={require("../images/team/Kera.png")} />
        <div class="content-details fadeIn-top">
          <h3>Kera Staneva</h3>
          <p>Speakers</p>
        </div>
      </div>

      <div class="content">
        <div class="content-overlay"></div>
        <img class="content-image" src={require("../images/team/Mari.png")} />
        <div class="content-details fadeIn-top">
          <h3>Marina Marinova</h3>
          <p>Sponsorship</p>
        </div>
      </div>

      <div class="content">
        <div class="content-overlay"></div>
        <img class="content-image" src={require("../images/team/Medea.png")} />
        <div class="content-details fadeIn-top">
          <h3>Medea Cabej</h3>
          <p>Design</p>
        </div>
      </div>

      <div class="content">
        <div class="content-overlay"></div>
        <img class="content-image" src={require("../images/team/Nastya.png")} />
        <div class="content-details fadeIn-top">
          <h3>Anastasiia Buzduga </h3>
          <p>PR</p>
        </div>
      </div>

      <div class="content">
        <div class="content-overlay"></div>
        <img class="content-image" src={require("../images/team/Stanislav.png")} />
        <div class="content-details fadeIn-top">
          <h3>Stanislav Todorov</h3>
          <p>Logistics</p>
        </div>
      </div>

      <div class="content">
        <div class="content-overlay"></div>
        <img class="content-image" src={require("../images/team/Sviat.png")} />
        <div class="content-details fadeIn-top">
          <h3>Sviatoslav Hryhorenko</h3>
          <p>PR</p>
        </div>
      </div>

      <div class="content">
        <div class="content-overlay"></div>
        <img class="content-image" src={require("../images/team/Vikii.png")} />
        <div class="content-details fadeIn-top">
          <h3>Viktoria Angelova</h3>
          <p>Sponsorship</p>
        </div>
      </div>

      <div class="content">
        <div class="content-overlay"></div>
        <img class="content-image" src={require("../images/team/Zdravlo.png")} />
        <div class="content-details fadeIn-top">
          <h3>Zdravko Zdravkov</h3>
          <p>Speakers</p>
        </div>
      </div>
    </Slider>
  )
}

export default TeamSlider
