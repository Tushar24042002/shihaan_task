import React from "react";
import styles from "./FolderComponent.module.css";

const FolderComponent = ({ children }) => {
  return (
    <div className={styles.folder}>
      <div className={styles.folder_content}>
      {children}
      </div>
   
    </div>
  );
};

export default FolderComponent;
