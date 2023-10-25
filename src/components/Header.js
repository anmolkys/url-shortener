import React from "react";
import {AiFillGithub} from "@react-icons/all-files/ai/AiFillGithub";
import {RiTwitterFill} from "@react-icons/all-files/ri/RiTwitterFill";

export default function Header(){
    return (
        <header className='header'>
        <div class="logo">
        <a href="https://www.anmolkys.in">anmolkys</a>
    </div>
    <div class="menu">
      <a href="https://github.com/anmolkys" class="link">
        <div class="title">
          <AiFillGithub></AiFillGithub>
        </div>
        <div class="bar"></div>
      </a>
  
      <a href="https://twitter.com/" class="link">
        <div class="title">
          <RiTwitterFill></RiTwitterFill>
        </div>
        <div class="bar"></div>
      </a>
      </div>
        </header>
    )

}