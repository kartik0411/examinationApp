import { Image } from "antd";

function ReportHeader({ certificationNo }) {
  return (
    <>
      <div>
        <div className="position-absolute">
          <Image
            className="img_display"
            width={100}
            height={60}
            src="https://www.myndkare.com/wp-content/uploads/2021/05/cropped-myndkare-logo-115x57.png"
          />
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h1 className="text-success mt-2">
            <b>MYNDKARE</b>
          </h1>
          <p className="m-0">Career Testing and Couselling Services</p>
          <p>
            <b>CERTIFICATION NO: </b>
            {certificationNo}
          </p>
        </div>
      </div>
    </>
  );
}

export default ReportHeader;
