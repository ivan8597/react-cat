import React from "react";
import styles from "../styles/Controls.module.scss";


type ControlsProps = {
  isEnabled: boolean;
  setIsEnabled: (value: boolean) => void;
  isAutoRefresh: boolean;
  setIsAutoRefresh: (value: boolean) => void;
  onGetCat: () => void;
}

const Controls: React.FC<ControlsProps> = ({
  isEnabled,
  setIsEnabled,
  isAutoRefresh,
  setIsAutoRefresh,
  onGetCat,
}) => {
  return (
    <div className={styles.controls}>
      <label className={styles.checkbox}>
        <input
          type="checkbox"
          checked={isEnabled}
          onChange={(e) => setIsEnabled(e.target.checked)}
        />
        Enabled
      </label>
      <label className={styles.checkbox}>
        <input
          type="checkbox"
          checked={isAutoRefresh}
          onChange={(e) => setIsAutoRefresh(e.target.checked)}
          disabled={!isEnabled}
        />
        Auto-refresh every 5 second
      </label>
      <button className={styles.button} onClick={onGetCat} disabled={!isEnabled}>
        Get cat
      </button>
    </div>
  );
};

export default Controls;