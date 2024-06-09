import React from "react";
import styles from "./ServiceBox.module.css";
import FolderComponent from "../../../component/folder/FolderComponent";

const ServiceBox = ({ data, countIndex, isNextPresent }) => {
  return (
    <div key={countIndex}
      className={`col-lg-12 py-5 ${styles.service_box} ${
        isNextPresent ? styles.nextBox : " "
      } ${countIndex % 2 == 0 ? styles.rightErase +  " ps-lg-5 ps-md-5 ps-4" : styles.leftErase + " pe-lg-5 pe-md-5 pe-4"}`}
    >
      <div
        className={`py-4 ${styles.line} ${
          countIndex % 2 != 0 ? styles.rightLine : styles.leftLine
        }`}
      >
        <div className={styles.count}>{countIndex + 1}</div>
      </div>





      <div
        className={`row ${
          countIndex % 2 != 0
            ? "flex-lg-row-reverse flex-column"
            : "flex-lg-row  flex-column"
        }`}
      >
        <div className="col-lg-8">
          <div className={`order-1 ${countIndex % 2 != 0 ? "ms-auto" : ""}`}>
            <div className={styles.title}>
              <h3 className={countIndex % 2 == 0 ? "text-start" : "text-end"}>{data?.title}</h3>
            </div>
            <div className={styles.title_desc}>
              <p className={countIndex % 2 == 0 ? "text-start" : "text-end"}>{data?.description}</p>
            </div>
          </div>
          <div className="row">
            <div className={`col-lg-6 col-md-6 mb-lg-0 mb-md-0 ${countIndex % 2 != 0 ? "ps-0" : "pe-0"}`}>
              <FolderComponent>
                <div className={styles.folder_body}>
                  <div className="d-flex align-items-center">
                    <div className={styles.icon_box}>
                      <img
                        src={data?.folder_1?.icon}
                        width={"100%"}
                        alt={data?.folder_1?.title}
                      />
                    </div>
                    <div className={styles.folder_title}>
                      <h5>{data?.folder_1?.title}</h5>
                    </div>
                  </div>
                  <div className={styles.folder_list}>
                    <ul>
                      {data?.folder_1?.text_arr?.map((e, index) => {
                        return <li key={index}>{e}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              </FolderComponent>
            </div>
            <div className={`col-lg-6 col-md-6 mb-lg-0 mb-md-0 mb-4 ${countIndex % 2 != 0 ? "ps-0" : "pe-0"}`}>
              <FolderComponent>
                <div className={styles.folder_body}>
                  <div className="d-flex align-items-center">
                    <div className={styles.icon_box}>
                      <img
                        src={data?.folder_2?.icon}
                        width={"100%"}
                        alt={data?.folder_1?.title}
                      />
                    </div>
                    <div className={styles.folder_title}>
                      <h5>{data?.folder_2?.title}</h5>
                    </div>
                  </div>
                  <div className={styles.folder_list}>
                    <ul>
                      {data?.folder_2?.text_arr?.map((e, index) => {
                        return <li key={index}>{e}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              </FolderComponent>
            </div>
          </div>
        </div>
        <div className="col-lg-4 px-3 mt-lg-auto mt-md-auto mt-4">
          <div className="img-box">
            <img src={data?.image} width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;
