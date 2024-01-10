import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Atharva Here! </b>
        Discover my journey and creativity here.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src={"/p1.jpeg"} alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
            expedita odit animi dolorem rerum enim.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, eum
            dolorum quas cum nemo neque culpa fugit ullam voluptatem commodi
            eius pariatur iusto, sint incidunt?
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
