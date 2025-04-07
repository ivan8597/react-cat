import React, { useState, useEffect } from "react";
import styles from "../styles/AppContainer.module.css";
import Controls from "./Controls";
import CatImage from "./CatImage";
import { fetchCat, Cat } from "../services/api";

const AppContainer: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState<boolean>(true);
  const [isAutoRefresh, setIsAutoRefresh] = useState<boolean>(false);
  const [cat, setCat] = useState<Cat | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getCat = async () => {
    if (!isEnabled) return;
    setIsLoading(true);
    try {
      const newCat = await fetchCat();
      setCat(newCat);
    } catch (error) {
      console.error("Не удалось загрузить изображение кота:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCat(); 
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (isEnabled && isAutoRefresh) {
      interval = setInterval(() => {
        getCat();
      }, 5000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isEnabled, isAutoRefresh]);

  return (
    <div className={styles.container}>
      <Controls
        isEnabled={isEnabled}
        setIsEnabled={setIsEnabled}
        isAutoRefresh={isAutoRefresh}
        setIsAutoRefresh={setIsAutoRefresh}
        onGetCat={getCat}
      />
      <CatImage cat={cat} isLoading={isLoading} />
    </div>
  );
};

export default AppContainer;