import React from 'react';
import {useEffect,useState} from 'react';
import ImageOne from '../images/imq.jpg'
import ImageTwo from '../images/im2.jpg'
export const content = () => {
    const [viewContent,setViewContent]=useState(null);
    return (
        <>
        <div class="menu-card">
            <img className="center-content"src={ImageOne} alt="egg"/>
            <div class="flex flex-col justify-center items-center">
                <h2 class="text-2xl mb-2">Egg Muffins</h2>
                <p class="mb-2 ">Crispy, Delicious,and Nutricious</p>
                <span>$16</span>
                            </div>
        </div>
        <div class="flex flex-col justify-start items-center bg-white h-screen font-mono py-40">
            <img class="h-full  rounded-3xl mb-20 shadow"src={ImageTwo} alt="egg"/>
            <div class="flex flex-col justify-center items-center">
                <h2 class="text-2xl mb-2">Egg Muffins</h2>
                <p class="mb-2 ">Crispy, Delicious,and Nutricious</p>
                <span>$16</span>
                            </div>
        </div>
        </>
    )
}

export default content
