import React from "react";
import './faq.css';
import { useState } from "react";

import arrowUp from '../../assets/faq-arrow-top.png';
import arrowDown from '../../assets/faq-arrow.png';

const Faq = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if(selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  }

  return (
    <div className="faq-container" id="faq">
      <p className="faq-text">F.A.Q</p>
      {data.map((item, i) => {
        return (
          <div className="accordion-container">
            <div className="item" onClick={() => toggle(i)}>
              <p>{item.title}</p>
              <span>{selected === i ? <img className="arrow" src={arrowUp} /> : <img className="arrow"  src={arrowDown} />}</span>
            </div>
            <div className={selected === i ? 'content show' : 'content'}>
              {item.answer}
            </div>
          </div>
        )
      })}
    </div>
  )
}

const data = [
  {title: "What type of VR headset is EX-2?",
   answer: "Our EX-2 VR headset falls into the standalone category among various VR headset types."},
  {title: "How does a virtual headset work?",
   answer: "A virtual reality (VR) headset immerses you in a simulated 3D environment using a display close to your eyes. Sensors track your head movements, allowing you to look around and feel present in the virtual world. The headset may have audio for spatial sound, and you can use controllers for interaction. It's like stepping into a different reality created by computer graphics and technology."},
  {title: "Do I need a powerful computer to use a virtual headset?",
   answer: "Our new EX-2 VR headset offers an exceptional virtual reality experience without the need for a powerful computer. It's a standalone headset, meaning all the necessary hardware is built right into the device. You can dive into immersive VR environments, games, and applications without worrying about having a high-end PC. Enjoy the freedom and ease of use with our EX-2 VR headset."},
  {title: "What are the main applications of virtual headsets?",
   answer: "The EX-2 VR headset offers a versatile experience for gaming, education, travel, health, design, social interaction, simulations, creativity, and immersive media consumption. Whether you're diving into games, exploring educational content, visualizing designs, or simply relaxing with 360-degree videos, the EX-2 VR headset adapts to your needs and preferences, making virtual reality accessible and enjoyable for everyone."}
  ]

export default Faq;