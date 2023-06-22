import React from "react";
import Lottie from "lottie-react";
import vino from "../data/vino.json";
import multilabel from "../data/multilabel.json";

type Props = {
  file: string;
  "client: load": boolean;
};

const ImageSvg = (file) => {
  const style = {
    width: 150,
  };

  const interactivity = {
    mode: "scroll",
    actions: [
      {
        visibility: [0, 0.2],
        type: "stop",
        frames: [0],
      },
      {
        visibility: [0.2, 0.45],
        type: "seek",
        frames: [0, 45],
      },
      {
        visibility: [0.45, 1.0],
        type: "seek",
        frames: [45, 60],
      },
    ],
  };

  return file === "vino" ? <Lottie animationData={vino} style={style} interactivity={interactivity} /> : <Lottie animationData={multilabel} style={style} interactivity={interactivity} />;
};

export default ImageSvg;
