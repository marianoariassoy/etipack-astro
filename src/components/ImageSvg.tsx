import Lottie from "lottie-react";

const ImageSvg = () => {
  const style = {
    width: 150,
  };

  type Interactivity = {
    mode: "scroll";
    actions: any[];
  };

  const interactivity: Interactivity = {
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

  return <Lottie animationData="../data/multilabel.json" style={style} interactivity={interactivity} />;
};

export default ImageSvg;
