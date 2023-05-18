"use client"
import Image from "next/image";
import styles from "./style.module.scss"
import ButtonGlass from "@/components/Buttons/Glassmorph";
import like from "@/assets/png/icon/like.png"
import SizeButton from "@/components/Buttons/Sizebutton";
import { useState, useEffect } from "react";
import Review from "@/components/Review";
import Aos from "aos";

const DetailContainer = ({img}:{img:any}) => {

    const [reviewSwitch, setReviewSwitch]= useState(false);
    useEffect(() => {
        Aos.init()
    },[])
    return(
        <div className={styles.detail}>
            <div className={styles.detail__img}>
                <Image src={img} alt="product" fill style={{objectFit:'cover'}}></Image>
                <div className={styles.detail__img__size}>
                    <SizeButton text='S'/>
                    <SizeButton text='M'/>
                    <SizeButton text='L'/>
                </div>
            </div>
            <div className={styles.detail__info}>
                <div className={styles.detail__info__text}>
                    <h1>Jump</h1>
                    {!reviewSwitch?
                <div className={styles.detail__info__text__desc}>
                        <p data-aos="fade-right" data-aos-duration="500">The stroee lorem ipsum dolor sit amen dolor sit lore. Lorem dlor aman sit loei is the key of the zort The stroee lorem ipsum dolor sit amen dolor sit lore. Lorem dlor aman sit loei is the key of the zort The stroee lorem ipsum dolor sit amen dolor sit lore. Lorem dlor aman sit loei is the key of the zortThe stroee lorem ipsum dolor sit amen dolor sit lore. Lorem dlor aman sit loei is the key of the zort The stroee lorem ipsum dolor sit amen dolor sit lore. Lorem dlor aman sit loei is the key of the zort</p>
                </div>
                    :                        
                    <div data-aos="fade-left" className={styles.detail__info__text__reviews}>
                    <Review></Review>
                    <Review></Review>
                    <Review></Review>
                    </div>
                    }
                </div>
                <div className={styles.detail__info__cta}>
                    <div className={styles.detail__info__cta__buttons}>
                        <ButtonGlass text="Buy Now" onClick={""}/>
                        <ButtonGlass text={<Image alt='fav icon' height={25} width={27} src={like}/>}onClick={""}/>
                    </div>
                    <div>
                        <ButtonGlass text={!reviewSwitch?"Reviews(2)":"Details"} onClick={() => setReviewSwitch(!reviewSwitch)}></ButtonGlass>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailContainer;