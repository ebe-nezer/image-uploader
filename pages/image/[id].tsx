import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { AxoisData } from "..";

const ShowImage = () => {
  const [url, setUrl] = React.useState<string>();
  const router = useRouter().query;
  axios
    .get(`/api/image?id=${router.id}`)
    .then(({ data }: AxoisData) => {
      setUrl(data.path);
    })
    .catch((err) => console.log(err));
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        paddingBottom: "20%",
      }}
    >
      {typeof url === "string" && url.length > 5 ? (
        <Image
          alt="image"
          src={url}
          layout="fill"
          objectFit="contain" // Scale your image down to fit into the container
        />
      ) : (
        <p>Image Not Found</p>
      )}
    </div>
  );
};

export default ShowImage;
