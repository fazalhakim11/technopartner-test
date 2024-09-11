import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPullToRefresh from "react-pull-to-refresh";

import Logo from "../../assets/logo_technopartner.png";
import ProfileCard from "../../components/profileCard";
import Banner from "../../components/banner";
import { getData } from "../../stores/slices/profileSlice";
import QrCode from "../../components/qr";
import Navbar from "../../components/navbar";

const Home = () => {
  const data = useSelector((state) => state.profile.profile);
  const token = useSelector((state) => state.login.token);
  const token_type = useSelector((state) => state.login.token_type);
  const dispatch = useDispatch();

  const handleRefresh = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch(getData(token, token_type));
        resolve();
      }, 500);
    });
  };

  const [show, setShow] = useState(false);

  const handleQRClicked = () => {
    setShow(!show);
  };

  return (
    <div className="w-[100%] relative">
      <Navbar />
      <ReactPullToRefresh
        onRefresh={handleRefresh}
      >
        {show && <QrCode image={data.qrcode} clickQR={handleQRClicked} />}
        <header>
          <img
            src={Logo}
            alt="Technopartner Indonesia"
            className="h-[70px] ps-2 xs:ps-3"
          />
        </header>
        <ProfileCard handleQRClicked={handleQRClicked} />
        <Banner />
      </ReactPullToRefresh>
    </div>
  );
};

export default Home;
