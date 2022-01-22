import Image from "next/image";
import { useRouter } from "next/router";

const ShowImage = () => {
  const router = useRouter();
  return (
    <div style={{ position: "relative", width: "100%", paddingBottom: "20%" }}>
      <Image
        alt="Image Alt"
        src={`/${router.query.id}`}
        layout="fill"
        objectFit="contain" // Scale your image down to fit into the container
      />
    </div>
  );
};

export default ShowImage;
