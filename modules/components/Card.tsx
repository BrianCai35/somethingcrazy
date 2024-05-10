import Paragraph from "./Paragraph";
import { Children } from 'react';
import { PropsWithChildren } from "react";
import { strasua } from 'fonts'

import { FaceLeftIcon } from "../svgs";

interface CardProps {
    textColor?: 'dark' | 'light';
    color: string;
    title: string;
    number: string; 
    style?: string;
  }
  
export default function Card(props: PropsWithChildren<CardProps>): JSX.Element{
    const { children, color, title, number,textColor = 'light', style} = props
    return(
    <article className={`group relative rounded-xl bg-${color} p-5 content-end ${style} lg:w-72 lg:h-96 lg:pt-64 lg:hover:pt-0 lg:hover:pb-6 lg:ease-in-out lg:duration-[1500ms] overflow-hidden`}>
        <Paragraph theme="light" styles="lg:text-lg"><b>{`${number}`}</b></Paragraph>
        <FaceLeftIcon color="black" styles="float-right md:absolute top-2 md:-right-8" size="100"/>
        <h1 className={`${strasua} w-14 text-ivory text-3xl`} >{`${title}`}</h1>
        <hr className="ease-in-out lg:duration-1000 w-32 sm:w-72 lg:w-4 lg:group-hover:w-64 h-0.5 my-2 bg-gray-200 border-10 dark:bg-gray-700"></hr>
        <Paragraph theme="light" weight="medium" styles="lg:text-base xl:text-base ease-in-out delay-[300ms] lg:duration-[500ms] lg:pt-10 lg:pb-2 lg:group-hover:pt-0 lg:leading-tight xl:leading-tight">{children}</Paragraph>
    </article>

)}
    