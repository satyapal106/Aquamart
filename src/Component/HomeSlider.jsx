import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HomeSlider.css';
function HomeSlider(){

    const [data, setData] =useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        fetch('https://aquamartadmin.digitalnawab.com/api/slider')
        .then(response => {
            if(!response.ok) {
               throw new Error("Data Not Found");
            }
            return response.json();
        })
        .then(data => {
            setData(data.data);
            //console.log(data);
            setLoading(false);
        })
        .catch(error => {
            setError(error);
            setLoading(false);
          });

    }, []);

    if(loading) {
        return <div>Loading...</div>;
      }
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const sliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
    }

    return (

        <>

        <Slider {...sliderSettings}>

            {data.map((item, index) => (
                <img key={index} src={'https://aquamartadmin.digitalnawab.com/'+ item.slider_image}  alt={item.alt_text} />
            ))}
        </Slider>

        </>

    );
}


export default HomeSlider;