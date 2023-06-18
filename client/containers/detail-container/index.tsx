"use client"
import Image from "next/image";
import styles from "./style.module.scss"
import ButtonGlass from "@/components/Buttons/Glassmorph";
import like from "@/assets/png/icon/like.png"
import SizeButton from "@/components/Buttons/Sizebutton";
import { useState, useEffect, use } from "react";
import Review from "@/components/Review";
import Aos from "aos";
import { Product, Size } from "@/types/types";
import axios from "axios";
import DetailContent from "./detail-content";
import DetailBackground from "./detail-background";

const fetchSingleItem = async(id:string) => {
    const res = await axios.post(process.env.API_ENDPOINT || "http://localhost:3000" +"/api/products/getSingle",{id:id})
 
    return res.data
}

const DetailContainer = ({id}:{id:string}) => {
    const data = use(fetchSingleItem(id))
   console.log("test")
    useEffect(() => {
        Aos.init()
    },[])
    return(
        <div className={styles.wrapper}>
            <DetailBackground img={data.img}/>
            <DetailContent data={data}/>
        </div>
    )
}

export default DetailContainer;