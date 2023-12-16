import Image from "next/image";
import { ViewMenu } from "../components";
import { SliderItemProps } from "@/types/types";

const SliderItem = ({imageUrl, subtitle, title, text} : SliderItemProps) => {
    return (
        <li className="slider-item active">
            <div className="slider-bg">
                <Image
                    src={imageUrl}
                    alt='hero-slider-1'
                    width={1880}
                    height={950}
                    className='d-block hght-auto img-cover'
                />
            </div>
            <p className="label-2 section-subtitle slider-reveal">{subtitle}</p>
            <h1 className="display-1 hero-title slider-reveal">{title}</h1>
            {/* <h1 className="display-1 hero-title slider-reveal">For the love of <br/> delicious food</h1> */}
            <p className="body-2 hero-text slider-reveal">{text}</p>
            <ViewMenu/>
        </li>
    )
}

export default SliderItem;


{/* // <li class="slider-item active" data-hero-slider-item>
        //     <div class="slider-bg">
        //       <img src="./assets/img/hero-slider-1.jpg" width="1880" height="950" alt="" class="img-cover">
        //     </div>
        //     <p class="label-2 section-subtitle slider-reveal">Traditional & Hygine</p>
        //     <h1 class="display-1 hero-title slider-reveal">For the love of <br> delicious food</h1>
        //     <p class="body-2 hero-text slider-reveal">Come with family & feel the joy of mouthwatering food</p>
        //     <a href="#" class="btn btn-primary slider-reveal">
        //       <span class="text text-1">View Our Menu</span>
        //       <span class="text text-2" aria-hidden="true">View Our Menu</span>
        //     </a>
        //   </li>

        //   <li class="slider-item" data-hero-slider-item>
        //     <div class="slider-bg">
        //       <img src="./assets/img/hero-slider-2.jpg" width="1880" height="950" alt="" class="img-cover">
        //     </div>
        //     <p class="label-2 section-subtitle slider-reveal">delightful experience</p>
        //     <h1 class="display-1 hero-title slider-reveal">Flavors Inspired by <br> the Seasons</h1>
        //     <p class="body-2 hero-text slider-reveal">Come with family & feel the joy of mouthwatering food</p>
        //     <a href="#" class="btn btn-primary slider-reveal">
        //       <span class="text text-1">View Our Menu</span>
        //       <span class="text text-2" aria-hidden="true">View Our Menu</span>
        //     </a>
        //   </li>

        //   <li class="slider-item" data-hero-slider-item>
        //     <div class="slider-bg">
        //       <img src="./assets/img/hero-slider-3.jpg" width="1880" height="950" alt="" class="img-cover">
        //     </div>
        //     <p class="label-2 section-subtitle slider-reveal">amazing & delicious</p>
        //     <h1 class="display-1 hero-title slider-reveal">Where every flavor <br> tells a story</h1>
        //     <p class="body-2 hero-text slider-reveal">Come with family & feel the joy of mouthwatering food</p>
        //     <a href="#" class="btn btn-primary slider-reveal">
        //       <span class="text text-1">View Our Menu</span>
        //       <span class="text text-2" aria-hidden="true">View Our Menu</span>
        //     </a>
        //   </li> */}