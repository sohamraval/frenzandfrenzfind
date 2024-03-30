import { FC, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import clsx from "clsx";
import { useState } from "react";

const LayoutOutlet: FC = () => {
  const [setBgImage, setSetBgImage] = useState(true);

  const location = useLocation();

  useEffect(() => {
    if (!location.pathname.includes("level")) {
      setSetBgImage(true);
    } else {
      setSetBgImage(false);
    }
  }, [location]);

  return (
    // <div className='relative bg-[url("./assets/images/endscr.png")] bg-cover w-dvw h-dvh'>
    <div
      className={clsx(
        "relative bg-cover bg-no-repeat bg-top w-dvw h-dvh",
        setBgImage ? "bg-[url(./assets/images/homeImage.jpeg)]" : ""
      )}
    >
      <Outlet />
    </div>
  );
};

export default LayoutOutlet;
