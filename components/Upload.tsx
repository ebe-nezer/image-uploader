import { useRouter } from "next/router";
import { Button, Title } from "../styled-components/Home";
import {
  UploadContainer,
  UploadingScreen,
  UploadWrapper,
} from "../styled-components/Upload";

type UploadType = {
  str: string;
  type: string;
  uploadstatus: (e: boolean) => void;
};
const Upload = ({ str, type, uploadstatus }: UploadType) => {
  const router = useRouter();
  return (
    <UploadingScreen>
      <UploadContainer>
        <UploadWrapper>
          <Title className="title">{type}</Title>
          {type !== "Error" ? (
            <>
              <div className="progress-horizontal">
                <div className="bar-horizontal" />
              </div>
            </>
          ) : (
            <>
              <p>{str}</p>
              <Button
                onClick={() => {
                  uploadstatus(false);
                  router.push("/");
                }}
              >
                Go Back
              </Button>
            </>
          )}
        </UploadWrapper>
      </UploadContainer>
    </UploadingScreen>
  );
};

export default Upload;
